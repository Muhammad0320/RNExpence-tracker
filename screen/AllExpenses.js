import { useEffect, useState } from "react";
import ExpenseOutput from "../components/Expenses/ExpenseOutput";
import { useExpenseContext } from "../store/expensesContext";
import { getExpensesApi } from "../utils/http";

function AllExpenses() {
  const [isFetching, setIsFetching] = useState(true);

  const { expenses, fetchExpenseData } = useExpenseContext();

  useEffect(() => {
    const fetchFunc = async () => {
      setIsFetching(true);
      const expenses = await getExpensesApi();
      setIsFetching(false);

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
