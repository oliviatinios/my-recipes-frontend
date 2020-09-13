import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

import colours from "../config/colours";
import Card from "../components/Card";
import EditableList from "../components/EditableList";
import Toolbar from "../components/Toolbar";

const EditRecipeScreen = ({ route, navigation }) => {
  const {
    _id,
    title,
    totalTime,
    description,
    ingredients,
    steps,
  } = route.params;

  const [recipe, setRecipe] = useState({
    _id,
    title,
    totalTime,
    description,
    ingredients,
    steps,
  });

  const handleChangeText = (field, value) => {
    setRecipe({ ...recipe, [field]: value });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Edit Recipe</Text>
        <Card title="Details">
          <View style={styles.inputContainer}>
            <Text style={{ color: colours.light }}>Title:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) => handleChangeText("title", value)}
              value={recipe.title}
            />
            <Text style={{ color: colours.light }}>Description:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) => handleChangeText("description", value)}
              value={recipe.description}
            />
            <Text style={{ color: colours.light }}>
              Total Cook Time (in minutes):
            </Text>
            {/* TODO: add input validation for totalTime */}
            <TextInput
              style={styles.input}
              onChangeText={(value) => handleChangeText("totalTime", value)}
              value={recipe.totalTime}
            />
          </View>
        </Card>
        <Card title="Ingredients">
          <EditableList title="ingredients" data={ingredients} />
        </Card>
        <Card title="Steps">
          <EditableList title="steps" data={steps} />
        </Card>
      </ScrollView>
      <Toolbar>
        <Icon
          reverse
          name="md-close"
          type="ionicon"
          color={colours.dark}
          onPress={() => navigation.goBack()}
        />
        <Icon reverse name="md-checkmark" type="ionicon" color={colours.dark} />
      </Toolbar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.light,
  },
  input: {
    width: "100%",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  inputContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 36,
    margin: 5,
    color: colours.dark,
  },
});

export default EditRecipeScreen;
