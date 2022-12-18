import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 60,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
  },
  bigTitle: {
    fontSize: 50,
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 14,
  },
  subTitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
    marginBottom: 64,
    marginTop: 20,
  },
});

export default styles;
