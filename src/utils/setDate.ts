export const setDate = (): string => {
  const date = new Date();
  return date.toLocaleString('en-GB', { timeZone: 'Europe/Minsk' });
};
