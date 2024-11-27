import React from "react";
import { NavLink } from "react-router-dom";

// import css en buttons
import "./buttons.css";

const BtnGoWhats = () => {
  return (
    <>
      <NavLink to="findpokemon" className="containerBtn">
        <p className="nameBtn">Find</p>
      </NavLink>
    </>
  );
};

export default BtnGoWhats;
