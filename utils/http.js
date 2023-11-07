import axios from "axios";
import { BASE_URL } from "./constant";

export const createExpense = async (expense) => {
  const res = await axios({
    method: "POST",
    url: `${BASE_URL}/expense.json`,

    data: {
      expense,
    },
  });

  return res.data;
};

export const getExpensesApi = async () => {
  const res = await axios.get(`${BASE_URL}/expense.json`);

  console.log(res.data);

  return res.data;
};
