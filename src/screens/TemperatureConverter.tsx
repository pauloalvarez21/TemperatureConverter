import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Importar useNavigation
import useTemperatureConverter from '../state/useTemperatureConverter';
import Header from '../components/Header';

const TemperatureConverter = () => {
  const navigation = useNavigation(); // Obtener la navegación
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('C');
  const {converted, convertTemperature} = useTemperatureConverter(
    temperature,
    scale,
  );

  return (
    <View style={styles.container}>
      <Header
        title="Conversor de Temperatura"
        showBack={true}
        navigation={navigation}
      />
      <Text style={styles.label}>Ingrese temperatura:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={temperature}
        onChangeText={setTemperature}
      />
      <View style={styles.buttonContainer}>
        {['Cel', 'Fah', 'Kel', 'Ran', 'Rea'].map(item => (
          <TouchableOpacity
            key={item}
            style={[styles.button, scale === item && styles.selectedButton]}
            onPress={() => setScale(item)}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.convertButton}
        onPress={convertTemperature}>
        <Text style={styles.buttonText}>Convertir</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Resultados:</Text>
      <Text style={styles.result}>Celsius: {converted.C}°C</Text>
      <Text style={styles.result}>Fahrenheit: {converted.F}°F</Text>
      <Text style={styles.result}>Kelvin: {converted.K}K</Text>
      <Text style={styles.result}>Rankine: {converted.R}°R</Text>
      <Text style={styles.result}>Réaumur: {converted.Re}°Re</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AEEF',
    padding: 20,
  },
  label: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  selectedButton: {
    backgroundColor: '#FFD700',
  },
  convertButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  result: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default TemperatureConverter;
