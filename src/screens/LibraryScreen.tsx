import { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { Header } from '../components/Header';
import { Navigate } from '../components/Navigate';
import { importEpub, listBooks } from '../storage/bookRepo';
import { NavigationProp, useNavigation, useFocusEffect } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { useTheme } from '../theme/useTheme';

type BookRow = {
  id: string;
  title: string;
  filePath: string;
  addedAt: number;
  lastOpenedAt: number | null;
};

export default function LibraryScreen() {
  const colors = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [books, setBooks] = useState<BookRow[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      setLoading(true);
      const data = listBooks(); // sync (как мы делали с openDatabaseSync)
      setBooks(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // ✅ чтобы при возврате на экран список обновлялся
  useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh])
  );

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <Header
        title="Библиотека"
        onAddPress={async () => {
          const id = await importEpub();
          if (!id) return;
          refresh();
          navigation.navigate('Reader', { bookId: id });
        }}
      />

      <View style={styles.content}>
        {loading ? (
          <Text style={[styles.infoText, { color: colors.text, opacity: 0.7 }]}>
            Загрузка...
          </Text>
        ) : books.length === 0 ? (
          <Text style={[styles.infoText, { color: colors.text, opacity: 0.7 }]}>
            Пока нет книг. Нажми “＋”, чтобы добавить EPUB.
          </Text>
        ) : (
          <FlatList
            data={books}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ padding: 16, paddingBottom: 96 }} // место под Navigate
            renderItem={({ item }) => (
              <Pressable
                onPress={() => navigation.navigate('Reader', { bookId: item.id })}
                style={({ pressed }) => [
                  styles.bookCard,
                  {
                    backgroundColor: colors.surface,
                    opacity: pressed ? 0.8 : 1,
                  },
                ]}
              >
                <Text style={[styles.bookTitle, { color: colors.text }]}>
                  {item.title}
                </Text>

                <Text style={{ color: colors.text, opacity: 0.6, marginTop: 4 }}>
                  {item.lastOpenedAt
                    ? `Последнее открытие: ${new Date(item.lastOpenedAt).toLocaleString()}`
                    : `Добавлено: ${new Date(item.addedAt).toLocaleDateString()}`}
                </Text>
              </Pressable>
            )}
          />
        )}
      </View>

      <Navigate />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: 'relative',
  },

  content: {
    flex: 1,
  },

  infoText: {
    padding: 16,
    fontSize: 16,
  },

  bookCard: {
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
  },

  bookTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});
