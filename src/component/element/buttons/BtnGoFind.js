import React from "react";
import { NavLink } from "react-router-dom";

// import css en buttons
import "../../../index.css";

const BtnGoWhats = () => {
  return (
    <>
      <div className='containerBtn'>
        <NavLink to="findpokemon">Find Pokemon</NavLink>
      </div>
    </>
  );
};

export default BtnGoWhats;
