import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";

import colours from "../config/colours";

const EditableListItem = ({
  inputValue,
  placeholder,
  iconType,
  onChangeText,
  onPressIcon,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={inputValue}
        placeholder={placeholder}
      />
      <Icon
        reverse
        name={iconType}
        type="ionicon"
        size={16}
        color={colours.dark}
        onPress={onPressIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
  },
});

export default EditableListItem;
