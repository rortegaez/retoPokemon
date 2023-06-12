import React from "react";
import { NavLink } from "react-router-dom";

import style from "../button.module.css";

const BtnGoWhats = () => {
  return (
    <>
      <div className={style.containerBtn}>
        <NavLink to="findpokemon">Find Pokemon</NavLink>
      </div>
    </>
  );
};

export default BtnGoWhats;
