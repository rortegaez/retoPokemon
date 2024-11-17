import React from "react";
import { NavLink } from "react-router-dom";

// import css en buttons
import "./buttons.css";

const BtnGoWhats = () => {
  return (
    <>
      <div className='containerBtn'>
        <NavLink to="findpokemon" className='nameBtn'>Find Pokemon</NavLink>
      </div>
    </>
  );
};

export default BtnGoWhats;
