import { StyleSheet, Text, View } from "react-native";
import Inputs from "./Inputs";
import { useState } from "react";
import { dateFormatter } from "../../utils/dateFormat";
import Button from "../ui/Button";
import { GlobalStyles } from "../../constants/styles";

function ExpensesForm({ onConfirm, onCancel, buttonText, selectedExpense }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: selectedExpense ? selectedExpense.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: selectedExpense ? dateFormatter(selectedExpense.date) : "",
      isValid: true,
    },
    description: {
      value: selectedExpense ? selectedExpense.description : "",
      isValid: true,
    },
  });

  const handleTextInput = (inputIdentifier, inputs) => {
    setInputs((currents) => {
      return {
        ...currents,
        [inputIdentifier]: { value: inputs },
      };
    });
  };

  const handleConfirm = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const { amount, date, description } = expenseData;

    const isValidAmount = Number.isFinite(amount) && amount > 0;

    const isValidDate = date.toString() !== "Invalid Date";

    const isValidDescription = description.trim().length > 0;

    if (!isValidAmount || !isValidDate || !isValidDescription) {
      setInputs((inputs) => {
        return {
          amount: { value: inputs.amount.value, isValid: isValidAmount },

          date: { value: inputs.date.value, isValid: isValidDate },

          description: {
            value: inputs.description.value,
            isValid: isValidDescription,
          },
        };
      });

      return;
    }

    onConfirm(expenseData);
  };

  const { amount, date, description } = inputs;

  const formIsValid = !date.isValid || !amount.isValid || !description.isValid;

  return (
    <>
      <View style={styles.form}>
        <Text style={styles.title}> Add Expense </Text>
        <View style={styles.formRow}>
          <Inputs
            label="Amount"
            style={styles.inputStyle}
            invalid={!amount.isValid}
            inputConfig={{
              KeyboardType: "decimal-pad",

              onChangeText: handleTextInput.bind(this, "amount"),
              defaultValue: inputs.amount.value,
            }}
          />
          <Inputs
            label="Date"
            invalid={!date.isValid}
            style={styles.inputStyle}
            inputConfig={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: handleTextInput.bind(this, "date"),
              defaultValue: inputs.date.value,
            }}
          />
        </View>

        <Inputs
          label="Description"
          invalid={!description.isValid}
          inputConfig={{
            multiline: true,
            autoCorrect: true,
            autoCapitalize: "sentences",
            onChangeText: handleTextInput.bind(this, "description"),
            defaultValue: inputs.description.value,
          }}
        />
      </View>

      {!formIsValid && (
        <Text style={styles.errorText}>
          {" "}
          Invalid input | please check your input data{" "}
        </Text>
      )}

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

  errorText: {
    color: GlobalStyles.colors.error500,
    textAlign: "center",
    fontSize: 18,
  },
});
