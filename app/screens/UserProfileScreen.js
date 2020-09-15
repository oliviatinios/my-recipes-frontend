import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import colours from "../config/colours";
import getUserProfile from "../utils/getUserProfile";
import Card from "../components/Card";
import SubmitButton from "../components/SubmitButton";

const UserProfileScreen = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getUserProfile()
        .then((data) => {
          setProfile(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    return () => (mounted = false);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Card title="About Me">
        <Text style={styles.body}>{`Name: ${profile.name}`}</Text>
        <Text style={styles.body}>{`Email: ${profile.email}`}</Text>
        <Text style={styles.body}>{`Joined: ${new Date(
          profile.createdAt
        ).toDateString()}`}</Text>
      </Card>
      <View style={styles.buttonContainer}>
        <SubmitButton text="Change Email" colour={colours.button} />
      </View>
      <View style={styles.buttonContainer}>
        <SubmitButton text="Change Password" colour={colours.button} />
      </View>
      <View style={styles.buttonContainer}>
        <SubmitButton text="Log Out" colour={colours.primary} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    color: colours.light,
    fontSize: 16,
    padding: 10,
  },
  buttonContainer: {
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  container: {
    flex: 1,
    backgroundColor: colours.light,
  },
  title: {
    fontSize: 36,
    margin: 5,
    color: colours.dark,
  },
});

export default UserProfileScreen;
