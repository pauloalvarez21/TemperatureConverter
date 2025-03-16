import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TemperatureConverter from '../screens/TemperatureConverter';
import RomanConverter from '../screens/RomanConverter';
import MayaConverter from '../screens/MayaConverter';
import NumberConverter from '../screens/NumberConverter';

// Define el tipo de las rutas
export type RootStackParamList = {
  Home: undefined;
  TemperatureConverter: undefined;
  RomanConverter: undefined;
  MayaConverter: undefined;
  NumberConverter: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="TemperatureConverter"
        component={TemperatureConverter}
      />
      <Stack.Screen name="RomanConverter" component={RomanConverter} />
      <Stack.Screen name="MayaConverter" component={MayaConverter} />
      <Stack.Screen name="NumberConverter" component={NumberConverter} />
    </Stack.Navigator>
  );
};
