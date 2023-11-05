import { StyleSheet, Text, View } from "react-native";
import Inputs from "./Inputs";
import { useState } from "react";

function ExpensesForm() {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const handleTextInput = (inputIdentifier, inputValue) => {
    setInputValues((inputValues) => {
      return {
        ...inputValues,
        [inputIdentifier]: inputValue,
      };
    });
  };

  return (
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
});
