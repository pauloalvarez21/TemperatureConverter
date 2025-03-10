import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RootStackParamList} from '../navigator/StackNavigator'; // Importa el tipo

// Define el tipo de navegación para la pantalla actual
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Easy Converter</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TemperatureConverter')}
      >
        <Text style={styles.buttonText}>Go to Temperature Converter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RomanConverter')}
      >
        <Text style={styles.buttonText}>Go to Roman Converter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00AEEF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    fontFamily: 'CHOWFUN_',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'CHOWFUN_',
  },
});

export default HomeScreen;

