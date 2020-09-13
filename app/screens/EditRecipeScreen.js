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
import updateRecipe from "../utils/updateRecipe";
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
    title,
    totalTime: totalTime.toString(),
    description,
    ingredients,
    steps,
  });

  // Stores the new input values for ingredients and steps
  const [newInput, setNewInput] = useState({});

  // Handles changes in the input fields
  const handleChangeText = (field, value) => {
    setRecipe({ ...recipe, [field]: value });
  };

  // Handles changes in the input fields inside of EditableList
  const handleChangeListInput = (listType, value, index) => {
    let newValue = { ...recipe[listType][index], value };
    setRecipe({
      ...recipe,
      [listType]: [
        ...recipe[listType].slice(0, index),
        newValue,
        ...recipe[listType].slice(index + 1),
      ],
    });
  };

  // Handles changes to the new input field inside of EditableList
  const handleChangeNewListInput = (listType, value) => {
    setNewInput({ ...newInput, [listType]: value });
  };

  // Handles press actions on the add item buttons
  // TODO: if the input field is blank, show an error message
  const handlePressAddButton = async (listType) => {
    if (newInput[listType]) {
      await setRecipe({
        ...recipe,
        [listType]: [...recipe[listType], { value: newInput[listType] }],
      });
      setNewInput({ ...newInput, [listType]: "" });
    }
  };

  // Handles press actions on the remove item buttons
  const handlePressRemoveButton = (listType, index) => {
    setRecipe({
      ...recipe,
      [listType]: [
        ...recipe[listType].slice(0, index),
        ...recipe[listType].slice(index + 1),
      ],
    });
  };

  // Handles press actions on the submit button in the toolbar
  const handlePressSubmitButton = () => {
    const updatedRecipe = { ...recipe };
    updatedRecipe.totalTime = Number(updatedRecipe.totalTime);
    updateRecipe(_id, updatedRecipe)
      .then(({ _id, title, totalTime, description, ingredients, steps }) => {
        navigation.navigate("ViewRecipe", {
          _id,
          title,
          totalTime,
          description,
          ingredients,
          steps,
        });
      })
      .catch((e) => {
        console.log(e);
      });
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
          <EditableList
            type="ingredients"
            data={recipe.ingredients}
            newInputValue={newInput.ingredients}
            onChangeInputValues={handleChangeListInput}
            onChangeNewInputValue={handleChangeNewListInput}
            onPressAddButton={handlePressAddButton}
            onPressRemoveButton={handlePressRemoveButton}
          />
        </Card>
        <Card title="Steps">
          <EditableList
            type="steps"
            data={recipe.steps}
            newInputValue={newInput.steps}
            onChangeInputValues={handleChangeListInput}
            onChangeNewInputValue={handleChangeNewListInput}
            onPressAddButton={handlePressAddButton}
            onPressRemoveButton={handlePressRemoveButton}
          />
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
        <Icon
          reverse
          name="md-checkmark"
          type="ionicon"
          color={colours.dark}
          onPress={handlePressSubmitButton}
        />
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
