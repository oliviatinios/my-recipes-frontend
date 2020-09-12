import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
} from "react-native";
import { Icon, ListItem } from "react-native-elements";

import getAllRecipes from "../utils/getAllRecipes";
import colours from "../config/colours";

const ViewAllRecipesScreen = ({ navigation }) => {
  // const recipes = [
  //   {
  //     _id: 1,
  //     title: "Burrito Bowl",
  //     description: "blah blah blah blah blah blah blah blah blah",
  //     totalTime: 60,
  //     ingredients: [],
  //     steps: [],
  //   },
  //   {
  //     _id: 2,
  //     title: "Buddha Bowl",
  //     totalTime: 45,
  //     ingredients: [],
  //     steps: [],
  //   },
  //   {
  //     _id: 5,
  //     title: "Pesto Pasta",
  //     totalTime: 30,
  //     ingredients: [],
  //     steps: [],
  //   },
  //   {
  //     _id: 6,
  //     title: "Pesto Pasta",
  //     totalTime: 30,
  //     ingredients: [],
  //     steps: [],
  //   },
  //   {
  //     _id: 7,
  //     title: "Pesto Pasta",
  //     totalTime: 30,
  //     ingredients: [],
  //     steps: [],
  //   },
  //   {
  //     _id: 8,
  //     title: "Pesto Pasta",
  //     totalTime: 30,
  //     ingredients: [],
  //     steps: [],
  //   },
  //   {
  //     _id: 9,
  //     title: "Pesto Pasta",
  //     totalTime: 30,
  //     ingredients: [],
  //     steps: [],
  //   },
  //   {
  //     _id: 10,
  //     title: "Pesto Pasta",
  //     totalTime: 30,
  //     ingredients: [],
  //     steps: [],
  //   },
  // ];

  const [recipes, setRecipes] = useState([]);

  const keyExtractor = (item, index) => item._id.toString();

  const handleItemPress = (item) => {
    navigation.navigate("ViewRecipe", {
      _id: item._id,
      title: item.title,
      subtitle:
        "total time: " +
        item.totalTime +
        " min, ingredients: " +
        item.ingredients.length,
      description: item.description,
    });
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Recipes</Text>
      <Icon
        reverse
        name="md-add"
        type="ionicon"
        size={20}
        color={colours.dark}
        onPress={() => console.log("test")}
      />
    </View>
  );

  const renderItem = ({ item }) => (
    <ListItem
      containerStyle={styles.listItem}
      key={item._id}
      onPress={() => handleItemPress(item)}
    >
      <ListItem.Content>
        <ListItem.Title style={styles.itemTitle}>{item.title}</ListItem.Title>
        <ListItem.Subtitle style={styles.itemSubtitle}>
          {"total time: " +
            item.totalTime +
            " min, ingredients: " +
            item.ingredients.length}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color="white" />
    </ListItem>
  );

  // Fetch user recipes from backend API
  const fetchRecipes = () => {
    getAllRecipes()
      .then((data) => {
        // If authentication token is expired, go to login screen
        if (data.error === "Please authenticate.") {
          Alert.alert(
            "Session Expired",
            "Something went wrong! Please login again."
          ),
            [
              {
                text: "OK",
              },
            ];

          navigation.navigate("Login");
        } else {
          setRecipes(data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        data={recipes}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
      />
      <View style={styles.footer}>
        <Text>{recipes.length + " recipes"}</Text>
        <Icon
          reverse
          name="md-refresh"
          type="ionicon"
          color={colours.dark}
          onPress={fetchRecipes}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.light,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.light,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemSubtitle: {
    color: colours.titleText,
  },
  itemTitle: {
    fontSize: 24,
    color: colours.titleText,
  },
  listItem: {
    backgroundColor: colours.primary,
    margin: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 36,
    margin: 5,
    color: colours.dark,
  },
});

export default ViewAllRecipesScreen;
