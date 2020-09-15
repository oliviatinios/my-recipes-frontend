import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

import getUserProfile from "../utils/getUserProfile";
import Card from "../components/Card";

const UserProfileScreen = ({ navigation }) => {
  const [profile, setProfile] = setState({});

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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <Card title="About Me">
          <Text style={{ color: colours.light }}>Name: </Text>
          <Text style={{ color: colours.light }}>{profile.name}</Text>
        </Card>

        <Card title="Options"></Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    margin: 5,
    color: colours.dark,
  },
});

export default UserProfileScreen;
