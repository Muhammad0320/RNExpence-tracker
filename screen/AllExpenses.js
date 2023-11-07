import { useEffect } from "react";
import ExpenseOutput from "../components/Expenses/ExpenseOutput";
import { useExpenseContext } from "../store/expensesContext";
import { getExpensesApi } from "../utils/http";

function AllExpenses() {
  const { expenses, fetchExpenseData } = useExpenseContext();

  useEffect(() => {
    const fetchFunc = async () => {
      const expenses = await getExpensesApi();

      fetchExpenseData(expenses);
    };

    fetchFunc();
  }, []);

  return (
    <ExpenseOutput
      expense={expenses}
      periodName="All Expense"
      fallback="There  is no registered expense!"
    />
  );
}

export default AllExpenses;
