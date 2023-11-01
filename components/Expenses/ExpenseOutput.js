import { View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

function ExpenseOutput() {
  return (
    <View>
      <ExpenseSummary />
      <ExpenseList />
    </View>
  );
}

export default ExpenseOutput;
