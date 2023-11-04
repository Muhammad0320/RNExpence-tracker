import { useLayoutEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import { View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import Icon from "../components/ui/Icon";
import Button from "../components/ui/Button";
import { useExpenseContext } from "../store/expensesContext";

function ManageExpense({ navigation, route }) {
  const editedId = route.params?.id;

  const { deleteExpenseItem, addExpenseItem, updateExpenseItem } =
    useExpenseContext();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: editedId ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, editedId]);

  const confirmButtonHandler = () => {
    if (editedId) {
      updateExpenseItem(editedId, {
        description: "Test Data",
        amount: 2000,
        date: new Date("2023-12-10"),
      });
    } else {
      addExpenseItem({
        description: "Test Data!!!",
        amount: 5000,
        date: new Date("2023-11-10"),
      });
    }

    navigation.goBack();
  };

  const cancelButtonHandler = () => {
    navigation.goBack();
  };

  const deleteButtonHandler = () => {
    console.log("deleted from context ");
    deleteExpenseItem(editedId);
    navigation.goBack();
  };

  return (
    <View style={style.container}>
      <View style={style.buttonContainer}>
        <Button
          style={style.buttonStyle}
          mode="flat"
          onPress={cancelButtonHandler}
        >
          {" "}
          cancel{" "}
        </Button>
        <Button style={style.buttonStyle} onPress={confirmButtonHandler}>
          {" "}
          {editedId ? "Edit " : "Add "}{" "}
        </Button>
      </View>

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
  buttonContainer: {
    flexDirection: "row",
    columnGap: 20,
    alignContent: "center",
  },

  buttonStyle: {
    minWidth: 150,
  },

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
