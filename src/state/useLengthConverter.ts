import {useState} from 'react';

// Definimos un tipo para las unidades de longitud
type LengthUnit = keyof typeof lengthUnits;

// Mapeo de conversiones a metros
const lengthUnits = {
  meters: 1,
  kilometers: 0.001,
  miles: 0.000621371,
  feet: 3.28084,
  inches: 39.3701,
  centimeters: 100,
  yards: 1.09361,
} as const;

const useLengthConverter = () => {
  // Estado para guardar las conversiones
  const [converted, setConverted] = useState<Record<LengthUnit, string>>({
    meters: '',
    kilometers: '',
    miles: '',
    feet: '',
    inches: '',
    centimeters: '',
    yards: '',
  });

  const convertLength = (value: string, fromUnit: LengthUnit) => {
    const length = parseFloat(value);
    if (isNaN(length) || !(fromUnit in lengthUnits)) {
      return;
    }

    const baseMeters = length / lengthUnits[fromUnit]; // Convertimos a metros
    const newConversions = {} as Record<LengthUnit, string>;

    (Object.keys(lengthUnits) as LengthUnit[]).forEach(unit => {
      newConversions[unit] = (baseMeters * lengthUnits[unit]).toFixed(4);
    });

    setConverted(newConversions);
  };

  return {converted, convertLength};
};

export default useLengthConverter;
