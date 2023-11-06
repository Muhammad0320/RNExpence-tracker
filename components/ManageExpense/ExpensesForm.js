import { StyleSheet, Text, View } from "react-native";
import Inputs from "./Inputs";
import { useState } from "react";
import { dateFormatter } from "../../utils/dateFormat";
import Button from "../ui/Button";

function ExpensesForm({ onConfirm, onCancel, buttonText, selectedExpense }) {
  const [inputs, setInputs] = useState({
    amount: selectedExpense ? selectedExpense.amount.toString() : "",
    date: selectedExpense ? dateFormatter(selectedExpense.date) : "",
    description: selectedExpense ? selectedExpense.description : "",
  });

  const handleTextInput = (inputIdentifier, inputValue) => {
    setInputs((currents) => {
      return {
        ...currents,
        [inputIdentifier]: inputValue,
      };
    });
  };

  const handleConfirm = () => {
    const expenseData = {
      amount: +inputs.amount,
      date: new Date(inputs.date),
      description: inputs.description,
    };

    const { amount, date, description } = expenseData;

    const isValidAmount = Number.isFinite(amount) && amount;

    const isValidDate = date.toString() !== "Invalid Date";

    const isValidDescription = description.trim.length;

    if (!isValidAmount || !isValidDate || !isValidDescription) {
      return;
    }

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

              onChangeText: handleTextInput.bind(this, "amount"),
              defaultValue: inputs.amount,
            }}
          />
          <Inputs
            label="Date"
            style={styles.inputStyle}
            inputConfig={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: handleTextInput.bind(this, "date"),
              defaultValue: inputs.date,
            }}
          />
        </View>

        <Inputs
          label="Description"
          inputConfig={{
            multiline: true,
            autoCorrect: true,
            autoCapitalize: "sentences",
            onChangeText: handleTextInput.bind(this, "description"),
            defaultValue: inputs.description,
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
