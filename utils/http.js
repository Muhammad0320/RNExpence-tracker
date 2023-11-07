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

  return res.data.expense.name;
};

export const getExpensesApi = async () => {
  const res = await axios.get(`${BASE_URL}/expense.json`);

  const expenses = [];

  for (const key in res.data) {
    const expenseObj = {
      id: key,
      date: new Date(res.data[key]?.expense?.date),

      amount: res.data[key]?.expense?.amount,

      description: res.data[key]?.expense?.description,
    };

    expenses.push(expenseObj);
  }

  console.log(expenses);

  return expenses;
};
