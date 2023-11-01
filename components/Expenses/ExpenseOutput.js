import { View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

const DUMMY_DATA = [
  {
    id: "e1",
    description: " A pair of trouser ",
    amount: 112.09,
    date: new Date("2023-10-25"),
  },

  {
    id: "e2",
    description: " A new Shoe ",
    amount: 62.09,
    date: new Date("2023-10-20"),
  },

  {
    id: "e3",
    description: " A Book ",
    amount: 12.0,
    date: new Date("2023-08-29"),
  },

  {
    id: "e4",
    description: " Another Book ",
    amount: 26.09,
    date: new Date("2023-10-10"),
  },

  {
    id: "e5",
    description: " A Notepad ",
    amount: 5.0,
    date: new Date("2023-10-21"),
  },
];

function ExpenseOutput({ expense, periodName }) {
  return (
    <View>
      <ExpenseSummary expense={DUMMY_DATA} periodName={periodName} />
      <ExpenseList expense={DUMMY_DATA} />
    </View>
  );
}

export default ExpenseOutput;
