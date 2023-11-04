import ExpenseOutput from "../components/Expenses/ExpenseOutput";
import { useExpenseContext } from "../store/expensesContext";
import { calcDatePast } from "../utils/dateFormat";

function RecentExpenses() {
  const { expenses } = useExpenseContext();

  const last7daysDate = calcDatePast(new Date(), 7);

  const recentExpense = expenses.filter(
    (expense) => expense.date >= last7daysDate
  );

  return (
    <ExpenseOutput
      expense={recentExpense}
      periodName="Last 7 days"
      fallback="There  is no registered expense for the past 7 days"
    />
  );
}

export default RecentExpenses;
