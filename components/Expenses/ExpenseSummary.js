import { Text, View } from "react-native";

function ExpenseSummary({ expense, periodName }) {
  const totalExpencePrice = expense.reduce((acc, sum) => {
    return acc + sum.amount;
  }, 0);

  return (
    <View>
      <Text> {periodName} </Text>
      <Text> ${totalExpencePrice.toFixed(2)} </Text>
    </View>
  );
}

export default ExpenseSummary;
