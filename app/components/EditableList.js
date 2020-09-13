import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import colours from "../config/colours";
import EditableListItem from "../components/EditableListItem";

const EditableList = ({
  type,
  data,
  newInputValue,
  onChangeInputValues,
  onChangeNewInputValue,
  onPressAddButton,
  onPressRemoveButton,
}) => {
  const handleChangeText = (value) => {};

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <EditableListItem
          key={index}
          inputValue={data[index].value}
          placeholder=""
          iconType="md-remove"
          onChangeText={(value) => onChangeInputValues(type, value, index)}
          onPressIcon={() => onPressRemoveButton(type, index)}
        />
      ))}
      <EditableListItem
        inputValue={newInputValue}
        placeholder={`Add a new ${type.slice(0, -1)} here...`}
        iconType="md-add"
        onChangeText={(value) => onChangeNewInputValue(type, value)}
        onPressIcon={() => onPressAddButton(type)}
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
