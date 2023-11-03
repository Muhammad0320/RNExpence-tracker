import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { dateFormatter } from "../../utils/dateFormat";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ amount, date, description }) {
  const navigation = useNavigation();

  const handlePressExpenseItem = () => {
    navigation.navigate("ManageExpense");
  };

  return (
    <Pressable
      onPress={handlePressExpenseItem}
      style={({ pressed }) => pressed && style.pressed}
      android_ripple={{ color: GlobalStyles.colors.primary400 }}
    >
      <View style={style.contaner}>
        <View style={style.descriptionContainer}>
          <Text style={style.descText}> {description} </Text>
          <Text style={style.descText}> {dateFormatter(date)} </Text>
        </View>

        <View style={style.amountContainer}>
          <Text styl={style.amountText}> {amount.toFixed(2)} </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const style = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },

  contaner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 8,
    margin: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    elevation: 4,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 2, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.4,
  },

  descriptionContainer: {
    rowGap: 6,
  },

  descText: {
    color: GlobalStyles.colors.primary50,
  },

  descriptionText: {
    fontWeight: "bold",
    fontSize: 15,
  },

  amountText: {
    color: GlobalStyles.colors.primary800,
    fontWeight: 800,
    fontSize: 12,
  },

  amountContainer: {
    backgroundColor: "#fff",
    marginVertical: 8,
    paddingVertical: 6,
    paddingHorizontal: 4,

    borderRadius: 6,
    minWidth: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
