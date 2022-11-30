import { Bible } from "@shared/domain/Bible";

export type DailyVerseStorageItem = Bible.Verse & {
  createdAt: number;
};
