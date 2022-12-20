import React from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
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
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: -24 }}
        data={[1, 2, 3, 4, 5]}
        renderItem={({ index }) => (
          <RecipeCard
            style={index === 0 ? { marginLeft: 24 } : {}}
            title="Steak and tomato sauce and bulgur rice"
            time="20 mins"
            author={{
              name: "Gustavo Morais",
              image:
                "https://cdn.pixabay.com/photo/2022/11/16/14/06/christmas-7596084_960_720.png",
            }}
          />
        )}
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
