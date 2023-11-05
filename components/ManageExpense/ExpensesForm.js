import { View } from "react-native";
import Inputs from "./Inputs";

function ExpensesForm() {
  return (
    <View>
      <Inputs
        label="Amount"
        inputConfig={{ KeyboardType: "decimal-pad", onChangeText: () => {} }}
      />
      <Inputs
        label="Date"
        inputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Inputs
        label="description"
        inputConfig={{
          multiline: true,
          autoCorrect: true,
          autoCapitalize: "sentense",
        }}
      />
    </View>
  );
}

export default ExpensesForm;
