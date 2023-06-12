import React from "react";
import { NavLink } from "react-router-dom";

const BtnGoWhats = () => {
  return (
    <>
      <NavLink to="/whatspokemon">
        <button>Whats Pokemon</button>
      </NavLink>
    </>
  );
};

export default BtnGoWhats;
