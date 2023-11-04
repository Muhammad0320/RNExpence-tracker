import { StyleSheet, View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../constants/styles";

function ExpenseOutput({ expense, periodName }) {
  return (
    <View style={styles.container}>
      <ExpenseSummary expense={expense} periodName={periodName} />
      <ExpenseList expense={expense} />
    </View>
  );
}

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
