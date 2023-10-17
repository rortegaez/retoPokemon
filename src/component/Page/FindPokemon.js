import React from "react";

//import layout
import KeyboardFind from "../layout/Keyboards/KeyboardFind";
import HeaderFind from "../layout/Headers/HeaderFind";

// import css pages.scss
import '../../index.css';

const FindPokemon = () => {
  return (
    <div className="mainContainer">
      <HeaderFind />
      <KeyboardFind />
    </div>
  );
};

export default FindPokemon;
