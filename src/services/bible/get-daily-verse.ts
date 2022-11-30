import { Bible } from "@shared/domain/Bible";
import { getVerse } from "@storage/daily-verse/get-verse";
import { saveVerse } from "@storage/daily-verse/save-verse";

import { getRandomVerse } from "./get-random-verse";

export const getDailyVerse = async (): Promise<Bible.Verse> => {
  const verseStoraged = await getVerse();

  if (verseStoraged) return verseStoraged;

  const verse = await getRandomVerse();

  await saveVerse(verse);

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(verse), 5000);
  });
};
