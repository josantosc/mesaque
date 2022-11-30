import AsyncStorage from "@react-native-async-storage/async-storage";

import { Bible } from "@shared/domain/Bible";
import { DAILY_VERSE_KEY } from "@storage/storage-config";

import { DailyVerseStorageItem } from "./types";

export async function saveVerse(verse: Bible.Verse) {
  const now = Date.now();
  const value: DailyVerseStorageItem = {
    ...verse,
    createdAt: now,
  };

  try {
    await AsyncStorage.setItem(DAILY_VERSE_KEY, JSON.stringify(value));
  } catch (error) {
    throw error;
  }
}
