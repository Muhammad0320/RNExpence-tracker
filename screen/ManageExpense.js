import { View } from "react-native";
import { useLayoutEffect } from "react";
import Icon from "../components/ui/Icon";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useExpenseContext } from "../store/expensesContext";
import ExpensesForm from "../components/ManageExpense/ExpensesForm";

function ManageExpense({ navigation, route }) {
  const editedId = route.params?.id;

  const { deleteExpenseItem, addExpenseItem, updateExpenseItem } =
    useExpenseContext();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: editedId ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, editedId]);

  const confirmButtonHandler = (expenseData) => {
    if (editedId) {
      updateExpenseItem(editedId, expenseData);
    } else {
      addExpenseItem(expenseData);
    }

    navigation.goBack();
  };

  const cancelButtonHandler = () => {
    navigation.goBack();
  };

  const deleteButtonHandler = () => {
    deleteExpenseItem(editedId);
    navigation.goBack();
  };

  return (
    <View style={style.container}>
      <ExpensesForm
        onCancel={cancelButtonHandler}
        onConfirm={confirmButtonHandler}
        buttonText={editedId ? "Edit " : "Add "}
      />

      {editedId && (
        <View style={style.deleteContainer}>
          <Icon
            onPress={deleteButtonHandler}
            color={GlobalStyles.colors.error500}
            size={36}
            name="trash"
          />
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
