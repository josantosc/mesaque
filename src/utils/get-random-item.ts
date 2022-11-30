export function getRandomItem<T = unknown>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  const item = items[randomIndex];

  return item;
}
