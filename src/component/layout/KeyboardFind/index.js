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

  const fetchPoke = async () => {
    const pokes = await fetchPokFind(SIZEFIND);
    setList(pokes);
  };

  const checking = [];
  let seeing = false;

  const check = (ident) => {
    console.log(ident);
    if (!checking.includes(ident)) {
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
          />
        ))}
      </div>
      <ButtonRefresh />
    </div>
  );
};

export default KeyboardFind;
