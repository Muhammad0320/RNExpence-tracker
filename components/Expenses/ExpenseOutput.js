import { View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

function ExpenseOutput({ expence, periodName }) {
  return (
    <View>
      <ExpenseSummary expence={expence} periodName={periodName} />
      <ExpenseList />
    </View>
  );
}

export default ExpenseOutput;
