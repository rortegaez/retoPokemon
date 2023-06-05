import React from "react";
import { useState } from "react";

// import customHooks
import { usePok } from "../../customHooks/usePok.js";
import { useCheck } from "../../customHooks/useCheck.js";

//import constante
import { SIZEFIND } from "../../constans.js";

//import components
import ButtonRefresh from "../../buttons/ButtonRefresh/index.jsx";
import CardFind from "../../element/CardFind/index.js";

//import styles
import styles from "./keyboardfind.module.css";

const KeyboardFind = () => {
  const [select, setSelect] = useState([]); //añadimos los index, que pulsamos
  const [win, setWin] = useState(false); // para cambiar el estado, si se llega a ser ganador
  const [winner, setWinner] = useState([]); // donde guardamos los elementos que deben de quedar sin poder usar
  const { list } = usePok();
  const { check } = useCheck();

  //gestión array para checking

  //--------------------------------------------

  // lógica para comprobar si se gana y victoria final

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
            select={select}
            checkIndex={checkIndex}
            check={check}
          />
        ))}
      </div>
      <ButtonRefresh />
    </div>
  );
};

export default KeyboardFind;
