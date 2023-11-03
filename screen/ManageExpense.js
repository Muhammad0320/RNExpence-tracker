import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpense({ navigation, route }) {
  const editedId = route.params?.id;

  const isEditing = !!editedId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return <Text> ManageExpense screen </Text>;
}

export default ManageExpense;
