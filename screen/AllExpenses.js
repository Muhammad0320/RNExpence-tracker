import ExpenseOutput from "../components/Expenses/ExpenseOutput";
import { useExpenseContext } from "../store/expensesContext";

function AllExpenses() {
  const { expenses } = useExpenseContext();

  return <ExpenseOutput expense={expenses} periodName="All Expense " />;
}

export default AllExpenses;
