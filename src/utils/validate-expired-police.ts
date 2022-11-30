const EXPIRE_VERSE_POLICY = 24 * 60 * 60 * 1000;

export function isExpiredVersePolice(time: number): boolean {
  const now = Date.now();
  const isExpired = time + EXPIRE_VERSE_POLICY < now;

  return isExpired;
}
