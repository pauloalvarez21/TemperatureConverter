import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useRomanConverter from '../state/useRomanConverter';
import Header from '../components/Header';

const RomanConverter = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const {result, convertToRoman, convertToArabic} = useRomanConverter();

  return (
    <View style={styles.container}>
      <Header
        title="Conversor de Números Romanos"
        showBack={true}
        navigation={navigation}
      />
      <Text style={styles.label}>Ingrese un número (arábigo o romano):</Text>
      <TextInput style={styles.input} value={input} onChangeText={setInput} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => convertToRoman(input)}>
          <Text style={styles.buttonText}>A Romano</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => convertToArabic(input)}>
          <Text style={styles.buttonText}>A Arábigo</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Resultado: {result}</Text>
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
});

export default RomanConverter;
