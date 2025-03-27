import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import usePowerConverter from '../state/usePowerConverter';

type ConversionType = 'mecanico' | 'electrico' | 'metrico' | 'caldera';

const PowerConverter = () => {
  const {
    kilowatts,
    setKilowatts,
    horsepower,
    setHorsepower,
    conversionType,
    setConversionType,
    result,
    convertKwToHp,
    convertHpToKw,
  } = usePowerConverter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Potencia</Text>

      {/* Selector de tipo de HP */}
      <Text style={styles.label}>Tipo de Conversión:</Text>
      <Picker
        selectedValue={conversionType}
        style={styles.picker}
        onValueChange={(itemValue: ConversionType) =>
          setConversionType(itemValue)
        }>
        <Picker.Item label="Mecánico (1 kW = 1.341 HP)" value="mecanico" />
        <Picker.Item label="Eléctrico (1 kW = 1.3405 HP)" value="electrico" />
        <Picker.Item label="Métrico (1 kW = 1.3596 HP)" value="metrico" />
        <Picker.Item label="Caldera (1 kW = 0.101942 HP)" value="caldera" />
      </Picker>

      {/* kW a HP */}
      <Text style={styles.label}>Kilovatios (kW) a HP:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej: 100"
        value={kilowatts}
        onChangeText={setKilowatts}
      />
      <TouchableOpacity style={styles.button} onPress={convertKwToHp}>
        <Text style={styles.buttonText}>Convertir a HP</Text>
      </TouchableOpacity>

      {/* HP a kW */}
      <Text style={styles.label}>HP a Kilovatios (kW):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej: 134"
        value={horsepower}
        onChangeText={setHorsepower}
      />
      <TouchableOpacity style={styles.button} onPress={convertHpToKw}>
        <Text style={styles.buttonText}>Convertir a kW</Text>
      </TouchableOpacity>

      {result && <Text style={styles.result}>{result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AEEF',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
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
    marginBottom: 10,
    textAlign: 'center',
  },
  picker: {
    width: '80%',
    height: 55,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  result: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
  },
});

export default PowerConverter;
