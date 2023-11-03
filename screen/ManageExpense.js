import { useLayoutEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import { View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import Icon from "../components/ui/Icon";
import Button from "../components/ui/Button";

function ManageExpense({ navigation, route }) {
  const editedId = route.params?.id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editedId ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, editedId]);

  const deleteButtonHandler = () => {};

  const confirmButtonHandler = () => {};

  const cancelButtonHandler = () => {};

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
          {editedId ? "Edit Expense" : "Add Expense"}{" "}
        </Button>
      </View>

      {editedId && (
        <View style={style.deleteContainer}>
          <Pressable onPress={deleteButtonHandler}>
            <Icon color={GlobalStyles.colors.error500} size={36} name="trash" />
          </Pressable>
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const style = StyleSheet.create({
  buttonContainer: {
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
