import React from "react";

//import css en buttons
import "../../../index.css"

const BtnChangeWhats = ({ incrementWhat, decrementWhat, sizewhat }) => {
  return (
    <div className='mainContainerBtn'>
      <div className='numberContainer'>{sizewhat}</div>
      <div className='keyboardNumber'>
        <button className='btnOperator' onClick={incrementWhat}>
          +
        </button>
        <button className='btnOperator' onClick={decrementWhat}>
          -
        </button>
      </div>
    </div>
  );
};

export default BtnChangeWhats;
