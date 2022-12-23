import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import Title from "../../components/Title/index.js";
import styles from "./styles.js";

const RecipeDetails = ({ route }) => {
  const { item } = route?.params || {};
  const nutrition = item?.nutrition;
  delete nutrition?.updated_at;
  const nutritionKeys = Object.keys(nutrition || {});
  const instructions = item?.instructions || [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={{ uri: item?.thumbnail_url }} />
        <Title style={{ marginBottom: 32 }} text={item?.name} />
        {nutritionKeys?.map((key) => (
          <View style={styles.row} key={key}>
            <Text style={styles.text}>{key}</Text>
            <Text style={styles.value}>{nutrition[key]}</Text>
          </View>
        ))}
        <Title style={{ marginTop: 32, marginBottom: 8 }} text="Instructions" />
        {instructions?.map((instruction, index) => (
          <View style={styles.instructionsRow} key={instruction?.id}>
            <Text style={styles.index}>{index + 1}</Text>
            <Text style={styles.instructionText}>
              {instruction?.display_text}
            </Text>
          </View>
        ))}
        {!instructions.length ? (
          <Text style={styles.value}>No instructions found</Text>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(RecipeDetails);
