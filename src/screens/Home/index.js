import { StyleSheet, Text, View, Button } from "react-native";
import NavBar from "../../components/NavBar";
import { colors, text } from "../../utils/colors";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Trang chủ</Text>
      </View>
      <NavBar navigation={navigation} activeIndex={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_50,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
