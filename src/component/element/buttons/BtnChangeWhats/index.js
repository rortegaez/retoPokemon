import React from "react";

//import style
import style from "../change.module.css";

const BtnChangeWhats = ({ incrementWhat, decrementWhat, sizewhat }) => {
  return (
    <div className={style.mainContainer}>
      <div className={style.numberContainer}>{sizewhat}</div>
      <div className={style.keyboardNumber}>
        <button className={style.btnOperator} onClick={incrementWhat}>
          +
        </button>
        <button className={style.btnOperator} onClick={decrementWhat}>
          -
        </button>
      </div>
    </div>
  );
};

export default BtnChangeWhats;
