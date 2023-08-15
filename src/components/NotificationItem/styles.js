import EStyleSheet from "react-native-extended-stylesheet";
import { colors, text } from "~utils/colors.js";

const styles = EStyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: "1rem",
  },
  title_container: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: "1rem",
    fontWeight: 500,
    color: text.color_800,
    marginLeft: "1rem",
  },
  time: {
    fontSize: "0.8rem",
    fontWeight: 500,
    color: text.color_400,
  },
  price: {
    fontSize: "1rem",
    fontWeight: 600,
    color: text.color_800,
  },
});

export default styles;
