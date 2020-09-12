import React from "react";
import { StyleSheet, Text } from "react-native";
import colours from "../config/colours";

const ErrorMessage = ({ error }) => {
  return <Text style={styles.text}>{error}</Text>;
};

const styles = StyleSheet.create({
  text: {
    padding: 5,
    fontSize: 12,
    color: colours.error,
  },
});

export default ErrorMessage;
