import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import colours from "../config/colours";

const ViewRecipeScreen = ({ route, navigation }) => {
  const { _id, title, subtitle, description } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Description</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Ingredients</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Steps</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.light,
  },
  description: {
    fontSize: 14,
    margin: 5,
    color: colours.light,
  },
  innerContainer: {
    backgroundColor: colours.secondary,
    margin: 5,
  },
  header: {
    fontSize: 24,
    margin: 5,
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
