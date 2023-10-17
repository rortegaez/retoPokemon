import React from "react";
import { NavLink } from "react-router-dom";

import "../../../index.css";

const BtnGoWhats = () => {
  return (
    <>
      <div className='containerBtn'>
        <NavLink to="/whatspokemon">Whats Pokemon</NavLink>
      </div>
    </>
  );
};

export default BtnGoWhats;
