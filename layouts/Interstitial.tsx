import { CommonActions, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import {
  AdEventType,
  InterstitialAd,
  TestIds,
} from "react-native-google-mobile-ads";

const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
  requestNonPersonalizedAdsOnly: true,
});

const Interstitial = () => {
  // Navigation
  const navigation = useNavigation();

  // Local state
  const [isLoaded, setIsLoaded] = useState(false);

  // UseEffect
  useEffect(() => {
    const unload = loadInterstitial();

    return unload;
  }, []);

  const handleNavigateToHome = () => {
    navigation.dispatch(CommonActions.navigate("Home"));
  };

  const loadInterstitial = () => {
    const unsubscribed = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setIsLoaded(true);
      }
    );

    const unclosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      setIsLoaded(false);
      interstitial.load();
    });

    interstitial.load();

    return () => {
      unsubscribed();
      unclosed();
    };
  };

  const handleShowInterstitial = () => {
    if (isLoaded) {
      interstitial.show();
    }
  };

  return (
    <View style={styles.container}>
      {isLoaded ? (
        <Button title="Show Interstitial" onPress={handleShowInterstitial} />
      ) : (
        <Text>Interstitial not loaded</Text>
      )}
      <Button title="Go to Home" onPress={handleNavigateToHome} />
    </View>
  );
};

export default Interstitial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
