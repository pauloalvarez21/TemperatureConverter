import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useQuadraticSolver from '../state/useQuadraticSolver';
import Header from '../components/Header';
import QuadraticGraph from './QuadraticGraph';

const QuadraticSolver = () => {
  const navigation = useNavigation();
  const {solutions, solveQuadratic} = useQuadraticSolver();

  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');

  const safeParse = (value: string) => {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? 0 : parsed;
  };

  const handleSolve = () => {
    solveQuadratic(parseFloat(a), parseFloat(b), parseFloat(c));
  };

  useEffect(() => {
    console.log('Estado de solutions:', solutions);
  }, [solutions]);

  return (
    <View style={styles.container}>
      <Header
        title="Resolver Ecuaciones Cuadráticas"
        showBack={true}
        navigation={navigation}
      />

      <Text style={styles.label}>Ingrese los coeficientes (a, b, c):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="a"
        value={a}
        onChangeText={setA}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="b"
        value={b}
        onChangeText={setB}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="c"
        value={c}
        onChangeText={setC}
      />

      <TouchableOpacity style={styles.solveButton} onPress={handleSolve}>
        <Text style={styles.buttonText}>Resolver</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Resultado:</Text>
      {solutions ? (
        solutions.hasRealSolutions ? (
          <Text style={styles.result}>
            {solutions.root1 === solutions.root2
              ? `Raíz doble: ${solutions.root1.toFixed(2)}`
              : `Raíz 1: ${solutions.root1.toFixed(
                  2,
                )}\nRaíz 2: ${solutions.root2.toFixed(2)}`}
          </Text>
        ) : (
          <Text style={styles.result}>{solutions.message}</Text>
        )
      ) : (
        <Text style={styles.result}>
          Ingrese los valores y presione Resolver.
        </Text>
      )}

      {/* Graficar la ecuación cuadrática */}
      <QuadraticGraph
        a={safeParse(a)}
        b={safeParse(b)}
        c={safeParse(c)}
        roots={
          solutions && solutions.hasRealSolutions
            ? solutions
            : {root1: 0, root2: 0, hasRealSolutions: false}
        }
      />
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
    marginBottom: 10,
    alignSelf: 'center',
  },
  solveButton: {
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
    textAlign: 'center',
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
    marginTop: 10,
  },
});

export default QuadraticSolver;
