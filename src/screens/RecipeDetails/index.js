import React from "react";
import { Image, SafeAreaView } from "react-native";
import Title from "../../components/Title/index.js";
import styles from "./styles.js";

const RecipeDetails = ({ route }) => {
  const { item } = route?.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{ uri: item?.thumbnail_url }} />
      <Title text={item?.name} />
    </SafeAreaView>
  );
};

export default React.memo(RecipeDetails);
