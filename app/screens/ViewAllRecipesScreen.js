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

import colours from "../config/colours";
import getAllRecipes from "../utils/getAllRecipes";
import Toolbar from "../components/Toolbar";

const ViewAllRecipesScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);

  const keyExtractor = (item, index) => item._id.toString();

  const handleItemPress = ({
    _id,
    title,
    totalTime,
    description,
    ingredients,
    steps,
  }) => {
    console.log(steps);
    navigation.push("ViewRecipe", {
      _id,
      title,
      subtitle:
        "total time: " + totalTime + " min, ingredients: " + ingredients.length,
      description,
      ingredients,
      steps,
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
    let mounted = true;

    if (mounted) {
      fetchRecipes();
    }

    return () => (mounted = false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        data={recipes}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
      />
      <Toolbar>
        <Text>{recipes.length + " recipes"}</Text>
        <Icon
          reverse
          name="md-refresh"
          type="ionicon"
          color={colours.dark}
          onPress={fetchRecipes}
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
