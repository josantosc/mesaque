import Axios from "axios";

import { Bible } from "@shared/domain/Bible";
import { getRandomItem } from "@utils/get-random-item";

type ApiResponse = {
  book: {
    abbrev: {
      pt: string;
    };
    name: string;
  };
  chapter: number;
  number: number;
  text: string;
};

export async function getRandomVerse(): Promise<Bible.Verse> {
  const randomBook = getRandomItem<string>(Object.keys(Bible.bookAbbrevs));

  try {
    const { data } = await Axios.get<ApiResponse>(
      `https://www.abibliadigital.com.br/api/verses/nvi/${randomBook}/random`
    );

    const { book, chapter, number, text } = data;

    return {
      chapter,
      number,
      text,
      book: {
        abbrev: book.abbrev.pt,
        name: book.name,
      },
    };
  } catch (error) {
    throw error;
  }
}
