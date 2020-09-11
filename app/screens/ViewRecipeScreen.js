import React from "react";
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Icon } from "react-native-elements";

import colours from "../config/colours";

const ViewRecipeScreen = ({ route, navigation }) => {
  const { _id, title, subtitle, description } = route.params;

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.toolbar}>
        <Icon
          reverse
          name="md-trash"
          type="ionicon"
          color={colours.dark}
          onPress={() => console.log("test")}
        />
        <Icon reverse name="md-create" type="ionicon" color={colours.dark} />
      </View>
    </SafeAreaView>
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
  toolbar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colours.light,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
  },
});

export default ViewRecipeScreen;
