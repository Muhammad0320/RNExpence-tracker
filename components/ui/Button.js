import { StyleSheet, Text } from "react-native";
import { Pressable, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button({ children, onPress, style, mode }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View
          style={[
            styles.buttonContainer,
            mode === "flat" && styles.buttonContainerFlat,
          ]}
        >
          <Text style={[styles.textStyle, mode === "flat" && styles.textFlat]}>
            {" "}
            {children}{" "}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 6,
    marginVertical: 8,
    borderRadius: 4,
    overflow: "hidden",
  },

  buttonContainerFlat: {
    backgroundColor: "transparent",
  },

  textStyle: {
    fontSize: 14,
    color: GlobalStyles.colors.primary100,
  },

  textFlat: {
    color: "#fff",
  },

  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary200,
  },
});
