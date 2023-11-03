import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpense({ navigation, route }) {
  const editedId = route.params?.id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editedId ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, editedId]);

  return <Text> ManageExpense screen </Text>;
}

export default ManageExpense;
