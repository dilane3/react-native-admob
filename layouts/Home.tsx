import { CommonActions, useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = () => {
  // Navigation
  const navigation = useNavigation();

  const handleNavigateToBanner = () => {
    navigation.dispatch(
      CommonActions.navigate("Banner")
    );
  }

  return (
    <View style={styles.container}>
      <Text>Hello Home</Text>

      <Button title="Go to Banner" onPress={handleNavigateToBanner} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
