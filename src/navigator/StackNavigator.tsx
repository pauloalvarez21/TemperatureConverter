import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Temperature from '../screens/Temperature';

const Stack = createStackNavigator();

 export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Temperature">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Temperature" component={Temperature} />
    </Stack.Navigator>
  );
}