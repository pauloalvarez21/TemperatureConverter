import { useState } from 'react';

const useTemperatureConverter = (temperature: string, scale: string) => {
  // Estado para almacenar las temperaturas convertidas en diferentes escalas
  const [converted, setConverted] = useState({ C: '', F: '', K: '', R: '', Re: '' });

  const convertTemperature = () => {
    // Convertimos la entrada a número flotante
    const temp = parseFloat(temperature);
    if (isNaN(temp)) return; // Si no es un número, salimos de la función

    let celsius, fahrenheit, kelvin, rankine, reaumur;

    // Determinamos la conversión según la escala seleccionada
    switch (scale) {
      case 'C': // Convertimos desde Celsius
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
        rankine = (temp + 273.15) * 9/5;
        reaumur = temp * 4/5;
        break;
      case 'F': // Convertimos desde Fahrenheit
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;
        rankine = temp + 459.67;
        reaumur = celsius * 4/5;
        break;
      case 'K': // Convertimos desde Kelvin
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temp;
        rankine = temp * 9/5;
        reaumur = celsius * 4/5;
        break;
      case 'R': // Convertimos desde Rankine
        celsius = (temp - 491.67) * 5/9;
        fahrenheit = temp - 459.67;
        kelvin = temp * 5/9;
        rankine = temp;
        reaumur = celsius * 4/5;
        break;
      case 'Re': // Convertimos desde Réaumur
        celsius = temp * 5/4;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
        rankine = (celsius + 273.15) * 9/5;
        reaumur = temp;
        break;
      default:
        return;
    }

    // Almacenamos los resultados con 2 decimales de precisión
    setConverted({
      C: celsius.toFixed(2),
      F: fahrenheit.toFixed(2),
      K: kelvin.toFixed(2),
      R: rankine.toFixed(2),
      Re: reaumur.toFixed(2),
    });
  };

  // Retornamos el estado y la función de conversión
  return { converted, convertTemperature };
};

export default useTemperatureConverter;