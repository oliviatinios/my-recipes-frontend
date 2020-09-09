import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import colours from "../config/colours";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text style={styles.titleText}>My Recipes</Text>
        </View>
        <View style={styles.formContainer}>
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
          <SubmitButton text="Sign In" colour={colours.primary} />
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
    flex: 1,
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

export default LoginScreen;
