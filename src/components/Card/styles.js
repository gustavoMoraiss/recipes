import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 10,
    width: width * 0.4,
    marginBottom: 32,
    marginTop: 46,
    marginRight: 16,
    // iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    // Android
    elevation: 4,
  },
  title: {
    fontSize: 14,
    color: colors.grey,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 16,
  },
  label: {
    color: colors.lightGrey2,
    fontSize: 11,
    marginTop: 8,
    marginBottom: 4,
  },
  value: {
    color: colors.grey,
    fontSize: 11,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -60,
    alignSelf: "center",
  },
});

export default styles;
