import { View } from "react-native";
import { useLayoutEffect, useState } from "react";
import Icon from "../components/ui/Icon";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useExpenseContext } from "../store/expensesContext";
import ExpensesForm from "../components/ManageExpense/ExpensesForm";
import {
  createExpense,
  deleteExpenseApi,
  updateExpenseApi,
} from "../utils/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function ManageExpense({ navigation, route }) {
  const [isFetching, setIsFetching] = useState(false);

  const [error, setError] = useState(null);

  const editedId = route.params?.id;

  const { expenses, deleteExpenseItem, addExpenseItem, updateExpenseItem } =
    useExpenseContext();

  const selectedExpense = expenses.find((expense) => expense.id === editedId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editedId ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, editedId]);

  const confirmButtonHandler = async (expenseData) => {
    try {
      if (editedId) {
        setIsFetching(true);
        await updateExpenseApi(editedId, expenseData);

        updateExpenseItem(editedId, expenseData);
        setIsFetching(false);
      } else {
        setIsFetching(true);
        const id = await createExpense(expenseData);
        setIsFetching(false);

        addExpenseItem({ ...expenseData, id });
      }
      navigation.goBack();
    } catch (error) {
      setError("Could not save data - Please try again");
    }
  };

  const cancelButtonHandler = () => {
    navigation.goBack();
  };

  const deleteButtonHandler = async () => {
    setIsFetching(true);
    await deleteExpenseApi(editedId);
    setIsFetching(false);

    deleteExpenseItem(editedId);

    navigation.goBack();
  };

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <View style={style.container}>
      <ExpensesForm
        onCancel={cancelButtonHandler}
        onConfirm={confirmButtonHandler}
        buttonText={editedId ? "Edit " : "Add "}
        selectedExpense={selectedExpense}
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
