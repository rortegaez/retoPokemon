import React from "react";

//import style
import "./buttons.css";

const ButtonRefresh = ({ severalUtility }) => {
  const utility = () => {
    severalUtility();
  };

  return (
    <div onClick={utility} className="containerBtn">
      <p className="nameBtn">Refesh</p>
    </div>
  );
};

export default ButtonRefresh;
