import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon, ListItem } from "react-native-elements";
import Swipeable from "react-native-swipeable";

import colours from "../config/colours";

const EditableList = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([
    "1 can of beans",
    "2 cups of rice",
    "1 can of tomato paste",
  ]);

  const handleChangeInputValue = (value) => {
    setInputValue(value);
  };

  const handlePressAddButton = () => {
    setListItems([...listItems, inputValue]);
    setInputValue("");
  };

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item, index }) => (
    <Swipeable rightButtons={renderRightButton(index)} rightButtonWidth={75}>
      <ListItem containerStyle={styles.listItem} key={index}>
        <ListItem.Content>
          <ListItem.Title style={styles.itemText}>{item}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </Swipeable>
  );

  const renderRightButton = (index) => {
    return [
      <View style={styles.deleteContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteItem(index)}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>,
    ];
  };

  const deleteItem = (index) => {
    const newListItems = listItems.splice(index, 1);
    setListItems([...newListItems]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        data={listItems}
        renderItem={renderItem}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeInputValue}
          value={inputValue}
          placeholder="Add a new ingredient here..."
        />
        <Icon
          reverse
          name="md-add"
          type="ionicon"
          size={16}
          color={colours.dark}
          onPress={handlePressAddButton}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.secondary,
  },
  input: {
    width: "70%",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  itemText: {
    color: colours.light,
  },
  listItem: {
    width: "70%",
    height: 50,
    backgroundColor: colours.secondary,
  },
});

export default EditableList;
