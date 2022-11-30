import AsyncStorage from "@react-native-async-storage/async-storage";

import { Bible } from "@shared/domain/Bible";
import { DAILY_VERSE_KEY } from "@storage/storage-config";
import { isExpiredVersePolice } from "@utils/validate-expired-police";

import { deleteVerse } from "./delete-verse";
import { DailyVerseStorageItem } from "./types";

export async function getVerse(): Promise<Bible.Verse | null> {
  try {
    const item = await AsyncStorage.getItem(DAILY_VERSE_KEY);

    if (!item) return null;

    const { createdAt, ...verse } = JSON.parse(item) as DailyVerseStorageItem;

    if (isExpiredVersePolice(createdAt)) {
      await deleteVerse();
      return null;
    }

    return verse;
  } catch (error) {
    throw error;
  }
}
