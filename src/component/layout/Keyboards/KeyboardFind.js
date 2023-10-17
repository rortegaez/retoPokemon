import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

// import customHooks
import { usePok } from "../../logicalElements/customHooks/usePok";
import { useCheck } from "../../logicalElements/customHooks/useCheck.js";
import { useSize } from "../../logicalElements/customHooks/useSize";

//import components
import ButtonRefreshFind from "../../../component/element/buttons/ButtonRefreshFind/";
import CardFind from "../../element/Cards/CardFind/index";
import BtnChangeFind from "../../../component/element/buttons/BtnChangeFind/index";
import BtnBack from "../../element/buttons/BtnBack";

//import styles
import styles from "../KeyboardFind/keyboardfind.module.css";

const KeyboardFind = () => {
  const { list, listPok, handleRefresh, fetchPoke } = usePok();
  const { check, solved, selectId, cleanSolved } = useCheck();
  const { sizefind, incrementFind, decrementFind } = useSize();

  const [chck, setChck] = useState(false);

  const severalUtility = () => {
    cleanSolved();
    handleRefresh();
    setChck(false);
  };

  useEffect(() => {
    fetchPoke(sizefind);
  }, [sizefind]);

  useEffect(() => {
    if (solved.length === sizefind) {
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
        <div className={styles.containerBtn}>
          <ButtonRefreshFind
            severalUtility={severalUtility}
            className={styles.btnRefresh}
          />
          <BtnChangeFind
            sizefind={sizefind}
            incrementFind={incrementFind}
            decrementFind={decrementFind}
            severalUtility={severalUtility}
          />
          <BtnBack />
        </div>
      </div>
    </div>
  );
};

export default KeyboardFind;
