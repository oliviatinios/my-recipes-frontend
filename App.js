import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import colours from "./app/config/colours";
import EditRecipeScreen from "./app/screens/EditRecipeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import ViewAllRecipesScreen from "./app/screens/ViewAllRecipesScreen";
import ViewRecipeScreen from "./app/screens/ViewRecipeScreen";

const Stack = createStackNavigator();

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
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="ViewAllRecipes"
          component={ViewAllRecipesScreen}
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
          options={{ title: "" }}
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
