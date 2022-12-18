import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import styles from "./styles.js";
import Button from "../../components/Button";

const Splash = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../../assets/splash.png")}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
        <Text style={styles.title}>100k+ Premium Recipe</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.bigTitle}>Get</Text>
        <Text style={styles.bigTitle}>cooking</Text>
        <Text style={styles.subTitle}>Simple away to find Tasty Recipe</Text>
        <Button onPress={() => navigation.navigate("Home")}>
          Start cooking
        </Button>
      </View>
    </ImageBackground>
  );
};

export default React.memo(Splash);
