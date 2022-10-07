import { StyleSheet, StatusBar } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    paddingTop: StatusBar.currentHeight,
  },
});

export default styles;
