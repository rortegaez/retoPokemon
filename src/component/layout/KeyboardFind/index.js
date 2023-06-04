import React from "react";
import { useState } from "react";

// import customHooks
import { usePok } from "../../customHooks/usePok.js";

//import constante
import { SIZEFIND } from "../../constans.js";

//import components
import ButtonRefresh from "../../buttons/ButtonRefresh/index.jsx";
import CardFind from "../../element/CardFind/index.js";

//import styles
import styles from "./keyboardfind.module.css";

const KeyboardFind = () => {
  const [checking, setChecking] = useState([]); //checkeando si se ha acertado
  const [select, setSelect] = useState([]); //añadimos los index, que pulsamos
  const [number, setNumber] = useState(0); //añadimos el number del pokemon para poder hacer el include en el checking
  const [win, setWin] = useState(false); // para cambiar el estado, si se llega a ser ganador
  const [winner, setWinner] = useState([]); // donde guardamos los elementos que deben de quedar sin poder usar
  const { list } = usePok();

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

  //--------------------------------------------

  // lógica para comprobar si se gana y victoria final

  const check = (numberPok) => {
    if (checking.length === 0) {
      handleAddPokemon(numberPok);
      setNumber(numberPok);
    } else if (checking.length % 2 !== 0) {
      if (checking.includes(numberPok)) {
        console.log("win");
        setWin(!win);
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
  };

  //--------------------------------------------------

  // logicá para que lo elementos cambien cuando se esta eligiendo el par

  const handleRemoveIndex = () => {
    setSelect([]);
  };

  const handleAddIndex = async (ident) => {
    const newIdent = ident;
    setSelect([...select, newIdent]);
  };

  const changeIndex = async () => {
    let numberWin = [...select];
    setWinner([...winner, numberWin]);
  };

  const checkIndex = (ident) => {
    console.log("win", win);
    if (select.length === 0) {
      handleAddIndex(ident);
    } else if (select.length !== 0) {
      handleAddIndex(ident);
      if (win === true) {
        console.log("dentro de win", win);
        changeIndex();
        setWin(!win);
        setTimeout(handleRemoveIndex, 500);
      }
    }
  };

  //----------------------------------------------

  return (
    <div>
      <h1>KeyboardFind</h1>
      <div className={styles.mainKeyboardFind}>
        {list.map((item, index) => (
          <CardFind
            key={index}
            ident={index}
            props={item.data} //todos los datos de cada pokemon
            classname={styles.cardKeyboardFind}
            check={check} //función para comprobar si el pokemon, ya esta seleccionado y logica de ganar
            checking={checking} // para comprobar si hay elementos igual a numberPok
            select={select}
            checkIndex={checkIndex}
          />
        ))}
      </div>
      <ButtonRefresh />
    </div>
  );
};

export default KeyboardFind;
