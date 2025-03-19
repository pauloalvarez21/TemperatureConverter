import {useState} from 'react';

// Definimos el tipo de unidades de presión
type PressureUnit = 'pascales' | 'bares' | 'atm' | 'mmHg' | 'psi';

// Factores de conversión a Pascales (Pa)
const pressureUnits: Record<PressureUnit, number> = {
  pascales: 1,
  bares: 100000,
  atm: 101325,
  mmHg: 133.322,
  psi: 6894.76,
};

const usePressureConverter = () => {
  const [converted, setConverted] = useState<Record<PressureUnit, string>>({
    pascales: '',
    bares: '',
    atm: '',
    mmHg: '',
    psi: '',
  });

  const convertPressure = (value: string, fromUnit: PressureUnit) => {
    const pressure = parseFloat(value);
    if (isNaN(pressure) || !(fromUnit in pressureUnits)) {
      return;
    }

    const basePascales = pressure * pressureUnits[fromUnit]; // Convertimos a Pascales
    const newConversions: Record<PressureUnit, string> = {} as Record<
      PressureUnit,
      string
    >;

    (Object.keys(pressureUnits) as PressureUnit[]).forEach(unit => {
      newConversions[unit] = (basePascales / pressureUnits[unit]).toFixed(4);
    });

    setConverted(newConversions);
  };

  return {converted, convertPressure};
};

export default usePressureConverter;
