export function dateToShortString(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const days = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  return `${year}-${month}-${days}`;
}
