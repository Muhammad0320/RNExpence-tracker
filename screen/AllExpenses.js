import { useEffect, useState } from "react";
import ExpenseOutput from "../components/Expenses/ExpenseOutput";
import { useExpenseContext } from "../store/expensesContext";
import { getExpensesApi } from "../utils/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";

function AllExpenses() {
  const [isFetching, setIsFetching] = useState(true);

  const [error, setError] = useState(null);

  const { expenses, fetchExpenseData } = useExpenseContext();

  useEffect(() => {
    const fetchFunc = async () => {
      try {
        setIsFetching(true);
        const expenses = await getExpensesApi();
        fetchExpenseData(expenses);
      } catch (error) {
        setError("Could not fetch Expense");
      }

      setIsFetching(false);
    };

    fetchFunc();
  }, []);

  if (!isFetching && error) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <ExpenseOutput
      expense={expenses}
      periodName="All Expense"
      fallback="There  is no registered expense!"
    />
  );
}

export default AllExpenses;
