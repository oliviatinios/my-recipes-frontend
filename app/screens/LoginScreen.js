import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import ErrorMessage from "../components/ErrorMessage";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import login from "../utils/login";
import colours from "../config/colours";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  const handlePressLogin = () => {
    login(email, password)
      .then((data) => {
        navigation.navigate("ViewAllRecipes");
      })
      .catch(() => {
        setError("Wrong username or password! Try again.");
      });
  };

  const handlePressSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text style={styles.titleText}>My Recipes</Text>
        </View>
        <View style={styles.formContainer}>
          <ErrorMessage error={error} />
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
          <SubmitButton
            text="Sign In"
            colour={colours.primary}
            onSubmit={handlePressLogin}
          />
          <TouchableOpacity onPress={handlePressSignup}>
            <Text style={styles.text}>
              Don't have an account? Sign up here!
            </Text>
          </TouchableOpacity>
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
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 20,
    backgroundColor: colours.background,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.background,
  },
  text: {
    textDecorationLine: "underline",
    color: colours.dark,
    margin: 5,
  },
  titleText: {
    fontSize: 36,
    color: colours.dark,
  },
});

export default LoginScreen;
