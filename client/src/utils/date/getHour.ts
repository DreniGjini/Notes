export const getHour = (timestamp: Date) => {
  const hour = new Date(timestamp).getHours();
  const minutes = new Date(timestamp).getMinutes();
  const now = new Date(Date.now()).getMinutes();

  if (now === minutes) return "Less than a minute ago";

  return `${hour}:${minutes < 10 ? "0" + minutes : minutes}`;
};
