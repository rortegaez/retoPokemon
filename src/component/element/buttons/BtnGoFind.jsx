import React from "react";
import { NavLink } from "react-router-dom";

// import css en buttons
import "./buttons.css";

const BtnGoFind = () => {
  return (
    <>
      <NavLink to="findpokemon" className="containerBtn">
        <p className="nameBtn">Find</p>
      </NavLink>
    </>
  );
};

export default BtnGoFind;
