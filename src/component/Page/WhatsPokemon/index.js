// import componets
import HeaderWhats from "../../layout/Headers/HeaderWhats/index";
import KeyboardWhats from "../../layout/KeyboardWhats/index";

// import styles
import "./whatspokemon.css";
function WhatsPokemon() {
  return (
    <div className="mainContainer">
      <HeaderWhats className="header" />
      <KeyboardWhats className="keyboard" />
    </div>
  );
}

export default WhatsPokemon;
