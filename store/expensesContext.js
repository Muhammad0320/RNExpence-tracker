import { createContext, useContext } from "react";

const ExpenseContext = createContext({
  expenses: [],

  addExpenseItem: ({ description, date, amount }) => {},

  updateExpenseItem: (id, { description, date, amount }) => {},

  deleteExpenseItem: (id) => {},
});

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);

  if (!context)
    throw Error("Expense context was used outside expense provider");

  return context;
};
