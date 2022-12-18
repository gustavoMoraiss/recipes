import React from "react";
import { Text, SafeAreaView } from "react-native";
import styles from "./styles.js";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.background}>
      <Text onPress={() => navigation.navigate("Search")}>Home</Text>
    </SafeAreaView>
  );
};

export default React.memo(Home);
