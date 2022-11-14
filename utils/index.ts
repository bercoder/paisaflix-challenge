export function formatViews(n: number): string {
  return n / 1000 >= 1 ? `${n / 1000}K` : `${n}`;
}

export function rating(rate: number): number[] {
  let count: number = Math.trunc(rate);

  const rest: number = rate - count;

  if (rest >= 0.8) count++;

  const arr: number[] = Array(5)
    .fill(0)
    .map((el, index) => (index + 1 <= count ? 1 : 0));

  if (rest > 0.33 && rest < 0.8) arr[count] = 0.5;

  return arr;
}

export function inMinutes(m: number): string {
  const hours = Math.floor(m / 60);
  const minutes = m % 60;

  const mins = !!minutes ? ` ${minutes} mins` : "";

  return `${hours} hr${mins}`;
}
