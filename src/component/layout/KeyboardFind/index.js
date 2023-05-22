import React from "react";
import { useEffect, useState } from "react";

//import constante
import { SIZEFIND } from "../../constans.js";

//import components
import ButtonRefresh from "../../buttons/ButtonRefresh/index.jsx";
import fetchPokFind from "../../logic/fetchPokFind.js";
import CardFind from "../../element/CardFind/index.js";

//import styles
import styles from "./keyboardfind.module.css";

const KeyboardFind = () => {
  const [list, setList] = useState([]);
  const [checking, setChecking] = useState([]);
  const [idx, setIdx] = useState([]);
  const [number, setNumber] = useState(0);

  //gestión array para checking
  const handleAddPokemon = async (numberPok) => {
    const newPok = numberPok;
    setChecking([...checking, newPok]);
  };

  const handleRemovePok = async (numberPok) => {
    const newPok = checking.filter((pok) => pok !== numberPok);
    setChecking(newPok);
    const segundPok = checking.filter((pok) => pok !== number);
    setChecking(segundPok);
  };

  // console.log("handle checking", checking);
  // console.log("handle number", number);

  //--------------------------------------------

  const fetchPoke = async () => {
    const pokes = await fetchPokFind(SIZEFIND);
    setList(pokes);
  };

  const check = (numberPok) => {
    if (checking.length === 0) {
      handleAddPokemon(numberPok);
      setNumber(numberPok);
    } else if (checking.length % 2 !== 0) {
      if (checking.includes(numberPok)) {
        console.log("win");
        handleAddPokemon(numberPok);
        setNumber(null);
      } else {
        handleRemovePok(numberPok);
        setNumber(null);
        console.log("looser");
      }
    } else {
      handleAddPokemon(numberPok);
      setNumber(numberPok);
      console.log("seguir");
    }

    if (checking.length + 1 === SIZEFIND * 2) {
      console.log("The Winner");
      setChecking(null);
    }
    console.log(checking.length);
    console.log(SIZEFIND * 2);
  };

  useEffect(() => {
    fetchPoke();
  }, []);

  return (
    <div>
      <h1>KeyboardFind</h1>
      <div className={styles.mainKeyboardFind}>
        {list.map((item, index) => (
          <CardFind
            key={index}
            id={index}
            props={item.data} //todos los datos de cada pokemon
            classname={styles.cardKeyboardFind}
            check={check} //función para comprobar si el pokemon, ya esta seleccionado y logica de ganar
            checking={checking} // para comprobar si hay elementos igual a numberPok
            idx={idx} //para tener el número único de id
          />
        ))}
      </div>
      <ButtonRefresh />
    </div>
  );
};

export default KeyboardFind;
