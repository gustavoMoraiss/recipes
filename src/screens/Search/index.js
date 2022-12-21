import React, { useContext, useEffect, useState } from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import Input from "../../components/Input/index.js";
import RecipeCard from "../../components/RecipeCard/index.js";
import styles from "./styles.js";
import { RecipesContext } from "../../../App.js";
import Card from "../../components/Card/index.js";

const Search = ({ navigation }) => {
  const { recipes } = useContext(RecipesContext);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (keyword?.length >= 2) {
      const filteredItems = recipes?.filter((rec) =>
        rec?.name?.toLowerCase()?.includes(keyword?.toLowerCase())
      );
      setFilteredRecipes(filteredItems);
    } else {
      setFilteredRecipes([]);
    }
  }, [keyword]);

  const onDetailScreen = (item) => {
    navigation.navigate("RecipeDetails", { item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Input autoFocus onChangeText={setKeyword} value={keyword} />
      <FlatList
        numColumns={2}
        style={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item?.id)}
        data={filteredRecipes}
        renderItem={({ item, index }) => (
          <Card
            onPress={() => onDetailScreen(item)}
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

export default React.memo(Search);
