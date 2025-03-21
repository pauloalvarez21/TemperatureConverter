import {useState} from 'react';

type QuadraticSolutions =
  | {
      root1: number;
      root2: number;
      hasRealSolutions: true;
    }
  | {
      message: string;
      hasRealSolutions: false;
    };

const useQuadraticSolver = () => {
  const [solutions, setSolutions] = useState<QuadraticSolutions | null>(null);

  const solveQuadratic = (a: number, b: number, c: number) => {
    if (a === 0) {
      setSolutions({
        message: 'No es una ecuación cuadrática',
        hasRealSolutions: false,
      });
      return;
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setSolutions({root1, root2, hasRealSolutions: true});
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      setSolutions({root1: root, root2: root, hasRealSolutions: true});
    } else {
      setSolutions({
        message: 'No tiene soluciones reales',
        hasRealSolutions: false,
      });
    }
  };

  return {solutions, solveQuadratic};
};

export default useQuadraticSolver;
