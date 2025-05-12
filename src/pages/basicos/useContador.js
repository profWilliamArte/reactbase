// useContador.js
import { useState } from 'react';

export function useContador(initialValue = 0, max = null) {
  const [contador3, setContador3] = useState(initialValue);

  const incrementar = () => {
    if (max !== null && contador3 >= max) return;
    setContador3(prev => prev + 1);
  };

  const decrementar = () => {
    setContador3(prev => Math.max(0, prev - 1));
  };

  const resetear = () => setContador3(0);

  return { contador3, incrementar, decrementar, resetear };
}