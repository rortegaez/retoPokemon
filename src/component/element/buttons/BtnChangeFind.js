import React from "react";

//import style
import "../../../index.css";

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
    <div className='mainContainerBtn'>
      <div className='numberContainer'>{sizefind}</div>
      <div className='keyboardNumber'>
        <button className='btnOperator' onClick={utilityIncrement}>
          +
        </button>
        <button className='btnOperator' onClick={utilityDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default BtnChangeFind;
