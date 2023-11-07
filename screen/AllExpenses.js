import { useEffect } from "react";
import ExpenseOutput from "../components/Expenses/ExpenseOutput";
import { useExpenseContext } from "../store/expensesContext";

function AllExpenses() {
  const { expenses } = useExpenseContext();

  useEffect(() => {
    const getExpenses = async () => {
      const expense = await getExpenses();

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
