import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpenseItem({ amount, date, description }) {
  return (
    <Pressable>
      <View style={style.contaner}>
        <View style={style.descriptionContainer}>
          <Text style={style.descText}> {description} </Text>
          <Text style={style.descText}> {date} </Text>
        </View>

        <View style={style.amountContainer}>
          <Text styl={style.amountText}> {amount} </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const style = StyleSheet.create({
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
    color: GlobalStyles.colors.primary700,
    fontWeight: "bold",
  },

  amountContainer: {
    backgroundColor: "#fff",
    marginVertical: 8,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderRadius: 6,
    minWidth: 80,
  },
});
