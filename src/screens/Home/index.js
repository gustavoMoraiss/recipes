import React from "react";
import { Text, SafeAreaView } from "react-native";
import Input from "../../components/Input/index.js";
import styles from "./styles.js";
import Title from "../../components/Title/index.js";
import Categories from "../../components/Categories/index.js";
import RecipeCard from "../../components/RecipeCard/index.js";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Input pressable onPress={() => navigation.navigate("Search")} />
      <Title text={"Featured recipes"} />
      <RecipeCard
        title="Steak and tomato sauce and bulgur rice"
        time="20 mins"
        author={{
          name: "Gustavo Morais",
          image:
            "https://cdn.pixabay.com/photo/2022/11/16/14/06/christmas-7596084_960_720.png",
        }}
      />
      <Categories
        categories={["All", "Trending"]}
        selectedCategory={"All"}
        onCategoryPress={() => {}}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
