// src/storage/bookRepo.ts
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system/legacy';
import { db } from './db';

type BookRow = {
  id: string;
  title: string;
  filePath: string;
  addedAt: number;
  lastOpenedAt: number | null;
};

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function requireDocDir(): string {
  const dir = FileSystem.documentDirectory;
  if (!dir) {
    throw new Error('FileSystem.documentDirectory is null (no document directory available).');
  }
  return dir;
}

export async function importEpub(): Promise<string | null> {
  const res = await DocumentPicker.getDocumentAsync({
    type: ['application/epub+zip'],
    copyToCacheDirectory: true,
    multiple: false,
  });

  if (res.canceled) return null;

  const asset = res.assets[0];
  const id = makeId();

  const destDir = requireDocDir() + 'books/';
  await FileSystem.makeDirectoryAsync(destDir, { intermediates: true });

  const destPath = destDir + `${id}.epub`;
  await FileSystem.copyAsync({ from: asset.uri, to: destPath });

  const title = (asset.name ?? 'Untitled').replace(/\.epub$/i, '');
  const now = Date.now();

  db.runSync(
    `INSERT INTO books (id, title, filePath, addedAt, lastOpenedAt) VALUES (?, ?, ?, ?, ?)`,
    [id, title, destPath, now, null]
  );

  db.runSync(
    `INSERT INTO progress (bookId, cfi, percent, updatedAt) VALUES (?, ?, ?, ?)`,
    [id, null, 0, now]
  );

  return id;
}

export function listBooks(): BookRow[] {
  return db.getAllSync<BookRow>(`SELECT * FROM books ORDER BY lastOpenedAt DESC, addedAt DESC`);
}

export function getBook(bookId: string): BookRow | null {
  return db.getFirstSync<BookRow>(`SELECT * FROM books WHERE id = ? LIMIT 1`, [bookId]) ?? null;
}

export function getProgress(bookId: string) {
  return (
    db.getFirstSync<{ bookId: string; cfi: string | null; percent: number; updatedAt: number }>(
      `SELECT * FROM progress WHERE bookId = ? LIMIT 1`,
      [bookId]
    ) ?? null
  );
}

export function saveProgress(bookId: string, percent: number, cfi: string | null) {
  const now = Date.now();
  db.runSync(`UPDATE progress SET percent = ?, cfi = ?, updatedAt = ? WHERE bookId = ?`, [
    percent,
    cfi,
    now,
    bookId,
  ]);

  db.runSync(`UPDATE books SET lastOpenedAt = ? WHERE id = ?`, [now, bookId]);
}
