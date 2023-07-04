import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

// import customHooks
import { usePok } from "../../logicalElements/customHooks/usePok";
import { useCheck } from "../../logicalElements/customHooks/useCheck.js";

//import constante
import { SIZEFIND } from "../../constans";

//import components
import ButtonRefresh from "../../element/buttons/ButtonRefresh/index.jsx";
import CardFind from "../../element/Cards/CardFind/index";

//import styles
import styles from "./keyboardfind.module.css";

const KeyboardFind = () => {
  const { list, listPok, handleRefresh } = usePok();
  const { check, solved, selectId, cleanSolved } = useCheck();

  const [chck, setChck] = useState(false);

  const utility = () => {
    handleRefresh();
    cleanSolved();
    setChck(false);
  };

  useEffect(() => {
    if (solved.length === SIZEFIND) {
      setChck(true);
    }
  }, [solved]);

  //----------------------------------------------

  return (
    <div>
      {chck && <Confetti />}
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
              listPok={listPok}
            />
          ))}
        </div>
        <button onClick={utility}>Cambio</button>
        <ButtonRefresh handleRefresh={utility} className={styles.btnRefresh} />
      </div>
    </div>
  );
};

export default KeyboardFind;
