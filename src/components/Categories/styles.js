import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  item: {
    fontSize: 13,
    color: colors.green,
    fontWeight: "bold",
    padding: 8,
    paddingHorizontal: 12,
  },
  selectedItem: {
    color: colors.white,
  },
  itemContainer: {
    marginVertical: 14,
    marginRight: 8,
  },
  selectedItemContainer: {
    backgroundColor: colors.green,
    borderRadius: 10,
  },
  flatList: {
    marginHorizontal: -24,
  },
});

export default styles;
