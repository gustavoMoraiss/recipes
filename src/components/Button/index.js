import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles.js";

const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.buttonText}>{children}</Text>
      <Image
        style={styles.icon}
        source={require("../../../assets/arrowRight.png")}
      />
    </TouchableOpacity>
  );
};

export default React.memo(Button);
