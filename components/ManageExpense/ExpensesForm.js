import { StyleSheet, Text, View } from "react-native";
import Inputs from "./Inputs";

function ExpensesForm() {
  return (
    <View style={styles.form}>
      <Text style={styles.title}> Add Expense </Text>
      <View style={styles.formRow}>
        <Inputs
          label="Amount"
          style={styles.inputStyle}
          inputConfig={{ KeyboardType: "decimal-pad", onChangeText: () => {} }}
        />
        <Inputs
          label="Date"
          style={styles.inputStyle}
          inputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Inputs
        label="description"
        inputConfig={{
          multiline: true,
          autoCorrect: true,
          autoCapitalize: "sentences",
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
