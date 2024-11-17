import React from "react";
import { NavLink } from "react-router-dom";

// import css en buttons
import "./buttons.css";

const BtnGoWhats = () => {
  return (
    <>
      <div className='containerBtn'>
        <NavLink to="/whatspokemon" className='nameBtn'>Whats Pokemon</NavLink>
      </div>
    </>
  );
};

export default BtnGoWhats;
