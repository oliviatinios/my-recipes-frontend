import React from "react";
import { StyleSheet, TextInput } from "react-native";

const InputField = ({ id, value, isSecure, onChange }) => {
  const handleChangeText = (text) => {
    onChange(text);
  };

  return (
    <TextInput
      style={styles.input}
      onChangeText={handleChangeText}
      value={value}
      secureTextEntry={isSecure}
      placeholder={id}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 70,
    paddingHorizontal: 20,
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});

export default InputField;
