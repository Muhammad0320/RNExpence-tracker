export const dateFormatter = (date) => {
  console.log(date);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} `;
};

export const calcDatePast = (date, day) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - day);
};
