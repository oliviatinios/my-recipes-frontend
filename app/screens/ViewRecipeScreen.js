import React from "react";
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Icon } from "react-native-elements";

import colours from "../config/colours";
import Card from "../components/Card";
import List from "../components/List";
import Toolbar from "../components/Toolbar";

const ViewRecipeScreen = ({ route, navigation }) => {
  const { title, subtitle, description, ingredients, steps } = route.params;

  console.log(steps);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
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
          onPress={() => console.log("test")}
        />
        <Icon reverse name="md-create" type="ionicon" color={colours.dark} />
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
