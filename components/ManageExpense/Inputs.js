import { Text, TextInput, View } from "react-native";

function Inputs({ inputConfig, label }) {
  return (
    <View>
      <Text> {label} </Text>
      <TextInput {...inputConfig} />
    </View>
  );
}

export default Inputs;
