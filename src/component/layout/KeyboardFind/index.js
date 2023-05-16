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
  const [checking, setChecking] = useState(null);

  const fetchPoke = async () => {
    const pokes = await fetchPokFind(SIZEFIND);
    setList(pokes);
  };

  const checkSee = () => {
    setSee(!see);
  };

  const check = (ident) => {
    if (!see) {
      setChecking(ident);
    } else {
      if (checking === ident) {
        console.log("win");
      } else {
        setChecking(null);
        console.log("looser");
      }
    }
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
            props={item.data}
            classname={styles.cardKeyboardFind}
            check={check}
            see={checkSee}
          />
        ))}
      </div>
      <ButtonRefresh />
    </div>
  );
};

export default KeyboardFind;
