import React from "react";

import Header from "../layout/Headers/Header.jsx";
import KeyboardType from "../layout/Keyboards/KeyboardType.jsx";

import "../../index.css";

export const TypePokemon = () => {
  return (
    <div className="mainContainer">
      <Header />
      <KeyboardType />
    </div>
  );
};
