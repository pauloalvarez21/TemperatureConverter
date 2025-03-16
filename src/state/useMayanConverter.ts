import { useState } from 'react';

const MAYAN_ZERO = '𝍠';

const convertToMayan = (num: number): string => {
  if (isNaN(num) || num < 0) {
    return 'Número inválido';
  }

  let number = Math.floor(num);
  const mayanDigits: string[] = [];

  while (number > 0) {
    let remainder = number % 20;
    number = Math.floor(number / 20);

    let mayanSymbol = remainder === 0 ? MAYAN_ZERO : '';
    let bars = Math.floor(remainder / 5);
    let dots = remainder % 5;

    mayanSymbol += '—'.repeat(bars) + '●'.repeat(dots);
    mayanDigits.unshift(mayanSymbol);
  }

  return mayanDigits.length ? mayanDigits.join('\n') : MAYAN_ZERO;
};

const useMayanConverter = () => {
  const [result, setResult] = useState<string>('');

  const handleConvertToMayan = (input: string) => {
    const num = parseInt(input, 10);
    setResult(convertToMayan(num));
  };

  return { result, convertToMayan: handleConvertToMayan };
};

export default useMayanConverter;
