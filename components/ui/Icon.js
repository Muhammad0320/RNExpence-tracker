import { Pressable, StyleSheet, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

function Icon({ color, size, name, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={name} color={color} size={size} />
      </View>
    </Pressable>
  );
}

export default Icon;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },

  iconContainer: {
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
});
