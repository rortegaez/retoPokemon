// Vamos a crear un contador

import { useState } from "react";

export const useCount = () => {
  let [number, setNumber] = useState(0);

  const attempts = () => {
    setNumber = number + 1;
  };

  const cleanAttempts = () => {
    setNumber = 0;
  };

  return {
    number,
    attempts,
    cleanAttempts,
  };
};
