import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useLengthConverter from '../state/useLengthConverter';
import Header from '../components/Header';

// Definir el tipo de unidad de longitud
type LengthUnit = 'meters' | 'kilometers' | 'miles' | 'feet' | 'inches' | 'centimeters' | 'yards';

const LengthConverter = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const [unit, setUnit] = useState<LengthUnit>('meters');
  const { converted, convertLength } = useLengthConverter();

  return (
    <View style={styles.container}>
      <Header title="Conversor de Longitud" showBack={true} navigation={navigation} />
      <Text style={styles.label}>Ingrese la cantidad:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
      />
      <View style={styles.buttonContainer}>
        {(['meters', 'kilometers', 'miles', 'feet', 'inches', 'centimeters', 'yards'] as LengthUnit[]).map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.button, unit === item && styles.selectedButton]}
            onPress={() => setUnit(item)}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.convertButton}
        onPress={() => convertLength(input, unit)} // ✅ Llamar la función correctamente
      >
        <Text style={styles.buttonText}>Convertir</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Resultados:</Text>
      <Text style={styles.result}>Metros: {converted.meters} m</Text>
      <Text style={styles.result}>Kilómetros: {converted.kilometers} km</Text>
      <Text style={styles.result}>Millas: {converted.miles} mi</Text>
      <Text style={styles.result}>Pies: {converted.feet} ft</Text>
      <Text style={styles.result}>Pulgadas: {converted.inches} in</Text>
      <Text style={styles.result}>Yardas: {converted.yards} yd</Text>
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
    shadowOffset: { width: 0, height: 4 },
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
    shadowOffset: { width: 0, height: 4 },
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

export default LengthConverter;
