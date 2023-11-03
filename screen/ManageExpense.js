import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import Icon from "../components/ui/Icon";

function ManageExpense({ navigation, route }) {
  const editedId = route.params?.id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editedId ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, editedId]);

  return (
    <View style={style.container}>
      {editedId && (
        <View style={style.deleteContainer}>
          <Icon color={GlobalStyles.colors.error500} size={36} name="trash" />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    padding: 24,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopColor: GlobalStyles.colors.primary200,
    borderTopWidth: 2,
    alignItems: "center",
  },
});
