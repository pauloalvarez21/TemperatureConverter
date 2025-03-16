import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useMayanConverter from '../state/useMayanConverter';
import Header from '../components/Header';

const MayaConverter = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const { result: mayanResult, convertToMayan } = useMayanConverter();

  return (
    <View style={styles.container}>
      <Header title="Conversor a Números Mayas" showBack={true} navigation={navigation} />
      <Text style={styles.label}>Ingrese un número arábigo:</Text>
      <TextInput style={styles.input} value={input} onChangeText={setInput} keyboardType="numeric" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => convertToMayan(input)}>
          <Text style={styles.buttonText}>Convertir a Maya</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Resultado Maya</Text>
      <Text style={styles.title}>{mayanResult}</Text>
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
});

export default MayaConverter;
