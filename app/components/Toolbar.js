import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";

import colours from "../config/colours";

const Toolbar = (props) => {
  return (
    <View style={styles.container}>
      <Icon
        reverse
        name="md-trash"
        type="ionicon"
        color={colours.dark}
        onPress={() => console.log("test")}
      />
      <Icon reverse name="md-create" type="ionicon" color={colours.dark} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colours.light,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
  },
});

export default Toolbar;
