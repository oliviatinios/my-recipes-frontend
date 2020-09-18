import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import colours from "./app/config/colours";
import AddRecipeScreen from "./app/screens/AddRecipeScreen";
import EditRecipeScreen from "./app/screens/EditRecipeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import ViewAllRecipesScreen from "./app/screens/ViewAllRecipesScreen";
import ViewRecipeScreen from "./app/screens/ViewRecipeScreen";
import UserProfileScreen from "./app/screens/UserProfileScreen";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Recipes" component={ViewAllRecipesScreen} />
      <Tab.Screen name="My Profile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: colours.light,
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "", headerLeft: null }}
        />
        <Stack.Screen
          name="AddRecipe"
          component={AddRecipeScreen}
          options={{ title: "", headerLeft: null }}
        />
        <Stack.Screen
          name="ViewRecipe"
          component={ViewRecipeScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="EditRecipe"
          component={EditRecipeScreen}
          options={{ title: "", headerLeft: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colours.background,
    shadowOpacity: 0,
  },
});

export default App;
