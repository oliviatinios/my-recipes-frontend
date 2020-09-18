import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import ErrorMessage from "../components/ErrorMessage";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import signup from "../utils/signup";
import colours from "../config/colours";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleChangeName = (value) => {
    setName(value);
  };

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  const handlePressSignup = () => {
    // Check if any fields are empty
    if (!(name && email && password))
      return setErrors({
        ...errors,
        name: getErrorMessage("name", name),
        email: getErrorMessage("email", email),
        password: getErrorMessage("password", password),
      });

    // Create new user in database
    signup(name, email, password)
      .then((data) => {
        // Username already taken
        if (data.name === "MongoError" && data.keyPattern.email) {
          return setErrors({ email: "Email already taken!" });
        }

        // Email validation errors
        if (data.errors && data.errors.email) {
          return setErrors({ email: data.errors.email.message });
        }

        // Password validation errors
        if (data.errors && data.errors.password) {
          console.log(data);
          return setErrors({
            password: data.errors.password.message,
          });
        }

        // Set up authorization token as environment variable
        process.env.AUTH_TOKEN = data.token;

        // Navigate to ViewAllRecipes screen
        navigation.navigate("Home");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // Return error message if field is empty else return empty string
  const getErrorMessage = (fieldName, field) => {
    if (!field) {
      return `Please add your ${fieldName}!`;
    }

    return "";
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.titleText}>
            Enter your information below to sign up for an account
          </Text>
        </View>
        <View style={styles.formContainer}>
          <ErrorMessage error={errors.name} />
          <InputField
            key="name"
            id="name"
            value={name}
            isSecure={false}
            onChange={handleChangeName}
          />
          <ErrorMessage error={errors.email} />
          <InputField
            key="email"
            id="email"
            value={email}
            isSecure={false}
            onChange={handleChangeEmail}
          />
          <ErrorMessage error={errors.password} />
          <InputField
            key="password"
            id="password"
            value={password}
            isSecure={true}
            onChange={handleChangePassword}
          />
          <SubmitButton
            text="Sign Up"
            colour={colours.secondary}
            onSubmit={handlePressSignup}
          />
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
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colours.background,
  },
  titleText: {
    width: "80%",
    textAlign: "center",
    fontSize: 24,
    color: colours.light,
  },
});

export default SignupScreen;
