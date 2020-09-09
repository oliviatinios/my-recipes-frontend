import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import colours from "../config/colours";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(text) {
    setEmail(text);
  }

  function handleChangePassword(text) {
    setPassword(text);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text style={styles.titleText}>My Recipes</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeEmail}
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={handleChangePassword}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
          />
          <TouchableHighlight style={styles.loginButton}>
            <View style={styles.loginButton}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
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
  input: {
    width: "100%",
    height: 70,
    paddingHorizontal: 20,
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: colours.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
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
