import React from "react";

//import style
import style from "../button.module.css";

const ButtonRefresh = ({ severalUtility }) => {
  const utility = () => {
    severalUtility();
  };

  return (
    <div className={style.containerBtn}>
      <div onClick={utility}>Refresh</div>
    </div>
  );
};

export default ButtonRefresh;
