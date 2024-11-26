import React from "react";

//import style
import './buttons.css';

const ButtonRefresh = ({ severalUtility }) => {
  const utility = () => {
    severalUtility();
  };

  return (
    <div onClick={utility} className="containerBtn">
      <span className='nameBtn'>Refesh</span>
    </div>
  );
};

export default ButtonRefresh;
