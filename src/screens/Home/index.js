import React, { useContext, useEffect, useState } from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import Input from "../../components/Input/index.js";
import styles from "./styles.js";
import Title from "../../components/Title/index.js";
import Categories from "../../components/Categories/index.js";
import RecipeCard from "../../components/RecipeCard/index.js";
import Card from "../../components/Card/index.js";
import { HealthyRecipesContext, RecipesContext } from "../../../App.js";

const Home = ({ navigation }) => {
  const { recipes } = useContext(RecipesContext);
  const { healthyRecipes } = useContext(HealthyRecipesContext);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState();

  useEffect(() => {
    const tagsData = [];
    recipes?.forEach((recipe) => {
      recipe?.tags?.forEach((tag) => {
        if (!tagsData.includes(tag?.name)) {
          tagsData.push(tag?.name);
        }
      });
    });
    setTags(tagsData);
  }, [recipes]);

  return (
    <SafeAreaView style={styles.container}>
      <Input pressable onPress={() => navigation.navigate("Search")} />
      <Title text={"Healthy recipes"} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item?.id)}
        style={{ marginHorizontal: -24 }}
        data={healthyRecipes}
        renderItem={({ item, index }) => {
          return (
            <RecipeCard
              style={index === 0 ? { marginLeft: 24 } : {}}
              title={item?.name}
              time={item?.cook_time_minutes}
              image={item?.thumbnail_url}
              rating={item?.user_ratings?.score}
              author={{
                name: item?.credits[0]?.name,
                image: item?.credits[0]?.image_url,
              }}
            />
          );
        }}
      />

      <Categories
        categories={tags}
        selectedCategory={selectedTag}
        onCategoryPress={setSelectedTag}
      />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: -24 }}
        keyExtractor={(item) => String(item?.id)}
        data={recipes}
        renderItem={({ item, index }) => (
          <Card
            style={index === 0 ? { marginLeft: 24 } : {}}
            title={item?.name}
            image={item?.thumbnail_url}
            serving={item?.num_servings}
            rating={item?.user_ratings?.score}
            author={{
              name: item?.credits[0]?.name,
              image: item?.credits[0]?.image_url,
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
