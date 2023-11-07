import axios from "axios";

export const createExpense = async (expense) => {
  const res = await axios.post(`${BASE_URL}/expense.json`, expense);

  return res.data;
};
