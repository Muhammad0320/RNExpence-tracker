import { FlatList, View } from "react-native";

function ExpenseList({ expense }) {
  return (
    <FlatList
      data={expense}
      renderItem={({ item }) => (
        <View>
          <Text> {item.description} </Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpenseList;
