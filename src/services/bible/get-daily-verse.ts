import { Bible } from "@shared/domain/Bible";
import { getVerse } from "@storage/daily-verse/get-verse";
import { saveVerse } from "@storage/daily-verse/save-verse";

export const getDailyVerse = async (): Promise<Bible.Verse> => {
  const verseStoraged = await getVerse();

  if (verseStoraged) return verseStoraged;

  const verse: Bible.Verse = {
    book: {
      abbrev: "mt",
      name: "Mateus",
      testament: Bible.Testaments.New,
    },
    chapter: 8,
    number: 2,
    text: 'Um leproso, aproximando-se, adorou-o de joelhos e disse: "Senhor, se quiseres, podes purificar-me!"',
  };

  await saveVerse(verse);

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(verse), 5000);
  });
};
