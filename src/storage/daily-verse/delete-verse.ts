import AsyncStorage from "@react-native-async-storage/async-storage";

import { DAILY_VERSE_KEY } from "@storage/storage-config";

export async function deleteVerse(): Promise<void> {
  try {
    await AsyncStorage.removeItem(DAILY_VERSE_KEY);
  } catch (error) {
    throw error;
  }
}
