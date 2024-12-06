import React from "react";
import { NavLink } from "react-router-dom";

import "./buttons.css";

const BtnGoType = () => {
  return (
    <>
      <NavLink to="typepokemon" className="containerBtn">
        <p className="nameBtn">Type</p>
      </NavLink>
    </>
  );
};

export default BtnGoType;
