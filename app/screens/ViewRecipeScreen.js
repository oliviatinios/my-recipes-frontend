import React from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import { Icon } from "react-native-elements";

import colours from "../config/colours";
import deleteRecipe from "../utils/deleteRecipe";
import Card from "../components/Card";
import List from "../components/List";
import Toolbar from "../components/Toolbar";

const ViewRecipeScreen = ({ route, navigation }) => {
  const {
    _id,
    title,
    totalTime,
    description,
    ingredients,
    steps,
  } = route.params;

  const handlePressEdit = () => {
    navigation.push("EditRecipe", {
      _id,
      title,
      totalTime,
      description,
      ingredients,
      steps,
    });
  };

  const handlePressDelete = () => {
    deleteRecipe(_id)
      .then((data) => {
        Alert.alert(
          `Delete ${title}`,
          "Are you sure you want to delete this recipe?",
          [
            {
              text: "No",
            },
            {
              text: "Yes",
              onPress: () => navigation.navigate("Home"),
            },
          ]
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text
          style={styles.subtitle}
        >{`total time: ${totalTime} min, ingredients: ${ingredients.length}`}</Text>
        {description && (
          <Card title="Description">
            <Text style={styles.description}>{description}</Text>
          </Card>
        )}
        <Card title="Ingredients">
          <List data={ingredients} isOrdered={false} />
        </Card>
        <Card title="Steps">
          <List data={steps} isOrdered={true} />
        </Card>
      </ScrollView>
      <Toolbar>
        <Icon
          reverse
          name="md-trash"
          type="ionicon"
          color={colours.dark}
          onPress={handlePressDelete}
        />
        <Icon
          reverse
          name="md-create"
          type="ionicon"
          color={colours.dark}
          onPress={handlePressEdit}
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
  description: {
    fontSize: 18,
    margin: 5,
    padding: 5,
    color: colours.light,
  },
  subtitle: {
    fontSize: 14,
    margin: 5,
    color: colours.dark,
  },
  title: {
    fontSize: 36,
    margin: 5,
    color: colours.dark,
  },
});

export default ViewRecipeScreen;
