import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import useTemperatureConverter from '../state/useTemperatureConverter';

const Temperature = () => {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('C');
  const { converted, convertTemperature } = useTemperatureConverter(temperature, scale);

  return (
    <View style={styles.container}>
      <Text>Ingrese temperatura:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={temperature}
        onChangeText={setTemperature}
      />
      <View style={styles.buttonContainer}>
        <Button title='Celsius' onPress={() => setScale('C')} />
        <Button title='Fahrenheit' onPress={() => setScale('F')} />
        <Button title='Kelvin' onPress={() => setScale('K')} />
        <Button title='Rankine' onPress={() => setScale('R')} />
        <Button title='Réaumur' onPress={() => setScale('Re')} />
      </View>
      <Button title='Convertir' onPress={convertTemperature} />
      <Text>Resultados:</Text>
      <Text>Celsius: {converted.C}°C</Text>
      <Text>Fahrenheit: {converted.F}°F</Text>
      <Text>Kelvin: {converted.K}K</Text>
      <Text>Rankine: {converted.R}°R</Text>
      <Text>Réaumur: {converted.Re}°Re</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    flexWrap: 'wrap',
  }
});

export default Temperature;