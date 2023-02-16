import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Banner from '../layouts/Banner';
import Home from '../layouts/Home';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Banner' component={Banner} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation;