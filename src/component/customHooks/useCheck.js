import { useState, useEffect } from "react";

// lógica para saber si hemos ganado
export const useCheck = () => {
  const [checking, setChecking] = useState([]); // array de elemento por comprobar
  const [solved, setSolved] = useState([]); // donde se pasan los elementos de checking, ya ganadores
  const [number, setNumber] = useState(0);

  const handleAddPokemon = (numberPok) => {
    setChecking((prevChecking) => [...prevChecking, numberPok]);
  };

  const solveding = () => {
    const newElement = number;
    setSolved([...solved, newElement]);
    setChecking([]);
    setNumber(0);
  };

  const check = (numberPok) => {
    handleAddPokemon(numberPok);
    setNumber(numberPok);
  };

  const checkFinal = () => {
    if (checking[checking.length - 2] === checking[checking.length - 1]) {
      console.log("winnnnn");
      solveding(number);
    } else {
      console.log("looserrrr");
      setChecking([]);
    }
  };

  useEffect(() => {
    if (checking.length === 2) {
      checkFinal();
    }
  }, [checking]);

  useEffect(() => {
    console.log("solve usecuston", solved);
  }, [solved]);

  return {
    check,
    solved,
  };
};
