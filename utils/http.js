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

  const expenses = [];

  for (const key in res.data) {
    const expenseObj = {
      id: key,
      date: new Date(res.data[key].date),

      amount: res.data[key].amount,

      description: res.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
};
