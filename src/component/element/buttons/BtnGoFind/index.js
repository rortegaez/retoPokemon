import React from "react";
import { NavLink } from "react-router-dom";

const BtnGoWhats = () => {
  return (
    <>
      <NavLink to="findpokemon">
        <button>Find Pokemon</button>
      </NavLink>
    </>
  );
};

export default BtnGoWhats;
