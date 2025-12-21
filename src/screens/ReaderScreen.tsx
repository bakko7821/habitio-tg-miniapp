import { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system/legacy';
import { RootStackParamList } from '../../App';
import { getBook, getProgress, saveProgress } from '../storage/bookRepo';
import { useTheme } from '../theme/useTheme';

type ReaderRoute = RouteProp<RootStackParamList, 'Reader'>;

export default function ReaderScreen() {
  const colors = useTheme();
  const route = useRoute<ReaderRoute>();
  const { bookId } = route.params;

  const webRef = useRef<WebView>(null);

  const [loading, setLoading] = useState(true);
  const [payload, setPayload] = useState<{ base64: string; startCfi: string | null } | null>(null);

  const [percent, setPercent] = useState(0);
  const [debug, setDebug] = useState<string | null>(null);

  const html = useMemo(() => {
    const bg = colors.background;
    const fg = colors.text;

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    html, body { margin:0; padding:0; height:100%; background:${bg}; color:${fg}; }
    #viewer { height: 100vh; width: 100vw; }
    #status {
      position: fixed; left: 12px; top: 12px; z-index: 9999;
      background: rgba(0,0,0,0.65); color: white;
      padding: 8px 10px; border-radius: 10px; font-family: -apple-system, system-ui;
      max-width: 92vw; word-break: break-word;
    }
  </style>
</head>
<body>
  <div id="viewer"></div>
  <div id="status">Загрузка ридера...</div>

  <script>
    const statusEl = document.getElementById('status');

    function setStatus(text) {
      statusEl.textContent = text || '';
      statusEl.style.display = text ? 'block' : 'none';
    }

    function post(type, data) {
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(JSON.stringify({ type, data }));
      }
    }

    function onIncomingMessage(event) {
    try {
        const raw = event && typeof event.data === 'string' ? event.data : '';

        // ✅ игнорим пустые/не JSON сообщения
        if (!raw || raw.trim().length === 0) return;
        const first = raw.trim()[0];
        if (first !== '{' && first !== '[') return;

        const msg = JSON.parse(raw);

        if (msg.type === 'load') {
        loadFromBase64(msg.data.base64, msg.data.startCfi);
        return;
        }
        if (msg.type === 'next') {
        rendition && rendition.next();
        return;
        }
        if (msg.type === 'prev') {
        rendition && rendition.prev();
        return;
        }
    } catch (e) {
        // ✅ не спамим ошибками по пустякам, но можно оставить статус
        setStatus('Ошибка message: ' + String(e));
        post('error', { message: 'Bad message: ' + String(e) });
    }
    }
    document.addEventListener('message', onIncomingMessage);
    window.addEventListener('message', onIncomingMessage);

    // Прокидываем JS ошибки наверх
    window.onerror = function(message, source, lineno, colno) {
      const text = 'JS error: ' + message + ' @' + lineno + ':' + colno;
      setStatus(text);
      post('error', { message: text });
    };

    let book = null;
    let rendition = null;

    async function waitForLibs() {
      // ждём, пока подгрузятся JSZip и ePub
      for (let i = 0; i < 80; i++) { // ~8 секунд
        const hasZip = !!window.JSZip;
        const hasEpub = !!window.ePub;
        if (hasZip && hasEpub) return true;
        await new Promise(r => setTimeout(r, 100));
      }
      return false;
    }

    async function loadFromBase64(base64, startCfi) {
      setStatus('Загружаю библиотеки...');
      const ok = await waitForLibs();
      if (!ok) {
        const reason = (!window.JSZip && !window.ePub)
          ? 'JSZip и epub.js не загрузились (нет интернета / блокировка CDN).'
          : (!window.JSZip ? 'JSZip не загрузился (epub = zip).' : 'epub.js не загрузился.');
        setStatus(reason);
        post('error', { message: reason });
        return;
      }

      try {
        setStatus('Открываю книгу...');
        const binary = atob(base64);
        const len = binary.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);

        book = window.ePub(bytes.buffer);

        setStatus('Считаю страницы...');
        await book.ready;

        try {
        // generate() может занять время на больших книгах
        await book.locations.generate(1500);
        } catch (e) {
        // не критично — просто не будет page/percent
        post('log', { message: 'locations.generate failed: ' + String(e) });
        }

        rendition = book.renderTo('viewer', {
        width: '100%',
        height: '100%',
        spread: 'none',
        flow: 'paginated',
        });

        // ✅ На каждой смене позиции считаем "страницу" и проценты
        rendition.on('relocated', (location) => {
        try {
            const cfi = location?.start?.cfi ?? null;

            let page = null;
            let total = null;
            let percent = null;

            if (cfi && book.locations && book.locations.length && book.locations.locationFromCfi) {
            total = book.locations.length(); // кол-во условных страниц
            page = book.locations.locationFromCfi(cfi); // номер (обычно 1..total)
            if (typeof page === 'number' && typeof total === 'number' && total > 0) {
                percent = page / total;
            }
            }

            post('progress', { cfi, percent, page, total });
        } catch (e) {
            // игнор
        }
        });

        await rendition.display(startCfi || undefined);

        setStatus('');
        post('ready', {});
      } catch (e) {
        const msg = 'Ошибка открытия: ' + String(e);
        setStatus(msg);
        post('error', { message: msg });
      }
    }
  </script>

  <!-- ✅ ВАЖНО: JSZip должен быть подключен ДО epub.js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
  <script src="https://unpkg.com/epubjs/dist/epub.min.js"></script>
</body>
</html>
`;
  }, [colors.background, colors.text]);

  useEffect(() => {
    (async () => {
      const book = getBook(bookId);
      const prog = getProgress(bookId);

      if (!book) {
        setDebug('Книга не найдена в БД');
        setLoading(false);
        return;
      }

      try {
        const base64 = await FileSystem.readAsStringAsync(book.filePath, {
          encoding: FileSystem.EncodingType.Base64,
        });
        setPayload({ base64, startCfi: prog?.cfi ?? null });
        setPercent(prog?.percent ?? 0);
      } catch (e) {
        setDebug('Не удалось прочитать файл: ' + String(e));
      } finally {
        setLoading(false);
      }
    })();
  }, [bookId]);

  const sendLoad = () => {
    if (!payload) return;
    webRef.current?.postMessage(JSON.stringify({ type: 'load', data: payload }));
  };

  const goNext = () => webRef.current?.postMessage(JSON.stringify({ type: 'next' }));
  const goPrev = () => webRef.current?.postMessage(JSON.stringify({ type: 'prev' }));

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.topBar, { backgroundColor: colors.surface }]}>
        <Text style={{ color: colors.text, fontWeight: '600' }}>
          {Math.round(percent * 100)}%
        </Text>

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Pressable onPress={goPrev} style={[styles.navBtn, { backgroundColor: colors.background }]}>
            <Text style={{ color: colors.text }}>Prev</Text>
          </Pressable>
          <Pressable onPress={goNext} style={[styles.navBtn, { backgroundColor: colors.background }]}>
            <Text style={{ color: colors.text }}>Next</Text>
          </Pressable>
        </View>
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator />
        </View>
      ) : debug ? (
        <View style={styles.center}>
          <Text style={{ color: colors.text }}>{debug}</Text>
        </View>
      ) : (
        <WebView
          ref={webRef}
          source={{ html }}
          originWhitelist={['*']}
          javaScriptEnabled
          domStorageEnabled
          mixedContentMode="always"
          onLoadEnd={sendLoad}
          onMessage={(e) => {
            try {
              const msg = JSON.parse(e.nativeEvent.data);

              if (msg.type === 'progress') {
                const cfi = msg.data?.cfi ?? null;
                const p = typeof msg.data?.percent === 'number' ? msg.data.percent : null;

                if (p !== null) setPercent(p);
                saveProgress(bookId, p ?? percent, cfi);
              }

              if (msg.type === 'error') {
                setDebug(msg.data?.message ?? 'Unknown reader error');
              }
            } catch (err) {
              setDebug('Bad message from WebView: ' + String(err));
            }
          }}
          onError={(e) => setDebug('WebView error: ' + e.nativeEvent.description)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
