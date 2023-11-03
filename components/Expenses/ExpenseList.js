import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expense }) {
  return (
    <FlatList
      data={expense}
      renderItem={({ item }) => <ExpenseItem {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpenseList;
