import React from 'react';
import {View} from 'react-native';
import Svg, {Line, Path, Circle} from 'react-native-svg';

interface QuadraticGraphProps {
  a: number;
  b: number;
  c: number;
  roots?: {root1?: number; root2?: number; hasRealSolutions: boolean};
}

const QuadraticGraph: React.FC<QuadraticGraphProps> = ({a, b, c, roots}) => {
  if (a === 0) {
    return null;
  } // No es una ecuación cuadrática

  // Generar puntos de la parábola
  const points = [];
  for (let x = -10; x <= 10; x += 0.5) {
    const y = a * x * x + b * x + c;
    points.push({x, y});
  }

  // Convertir puntos a coordenadas SVG
  const scaleX = 20; // Escala horizontal
  const scaleY = 20; // Escala vertical
  const offsetX = 200; // Centro en X
  const offsetY = 200; // Centro en Y

  const pathData = points
    .map((p, index) => {
      const x = offsetX + p.x * scaleX;
      const y = offsetY - p.y * scaleY;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  return (
    <View style={{alignItems: 'center', marginTop: 20}}>
      <Svg width={400} height={400}>
        {/* Ejes X e Y */}
        <Line
          x1="0"
          y1={offsetY}
          x2="400"
          y2={offsetY}
          stroke="black"
          strokeWidth="2"
        />
        <Line
          x1={offsetX}
          y1="0"
          x2={offsetX}
          y2="400"
          stroke="black"
          strokeWidth="2"
        />

        {/* Graficar parábola */}
        <Path d={pathData} fill="none" stroke="blue" strokeWidth="2" />

        {/* Dibujar las raíces si existen */}
        {roots?.hasRealSolutions &&
          roots.root1 !== undefined &&
          roots.root2 !== undefined && (
            <>
              <Circle
                cx={offsetX + roots.root1 * scaleX}
                cy={offsetY}
                r="5"
                fill="red"
              />
              <Circle
                cx={offsetX + roots.root2 * scaleX}
                cy={offsetY}
                r="5"
                fill="red"
              />
            </>
          )}
      </Svg>
    </View>
  );
};

export default QuadraticGraph;
