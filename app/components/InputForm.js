import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

import colours from "../config/colours";
import InputField from "./InputField";

const InputForm = ({ fields }) => {
  const handleFieldChange = (field, value) => {
    field.onChange(value);
  };

  const inputFields = Object.keys(fields).map((fieldId, index) => (
    <InputField
      key={fields[fieldId].id}
      id={fields[fieldId].id}
      value={fields[fieldId].value}
      isSecure={fields[fieldId].isSecure}
      onChange={handleFieldChange(fields[fieldId])}
    />
  ));

  return (
    <View style={styles.formContainer}>
      {inputFields}
      <TouchableHighlight style={styles.button}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: colours.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 50,
    backgroundColor: colours.background,
  },
});

export default InputForm;
