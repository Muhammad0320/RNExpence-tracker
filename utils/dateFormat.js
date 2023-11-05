export const dateFormatter = (date) => {
  return date.toISOString().slice(0, 10);
};

export const calcDatePast = (date, day) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - day);
};
