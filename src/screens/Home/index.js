import React from "react";
import { Text, SafeAreaView } from "react-native";
import Input from "../../components/Input/index.js";
import styles from "./styles.js";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => navigation.navigate("Search")}>Home</Text>
      <Input />
    </SafeAreaView>
  );
};

export default React.memo(Home);
