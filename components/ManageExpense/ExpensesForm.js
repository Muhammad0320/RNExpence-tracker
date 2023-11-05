import { Button, StyleSheet, Text, View } from "react-native";
import Inputs from "./Inputs";
import { useState } from "react";
import { dateFormatter } from "../../utils/dateFormat";

function ExpensesForm({ onConfirm, onCancel, buttonText, selectedExpense }) {
  const [inputValues, setInputValues] = useState({
    amount: selectedExpense.amount + "" ?? "",
    date: dateFormatter(selectedExpense.date) ?? "",
    description: selectedExpense.description ?? "",
  });

  const handleTextInput = (inputIdentifier, inputValue) => {
    setInputValues((currentValues) => {
      return {
        ...currentValues,
        [inputIdentifier]: inputValue,
      };
    });
  };

  const handleConfirm = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    onConfirm(expenseData);
  };

  return (
    <>
      <View style={styles.form}>
        <Text style={styles.title}> Add Expense </Text>
        <View style={styles.formRow}>
          <Inputs
            label="Amount"
            style={styles.inputStyle}
            inputConfig={{
              KeyboardType: "decimal-pad",

              onChangeText: () => handleTextInput("amount"),
              value: inputValues.amount,
            }}
          />
          <Inputs
            label="Date"
            style={styles.inputStyle}
            inputConfig={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: () => handleTextInput("date"),
              value: inputValues.date,
            }}
          />
        </View>

        <Inputs
          label="description"
          inputConfig={{
            multiline: true,
            autoCorrect: true,
            autoCapitalize: "sentences",
            onChangeText: () => handleTextInput("description"),
            value: inputValues.description,
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button style={styles.buttonStyle} mode="flat" onPress={onCancel}>
          {" "}
          cancel{" "}
        </Button>
        <Button style={styles.buttonStyle} onPress={handleConfirm}>
          {buttonText}
        </Button>
      </View>
    </>
  );
}

export default ExpensesForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
    marginBottom: 15,
  },

  title: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginVertical: 20,
  },

  formRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputStyle: {
    flex: 1,
  },

  buttonContainer: {
    flexDirection: "row",
    columnGap: 20,
    alignContent: "center",
  },

  buttonStyle: {
    minWidth: 150,
  },
});
