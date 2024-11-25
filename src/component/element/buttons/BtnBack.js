import React from "react";
import { NavLink } from "react-router-dom";

import "./buttons.css";

const BtnBack = () => {
  return (
    <NavLink to='/' className='containerBtn'>
      <p className="nameBtn">Back</p>
    </NavLink>
  );
};

export default BtnBack;
