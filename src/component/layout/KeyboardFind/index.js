import React from "react";

// import customHooks
import { usePok } from "../../logicalElements/customHooks/usePok";
import { useCheck } from "../../logicalElements/customHooks/useCheck.js";

//import constante

//import components
import ButtonRefresh from "../../element/buttons/ButtonRefresh/index.jsx";
import CardFind from "../../element/Cards/CardFind/index";

//import styles
import styles from "./keyboardfind.module.css";

const KeyboardFind = () => {
  const { list } = usePok();
  const { check, solved, selectId } = useCheck();

  //----------------------------------------------

  return (
    <div>
      <h1>KeyboardFind</h1>
      <div className={styles.mainContainer}>
        <div className={styles.keyboardFind}>
          {list.map((item, index) => (
            <CardFind
              key={index}
              ident={index}
              props={item.data} //todos los datos de cada pokemon
              classname={styles.cardKeyboardFind}
              check={check}
              solved={solved}
              selectId={selectId}
            />
          ))}
        </div>
        <ButtonRefresh className={styles.btnRefresh} />
      </div>
    </div>
  );
};

export default KeyboardFind;
