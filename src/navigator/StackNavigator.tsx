import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TemperatureConverter from '../screens/TemperatureConverter';
import RomanConverter from '../screens/RomanConverter';
import MayaConverter from '../screens/MayaConverter';
import NumberConverter from '../screens/NumberConverter';
import LengthConverter from '../screens/LengthConverter';
import PressureConverter from '../screens/PressureConverter';
import QuadraticSolver from '../screens/QuadraticSolver';
import PowerConverter from '../screens/PowerConverter';

// Define el tipo de las rutas
export type RootStackParamList = {
  Home: undefined;
  TemperatureConverter: undefined;
  RomanConverter: undefined;
  MayaConverter: undefined;
  NumberConverter: undefined;
  LengthConverter: undefined;
  PressureConverter: undefined;
  QuadraticSolver: undefined;
  PowerConverter: undefined;
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
      <Stack.Screen name="LengthConverter" component={LengthConverter} />
      <Stack.Screen name="PressureConverter" component={PressureConverter} />
      <Stack.Screen name="QuadraticSolver" component={QuadraticSolver} />
      <Stack.Screen name="PowerConverter" component={PowerConverter} />
    </Stack.Navigator>
  );
};
