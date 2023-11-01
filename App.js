import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import ManageExpense from "./screen/ManageExpense";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "./screen/AllExpenses";
import RecentExpenses from "./screen/RecentExpenses";
import { GlobalStyles } from "./constants/styles";

import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

export default function App() {
  const ExpenseOverview = () => (
    <Tabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "#fff",
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <Tabs.Screen
        name="AllExpense"
        component={AllExpenses}
        options={{
          tabBarLabel: "All",
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="RecentExpence"
        component={RecentExpenses}
        options={{
          tabBarLabel: "Recent",
          title: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );

  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpenseOverview}
            options={{
              headerShown: false,
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{ title: "Manage Expense" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
