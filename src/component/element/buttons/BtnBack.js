import React from "react";
import { NavLink } from "react-router-dom";

import "../../../index.css";

const BtnBack = () => {
  return (
    <div className='containerBtn'>
      <NavLink to="/">Back</NavLink>
    </div>
  );
};

export default BtnBack;
