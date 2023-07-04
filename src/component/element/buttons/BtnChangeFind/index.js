import React from "react";

//import style
import style from "../change.module.css";

const BtnChangeFind = ({
  incrementFind,
  decrementFind,
  sizefind,
  severalUtility,
}) => {
  const utilityIncrement = () => {
    severalUtility();
    incrementFind();
  };
  const utilityDecrement = () => {
    severalUtility();
    decrementFind();
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.numberContainer}>{sizefind}</div>
      <div className={style.keyboardNumber}>
        <button className={style.btnOperator} onClick={utilityIncrement}>
          +
        </button>
        <button className={style.btnOperator} onClick={utilityDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default BtnChangeFind;
