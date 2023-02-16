import { useNavigation, CommonActions } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

const Banner = () => {
  // Navigation
  const navigation = useNavigation();

  const handleNavigateToHome = () => {
    navigation.dispatch(CommonActions.navigate("Home"));
  };

  return (
    <View style={styles.container}>
      <Text>Hello Banner</Text>

      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />

      <Button title="Go to Home" onPress={handleNavigateToHome} />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
