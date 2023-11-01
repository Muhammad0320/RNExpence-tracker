import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import ManageExpense from "./screen/ManageExpense";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "./screen/AllExpenses";
import RecentExpenses from "./screen/RecentExpenses";

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

export default function App() {
  const ExpenseOverview = () => (
    <Tabs.Navigator>
      <Tabs.Screen name="AllExpense" component={AllExpenses} />
      <Tabs.Screen name="RecentExpence" component={RecentExpenses} />
    </Tabs.Navigator>
  );

  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExoenseOverview" component={ExpenseOverview} />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
