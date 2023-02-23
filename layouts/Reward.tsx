import { CommonActions, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import {
  AdEventType,
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from "react-native-google-mobile-ads";

const rewardInterstitial = RewardedAd.createForAdRequest(TestIds.REWARDED, {
  requestNonPersonalizedAdsOnly: true,
});

const Reward = () => {
  // Navigation
  const navigation = useNavigation();

  // Local state
  const [isLoaded, setIsLoaded] = useState(false);
  const [reward, setReward] = useState(0);

  // UseEffect
  useEffect(() => {
    const unload = loadRewardInterstitial();

    return unload;
  }, []);

  const handleNavigateToHome = () => {
    navigation.dispatch(CommonActions.navigate("Home"));
  };

  const loadRewardInterstitial = () => {
    const unsubscribed = rewardInterstitial.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setIsLoaded(true);
      }
    );

    const unreward = rewardInterstitial.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      (rwd) => {
        console.log("Earned reward", rwd);
      }
    )

    const unclosed = rewardInterstitial.addAdEventListener(AdEventType.CLOSED, () => {
      setIsLoaded(false);
      rewardInterstitial.load();
    });

    rewardInterstitial.load();

    return () => {
      unsubscribed();
      unreward();
      unclosed();
    };
  };

  const handleShowRewardInterstitial = () => {
    if (isLoaded) {
      rewardInterstitial.show();
    }
  };

  return (
    <View style={styles.container}>
      {isLoaded ? (
        <Button title="Show Reward Interstitial" onPress={handleShowRewardInterstitial} />
      ) : (
        <Text>Reward Interstitial not loaded</Text>
      )}
      <Button title="Go to Home" onPress={handleNavigateToHome} />
    </View>
  );
};

export default Reward;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
