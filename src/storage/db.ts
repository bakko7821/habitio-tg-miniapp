// src/storage/db.ts
import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('reader.db');

export function initDb() {
  db.execSync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS books (
      id TEXT PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      filePath TEXT NOT NULL,
      addedAt INTEGER NOT NULL,
      lastOpenedAt INTEGER
    );

    CREATE TABLE IF NOT EXISTS progress (
      bookId TEXT PRIMARY KEY NOT NULL,
      cfi TEXT,
      percent REAL NOT NULL DEFAULT 0,
      updatedAt INTEGER NOT NULL
    );
  `);
}
