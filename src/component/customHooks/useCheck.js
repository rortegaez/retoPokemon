import { useState, useEffect } from "react";

// lógica para saber si hemos ganado
export const useCheck = () => {
  // pendiente de crear campo para ver si hay elementos, ya ganadores, no consigo configurar el useState para win, se podría usar dependiente de solved, que es donde se guardan los elementos que ya han sido win
  const [checking, setChecking] = useState([]); // array de elemento por comprobar
  const [solved, setSolved] = useState([]); // donde se pasan los elementos de checking, ya ganadores

  const handleAddPokemon = (numberPok) => {
    setChecking((prevChecking) => [...prevChecking, numberPok]);
  };

  /* const handleRemovePok = (numberPok) => {
    const newPok = checking.filter((pok) => pok !== numberPok);
    setChecking(newPok);
    const segundPok = checking.filter((pok) => pok !== number);
    setChecking(segundPok);
  }; */

  const solveding = () => {
    const newElement = [...checking];
    setSolved([...solved, newElement]);
    setChecking([]);
  };

  const check = (numberPok) => {
    handleAddPokemon(numberPok);
  };

  const checkFinal = () => {
    if (checking[checking.length - 2] === checking[checking.length - 1]) {
      console.log("winnnnn");
      solveding();
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

  return {
    check,
  };
};
