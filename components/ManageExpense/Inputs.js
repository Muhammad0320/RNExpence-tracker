import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Inputs({ inputConfig, label }) {
  const inputStyle = [styles.inputStyle];

  if (inputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}> {label} </Text>
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
    fontSize: 18,
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 7,
  },

  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
