import {useState} from 'react';

const conversionFactors = {
  mecanico: 1.341,
  electrico: 1.3405,
  metrico: 1.3596,
  caldera: 0.101942,
};

const usePowerConverter = () => {
  const [kilowatts, setKilowatts] = useState('');
  const [horsepower, setHorsepower] = useState('');
  const [conversionType, setConversionType] =
    useState<keyof typeof conversionFactors>('mecanico');
  const [result, setResult] = useState<string | null>(null);

  const convertKwToHp = () => {
    const kw = parseFloat(kilowatts);
    if (!isNaN(kw)) {
      const hp = kw * conversionFactors[conversionType];
      setResult(`${kw} kW = ${hp.toFixed(4)} HP (${conversionType})`);
    } else {
      setResult(null);
    }
  };

  const convertHpToKw = () => {
    const hp = parseFloat(horsepower);
    if (!isNaN(hp)) {
      const kw = hp / conversionFactors[conversionType];
      setResult(`${hp} HP (${conversionType}) = ${kw.toFixed(4)} kW`);
    } else {
      setResult(null);
    }
  };

  return {
    kilowatts,
    setKilowatts,
    horsepower,
    setHorsepower,
    conversionType,
    setConversionType,
    result,
    convertKwToHp,
    convertHpToKw,
  };
};

export default usePowerConverter;
