import React from "react";
import { StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

import colours from "../config/colours";

const List = ({ data, isOrdered }) => {
  const getTitle = (item, index) =>
    isOrdered ? `${index + 1}. ${item.value}` : `\u2022 ${item.value}`;

  return data
    ? data.map((item, index) => (
        <ListItem containerStyle={styles.listItem} key={index}>
          <ListItem.Content>
            <ListItem.Title style={styles.itemText}>
              {getTitle(item, index)}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))
    : null;
};

const styles = StyleSheet.create({
  itemText: {
    color: colours.light,
  },
  listItem: {
    width: "70%",
    height: 50,
    backgroundColor: colours.secondary,
    borderRadius: 5,
  },
});

export default List;
