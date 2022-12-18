import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.lightGray,
    paddingVertical: 12,
    marginVertical: 16,
  },
  input: {
    color: colors.black,
    fontSize: 12,
  },
  icon: {
    width: 24,
    marginRight: 16,
    height: 24,
  },
});

export default styles;
