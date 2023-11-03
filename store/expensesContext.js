import { createContext, useContext, useReducer } from "react";

const DUMMY_DATA = [
  {
    id: "e1",
    description: " A pair of trouser ",
    amount: 112.09,
    date: new Date("2023-10-25"),
  },

  {
    id: "e2",
    description: " A new Shoe ",
    amount: 62.09,
    date: new Date("2023-10-20"),
  },

  {
    id: "e3",
    description: " A Book ",
    amount: 12.0,
    date: new Date("2023-08-29"),
  },

  {
    id: "e4",
    description: " Another Book ",
    amount: 26.09,
    date: new Date("2023-10-10"),
  },

  {
    id: "e5",
    description: " A Notepad ",
    amount: 5.0,
    date: new Date("2023-10-21"),
  },
];

const ExpenseContext = createContext({
  expenses: [],

  addExpenseItem: ({ description, date, amount }) => {},

  updateExpenseItem: (id, { description, date, amount }) => {},

  deleteExpenseItem: (id) => {},
});

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = Math.random().toString() + Date.now().toString();

      return [...state, { ...action.payload, id }];

    case "UPDATE":
      const updateExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatableExpense = state[updateExpenseIndex];

      const updateItem = { ...updatableExpense, ...action.payload.data };

      const updatedExpense = [...state];

      updatedExpense[updateExpenseIndex] = updateItem;

      return updatedExpense;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      [...state];
  }
};

export const ExpenseContextProvider = ({ children }) => {
  const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_DATA);

  const addExpense = (data) => {
    dispatch({ type: "ADD", payload: data });
  };

  const updateExpense = (id, data) => {
    dispatch({ type: "UPDATE", payload: { id, data } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses: expenseState,
        addExpenseItem: addExpense,
        updateExpenseItem: updateExpense,
        deleteExpenseItem: deleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);

  if (!context)
    throw Error("Expense context was used outside expense provider");

  return context;
};
