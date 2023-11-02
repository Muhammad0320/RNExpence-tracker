import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpenseSummary({ expense, periodName }) {
  const totalExpencePrice = expense.reduce((acc, sum) => {
    return acc + sum.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}> {periodName} </Text>
      <Text style={styles.sum}> ${totalExpencePrice.toFixed(2)} </Text>
    </View>
  );
}

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    padding: 6,
    margin: 8,
  },

  period: {
    color: GlobalStyles.colors.primary400,
    fontSize: 12,
  },

  sum: {
    color: GlobalStyles.colors.primary500,
    fontSize: 18,
    fontWeight: "bold",
  },
});
