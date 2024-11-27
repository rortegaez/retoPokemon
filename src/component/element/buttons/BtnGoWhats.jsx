import React from "react";
import { NavLink } from "react-router-dom";

// import css en buttons
import "./buttons.css";

const BtnGoWhats = () => {
  return (
    <>
      <NavLink to='/whatspokemon' className='containerBtn'>
        <p className="nameBtn">Whats</p>
      </NavLink>
    </>
  );
};

export default BtnGoWhats;
