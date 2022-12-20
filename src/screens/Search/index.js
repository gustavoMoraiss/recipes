import React from "react";
import { Text, SafeAreaView } from "react-native";
import Input from "../../components/Input/index.js";
import RecipeCard from "../../components/RecipeCard/index.js";
import styles from "./styles.js";

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Input />
    </SafeAreaView>
  );
};

export default React.memo(Search);
