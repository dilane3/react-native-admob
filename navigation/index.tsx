import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Banner from '../layouts/Banner';
import Home from '../layouts/Home';
import Interstitial from '../layouts/Interstitial';
import Reward from '../layouts/Reward';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Banner' component={Banner} />
        <Stack.Screen name='Inter' component={Interstitial} />
        <Stack.Screen name='Reward' component={Reward} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation;