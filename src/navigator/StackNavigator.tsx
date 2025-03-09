import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TemperatureConverter from '../screens/TemperatureConverter';
import RomanConverter from '../screens/RomanConverter';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="RomanConverter">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="TemperatureConverter"
        component={TemperatureConverter}
      />
      <Stack.Screen name="RomanConverter" component={RomanConverter} />
    </Stack.Navigator>
  );
};
