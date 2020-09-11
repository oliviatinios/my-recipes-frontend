import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const SubmitButton = ({ text, colour, onSubmit }) => {
  return (
    <TouchableHighlight style={styles.button} onPress={onSubmit}>
      <View style={[{ backgroundColor: colour }, styles.button]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default SubmitButton;
