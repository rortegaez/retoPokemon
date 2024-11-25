import React from "react";

//import css en buttons
import "./buttons.css";

const BtnChangeWhats = ({ incrementWhat, decrementWhat, sizewhat }) => {
  return (
    <div className='containerBtn'>
      <div className='numberContainer'>{sizewhat}</div>
      <div className='keyboardNumber'>
        <button className='btnOperator' onClick={decrementWhat}>
          -
        </button>
        <button className='btnOperator' onClick={incrementWhat}>
          +
        </button>
      </div>
    </div>
  );
};

export default BtnChangeWhats;
