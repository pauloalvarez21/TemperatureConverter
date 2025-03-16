import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useNumberConverter from '../state/useNumberConverter';
import Header from '../components/Header';

const NumberConverter = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const {result, convertNumber} = useNumberConverter();

  return (
    <View style={styles.container}>
      <Header
        title="Conversor de Números"
        showBack={true}
        navigation={navigation}
      />

      <Text style={styles.label}>Ingrese un número arábigo:</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => convertNumber(input)}>
        <Text style={styles.buttonText}>Convertir</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Resultados:</Text>
      <Text style={styles.result}>Binario: {result.binary}</Text>
      <Text style={styles.result}>Octal: {result.octal}</Text>
      <Text style={styles.result}>Hexadecimal: {result.hex}</Text>
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
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 20,
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
    marginBottom: 5,
  },
});

export default NumberConverter;
