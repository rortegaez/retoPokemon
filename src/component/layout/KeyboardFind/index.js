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
  const [see, setSee] = useState(false);
  // const [checking, setChecking] = useState(null);
  const [checking, setChecking] = useState([]);

  const fetchPoke = async () => {
    const pokes = await fetchPokFind(SIZEFIND);
    setList(pokes);
  };

  const checkSee = () => {
    setSee(!see);
  };

  let pruebra = [];

  const check = (ident) => {
    if (!see) {
      pruebra = [...pruebra, ident];
      setChecking(pruebra);
    } else {
      if (checking.includes(ident)) {
        console.log("win");
      } else {
        pruebra.pop();
        setChecking(pruebra);
        console.log("looser");
      }
    }
    console.log("check", checking);
  };

  /* const handle = () => {
    console.log("boton", checking.includes(335));
  }; */

  /*   const check = (ident) => {
    console.log("see", see);
    console.log("check1", checking);
    if (!see) {
      setChecking(ident);
      console.log("falso");
    } else {
      console.log("dentro", checking);
      if (checking === ident) {
        console.log("win");
      } else {
        setChecking(null);
        console.log("looser");
      }
    }
    console.log("check", checking);
  }; */

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
            props={item.data}
            classname={styles.cardKeyboardFind}
            check={check}
            see={checkSee}
          />
        ))}
      </div>
      {/* <button onClick={handle}>Prueba</button> */}
      <ButtonRefresh />
    </div>
  );
};

export default KeyboardFind;
