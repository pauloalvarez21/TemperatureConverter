import {useState} from 'react';

// Mapa de valores de los números romanos
const romanMap: {[key: string]: number} = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * Convierte un número arábigo a su equivalente en números romanos.
 * @param num Número arábigo a convertir (1 - 3999)
 * @returns Representación en números romanos o mensaje de error si está fuera de rango.
 */
const arabicToRoman = (num: number): string => {
  if (num <= 0 || num > 3999) return 'Fuera de rango';

  // Tabla de conversión de valores arábigos a romanos
  const romanNumerals: [number, string][] = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let result = '';
  for (const [value, symbol] of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
};

/**
 * Convierte un número romano a su equivalente en arábigo.
 * @param roman Cadena de caracteres representando un número romano
 * @returns Número arábigo o mensaje de error si la entrada no es válida.
 */
const romanToArabic = (roman: string): number | string => {
  let sum = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = romanMap[roman[i]];

    if (!currentValue) return 'Número inválido'; // Si el carácter no es válido, retorna error.

    // Si el valor actual es menor que el anterior, se resta (ej. IV = 4)
    if (currentValue < prevValue) {
      sum -= currentValue;
    } else {
      sum += currentValue;
    }
    prevValue = currentValue;
  }
  return sum;
};

/**
 * Hook personalizado para convertir entre números romanos y arábigos.
 * @returns Métodos para convertir y el resultado de la conversión.
 */
const useRomanConverter = () => {
  const [result, setResult] = useState<string | number>(''); // Estado para el resultado de la conversión

  /**
   * Convierte un número arábigo a romano y actualiza el estado del resultado.
   * @param num Cadena representando el número arábigo
   */
  const convertToRoman = (num: string) => {
    const parsedNum = parseInt(num);
    if (isNaN(parsedNum)) {
      setResult('Entrada inválida');
      return;
    }
    setResult(arabicToRoman(parsedNum));
  };

  /**
   * Convierte un número romano a arábigo y actualiza el estado del resultado.
   * @param roman Cadena representando el número romano
   */
  const convertToArabic = (roman: string) => {
    setResult(romanToArabic(roman.toUpperCase()));
  };

  return {result, convertToRoman, convertToArabic};
};

export default useRomanConverter;
