import { useCallback, useEffect, useState } from "react";

import { Bible } from "@shared/domain/Bible";
import { getDailyVerse } from "@services/bible";

type UseVerseReturnType = {
  title: string;
  text: string;
};

export const useVerse = (): UseVerseReturnType => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const formatVerseTitle = useCallback(
    ({ book, chapter, number }: Bible.Verse): string =>
      `${book.name} ${chapter}:${number}`,
    []
  );

  const fetchVerse = async () => {
    const verse = await getDailyVerse();
    const title = formatVerseTitle(verse);

    setTitle(title);
    setText(verse.text);
  };

  useEffect(() => {
    fetchVerse();
  }, []);

  return { title, text };
};
