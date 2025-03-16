import { useState } from 'react';

const useTemperatureConverter = () => {
  // Estado para almacenar la temperatura ingresada y la escala seleccionada
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('C');
  const [converted, setConverted] = useState({
    C: '',
    F: '',
    K: '',
    R: '',
    Re: '',
  });

  const convertTemperature = () => {
    const temp = parseFloat(temperature);
    if (isNaN(temp)) {
      setConverted({ C: 'Inválido', F: 'Inválido', K: 'Inválido', R: 'Inválido', Re: 'Inválido' });
      return;
    }

    let celsius: number;

    switch (scale) {
      case 'C':
        celsius = temp;
        break;
      case 'F':
        celsius = (temp - 32) * 5 / 9;
        break;
      case 'K':
        celsius = temp - 273.15;
        break;
      case 'R':
        celsius = (temp - 491.67) * 5 / 9;
        break;
      case 'Re':
        celsius = temp * 5 / 4;
        break;
      default:
        setConverted({ C: 'Inválido', F: 'Inválido', K: 'Inválido', R: 'Inválido', Re: 'Inválido' });
        return;
    }

    setConverted({
      C: celsius.toFixed(2),
      F: (celsius * 9 / 5 + 32).toFixed(2),
      K: (celsius + 273.15).toFixed(2),
      R: ((celsius + 273.15) * 9 / 5).toFixed(2),
      Re: (celsius * 4 / 5).toFixed(2),
    });
  };

  return { temperature, setTemperature, scale, setScale, converted, convertTemperature };
};

export default useTemperatureConverter;
