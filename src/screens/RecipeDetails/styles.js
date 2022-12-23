import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(217, 217, 217, 0.4)",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 4,
  },
  text: {
    color: colors.black,
    fontSize: 12,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  value: {
    color: colors.lightGrey2,
    fontSize: 12,
    textTransform: "capitalize",
  },
});

export default styles;
