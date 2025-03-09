import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import useRomanConverter from '../state/useRomanConverter';

const RomanConverter: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const { result, convertToRoman, convertToArabic } = useRomanConverter();

  return (
    <View style={styles.container}>
      <Text>Ingrese un número (arábigo o romano):</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
      />
      <View style={styles.buttonContainer}>
        <Button title="A Romano" onPress={() => convertToRoman(input)} />
        <Button title="A Arábigo" onPress={() => convertToArabic(input)} />
      </View>
      <Text>Resultado: {result}</Text>
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
  },
});

export default RomanConverter;
