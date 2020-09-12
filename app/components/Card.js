import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colours from "../config/colours";

const Card = ({ title, children }) => {
  return (
    <View style={styles.innerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: colours.secondary,
    margin: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    margin: 5,
    color: colours.light,
  },
  titleContainer: {
    borderBottomColor: colours.light,
    borderBottomWidth: 1,
  },
});

export default Card;
