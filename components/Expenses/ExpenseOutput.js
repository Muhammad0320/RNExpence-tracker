import { StyleSheet, Text, View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../constants/styles";

function ExpenseOutput({ expense, periodName, fallback }) {
  let output = <Text style={styles.textStyle}> {fallback} </Text>;

  if (expense.length) {
    output = <ExpenseList expense={expense} />;
  }

  return (
    <View style={styles.container}>
      <ExpenseSummary expense={expense} periodName={periodName} />
      {output}
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

  textStyle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginTop: 36,
  },
});
