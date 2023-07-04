import React from "react";
import { NavLink } from "react-router-dom";

import style from "../button.module.css";

const BtnGoWhats = () => {
  return (
    <>
      <div className={style.containerBtn}>
        <NavLink to="/whatspokemon">Whats Pokemon</NavLink>
      </div>
    </>
  );
};

export default BtnGoWhats;
