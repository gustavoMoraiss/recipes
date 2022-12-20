import React from "react";
import { Image, Pressable, TextInput, View } from "react-native";
import colors from "../../constants/colors.js";
import styles from "./styles.js";

const Input = ({ placeholder, showSearchIcon, pressable, onPress, style }) => {
  const renderInput = () => {
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
          placeholderTextColor={colors.lightGrey}
          placeholder={placeholder}
        />
      </View>
    );
  };

  if (pressable) {
    return <Pressable onPress={onPress}>{renderInput}</Pressable>;
  }

  return renderInput();
};

Input.defaultProps = {
  placeholder: "Search recipe",
  showSearchIcon: true,
};

export default React.memo(Input);
