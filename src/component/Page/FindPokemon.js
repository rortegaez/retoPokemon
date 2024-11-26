import React from "react";

//import layout
import Header from "../layout/Headers/Header";
import KeyboardFind from "../layout/Keyboards/KeyboardFind";

// import css pages.scss
import '../../index.css';

const FindPokemon = () => {
  return (
    <div className="mainContainer">
      <Header />
      <KeyboardFind />
    </div>
  );
};

export default FindPokemon;