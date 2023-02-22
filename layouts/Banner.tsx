import { useNavigation, CommonActions } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Hello Banner</Text>

        <Button title="Go to Home" onPress={handleNavigateToHome} />
      </View>
      
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </SafeAreaView>
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
