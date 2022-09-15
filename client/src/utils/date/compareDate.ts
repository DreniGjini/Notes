export const compareIfDate = (date: Date) => {
  const today = new Date(Date.now()).getDate();
  const newDate = new Date(date).getDate();

  if (today === newDate) return true;

  return false;
};
