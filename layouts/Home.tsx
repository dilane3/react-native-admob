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

  const handleNavigateToInterstitial = () => {
    navigation.dispatch(
      CommonActions.navigate("Inter")
    );
  }

  const handleNavigateToReward = () => {
    navigation.dispatch(
      CommonActions.navigate("Reward")
    );
  }

  return (
    <View style={styles.container}>
      <Text>Hello Home</Text>

      <Button title="Go to Banner" onPress={handleNavigateToBanner} />
      <Button title="Go to Interstitial" onPress={handleNavigateToInterstitial} />
      <Button title="Go to Reward" onPress={handleNavigateToReward} />
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
