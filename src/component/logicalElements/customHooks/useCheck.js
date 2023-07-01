import { useState, useEffect } from "react";

// lógica para saber si hemos ganado
export const useCheck = () => {
  const [checking, setChecking] = useState([]); // array de elemento por comprobar
  const [solved, setSolved] = useState([]); // donde se pasan los elementos de checking, ya ganadores
  const [number, setNumber] = useState(0); // para hacer la lógica para que solved solo tenga un número y no duplique los numberPok
  const [selectId, setSelectId] = useState([]); // añadimos los ident, para poder hacer el selected en cardfind

  const handleAddPokemon = (numberPok) => {
    setChecking((prevChecking) => [...prevChecking, numberPok]);
  };

  const handleAddIdPok = (ident) => {
    setSelectId((prevSelected) => [...prevSelected, ident]);
  };

  const solveding = () => {
    const newElement = number;
    setSolved([...solved, newElement]);
    setChecking([]);
    setNumber(0);
  };

  const check = (numberPok, ident) => {
    handleAddPokemon(numberPok);
    handleAddIdPok(ident);
    setNumber(numberPok);
  };

  const checkFinal = () => {
    if (checking[checking.length - 2] === checking[checking.length - 1]) {
      // console.log("winnnnn");
      solveding(number);
      setSelectId([]);
    } else {
      // console.log("looserrrr");
      setChecking([]);
      setSelectId([]);
    }
  };

  useEffect(() => {
    if (checking.length === 2) {
      checkFinal();
    }
  }, [checking]);

  return {
    check,
    solved,
    selectId,
  };
};
