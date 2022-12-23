import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import Title from "../../components/Title/index.js";
import styles from "./styles.js";

const RecipeDetails = ({ route }) => {
  const { item } = route?.params || {};
  const nutrition = item?.nutrition;
  delete nutrition?.updated_at;
  const nutritionKeys = Object.keys(nutrition || {});

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{ uri: item?.thumbnail_url }} />
      <Title style={{ marginBottom: 32 }} text={item?.name} />
      {nutritionKeys?.map((key) => (
        <View style={styles.row} key={key}>
          <Text style={styles.text}>{key}</Text>
          <Text style={styles.value}>{nutrition[key]}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default React.memo(RecipeDetails);
