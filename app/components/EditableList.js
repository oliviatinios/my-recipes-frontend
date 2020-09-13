import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import colours from "../config/colours";
import EditableListItem from "../components/EditableListItem";

const EditableList = ({ title, data }) => {
  const [newInputValue, setNewInputValue] = useState("");
  const [inputValues, setInputValues] = useState(data);

  const handleChangeInputValues = (value, index) => {
    let newInputValue = { ...inputValues[index], value };
    setInputValues([
      ...inputValues.slice(0, index),
      newInputValue,
      ...inputValues.slice(index + 1),
    ]);
  };

  const handleChangeNewInputValue = (value) => {
    setNewInputValue(value);
  };

  const handlePressAddButton = () => {
    setInputValues([...inputValues, { value: newInputValue }]);
    setNewInputValue("");
  };

  const handlePressRemoveButton = (index) => {
    setInputValues([
      ...inputValues.slice(0, index),
      ...inputValues.slice(index + 1),
    ]);
  };

  return (
    <View style={styles.container}>
      {inputValues.map((item, index) => (
        <EditableListItem
          inputValue={inputValues[index].value}
          placeholder=""
          iconType="md-remove"
          onChangeText={(value) => handleChangeInputValues(value, index)}
          onPressIcon={() => handlePressRemoveButton(index)}
        />
      ))}
      <EditableListItem
        inputValue={newInputValue}
        placeholder={`Add a new ${title} here...`}
        iconType="md-add"
        onChangeText={handleChangeNewInputValue}
        onPressIcon={handlePressAddButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.secondary,
    borderRadius: 5,
    padding: 5,
  },
});

export default EditableList;
