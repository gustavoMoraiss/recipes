import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Card = ({ title, style, image, serving, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text numberOfLines={3} style={styles.title}>
        {title}
      </Text>
      {serving ? (
        <>
          <Text style={styles.label}>Servings</Text>
          <Text style={styles.value}>{serving}</Text>
        </>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(Card);
