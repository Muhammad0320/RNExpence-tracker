import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Inputs({ inputConfig, label, style, invalid }) {
  console.log(invalid);

  const inputStyle = [styles.inputStyle];

  if (inputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }

  if (!invalid) {
    inputStyle.push(styles.errorInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, !invalid && styles.errorLabel]}>
        {" "}
        {label}{" "}
      </Text>
      <TextInput {...inputConfig} style={inputStyle} />
    </View>
  );
}

export default Inputs;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 6,
    marginVertical: 10,
    rowGap: 5,
  },

  label: {
    fontSize: 14,
    color: GlobalStyles.colors.primary100,
  },

  inputStyle: {
    borderRadius: 6,
    fontSize: 18,
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 7,
    color: GlobalStyles.colors.primary700,
  },

  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },

  errorLabel: {
    color: GlobalStyles.colors.error500,
  },

  errorInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
