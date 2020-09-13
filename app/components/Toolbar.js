import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";

import colours from "../config/colours";

const Toolbar = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colours.light,
    bottom: 0,
    width: "100%",
    height: 60,
  },
});

export default Toolbar;
