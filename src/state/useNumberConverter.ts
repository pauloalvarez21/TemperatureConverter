import { useState } from 'react';

const convertToBinary = (num: number): string => num.toString(2);
const convertToOctal = (num: number): string => num.toString(8);
const convertToHex = (num: number): string => num.toString(16).toUpperCase();

interface ConversionResult {
  binary: string;
  octal: string;
  hex: string;
}

const useNumberConverter = () => {
  const [result, setResult] = useState<ConversionResult>({ binary: '', octal: '', hex: '' });

  const convertNumber = (input: string) => {
    const num = parseInt(input, 10);
    if (isNaN(num) || num < 0) {
      setResult({ binary: 'Inválido', octal: 'Inválido', hex: 'Inválido' });
      return;
    }

    setResult({
      binary: convertToBinary(num),
      octal: convertToOctal(num),
      hex: convertToHex(num),
    });
  };

  return { result, convertNumber };
};

export default useNumberConverter;
