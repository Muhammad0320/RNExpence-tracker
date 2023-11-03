import {
  Pressable,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { dateFormatter } from "../../utils/dateFormat";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ id, amount, date, description }) {
  const navigation = useNavigation();

  const handlePressExpenseItem = () => {
    navigation.navigate("ManageExpense", { id });
  };

  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple("#000", true)}
    >
      <Pressable
        onPress={handlePressExpenseItem}
        style={({ pressed }) => pressed && style.pressed}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={style.contaner}>
          <View style={style.descriptionContainer}>
            <Text style={style.descText}> {description} </Text>
            <Text style={style.descText}> {dateFormatter(date)} </Text>
          </View>

          <View style={style.amountContainer}>
            <Text styl={style.amountText}> ${amount.toFixed(2)} </Text>
          </View>
        </View>
      </Pressable>
    </TouchableNativeFeedback>
  );
}

export default ExpenseItem;

const style = StyleSheet.create({
  pressed: {
    opacity: 0.75,
    overflow: "hidden",
  },

  contaner: {
    overflow: "hidden",
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
    fontWeight: "bold",
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
