import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import colours from "../config/colours";

const SignupScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  const handleChangeName = (value) => {
    setName(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.titleText}>My Recipes</Text>
        </View>
        <View style={styles.formContainer}>
          <InputField
            key="name"
            id="name"
            value={name}
            isSecure={false}
            onChange={handleChangeName}
          />
          <InputField
            key="email"
            id="email"
            value={email}
            isSecure={false}
            onChange={handleChangeEmail}
          />
          <InputField
            key="password"
            id="password"
            value={password}
            isSecure={true}
            onChange={handleChangePassword}
          />
          <SubmitButton text="Sign Up" colour={colours.secondary} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colours.background,
  },
  formContainer: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 50,
    backgroundColor: colours.background,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 20,
    backgroundColor: colours.background,
  },
  titleText: {
    fontSize: 30,
  },
});

export default SignupScreen;
