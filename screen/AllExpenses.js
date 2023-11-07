import { useEffect } from "react";
import ExpenseOutput from "../components/Expenses/ExpenseOutput";
import { useExpenseContext } from "../store/expensesContext";
import { getExpensesApi } from "../utils/http";

function AllExpenses() {
  const { expenses } = useExpenseContext();

  useEffect(() => {
    const getExpenses = async () => {
      const expense = await getExpensesApi();
      console.log(expense);
    };

    getExpenses();
  }, []);

  return (
    <ExpenseOutput
      expense={expenses}
      periodName="All Expense "
      fallback="There  is no registered expense!"
    />
  );
}

export default AllExpenses;
