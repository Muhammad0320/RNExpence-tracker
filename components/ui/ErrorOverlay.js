import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.textTitle, styles.text]}> An error occured! </Text>

      <Text style={styles.text}> {message} </Text>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },

  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 8,
  },

  text: {
    color: "#fff",
  },
});
