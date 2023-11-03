import { createContext } from "react";

const ExpenseContext = createContext({
  expenses: [],

  addExpenseItem: ({ description, date, amount }) => {},

  updateExpenseItem: (id, { description, date, amount }) => {},

  deleteExpenseItem: (id) => {},
});
