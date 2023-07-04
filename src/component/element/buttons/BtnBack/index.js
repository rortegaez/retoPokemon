import React from "react";
import { NavLink } from "react-router-dom";

import style from "../button.module.css";

const BtnBack = () => {
  return (
    <div className={style.containerBtn}>
      <NavLink to="/">Back</NavLink>
    </div>
  );
};

export default BtnBack;
