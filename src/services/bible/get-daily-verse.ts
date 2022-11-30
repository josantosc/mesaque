import { Bible } from "@shared/domain/Bible";

export const getDailyVerse = async (): Promise<Bible.Verse> => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          book: {
            abbrev: "mt",
            name: "Mateus",
            testament: Bible.Testaments.New,
          },
          chapter: 8,
          number: 2,
          text: 'Um leproso, aproximando-se, adorou-o de joelhos e disse: "Senhor, se quiseres, podes purificar-me!"',
        }),
      5000
    );
  });
};
