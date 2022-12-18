import React from "react";
import { Image, TextInput, View } from "react-native";
import colors from "../../constants/colors.js";
import styles from "./styles.js";

const Input = ({ placeholder, showSearchIcon, style }) => {
  return (
    <View style={[styles.container, style]}>
      {showSearchIcon ? (
        <Image
          style={styles.icon}
          source={require("../../../assets/search.png")}
        />
      ) : null}
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.lightGray}
        placeholder={placeholder}
      />
    </View>
  );
};

Input.defaultProps = {
  placeholder: "Search recipe",
  showSearchIcon: true,
};

export default React.memo(Input);
