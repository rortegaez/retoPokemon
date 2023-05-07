// import componets
import HeaderWhats from "../../layout/HeaderWhats/index";
import Keyboard from "../../layout/Keyboard/index";

// import styles
import "./whatspokemon.css";
function WhatsPokemon() {
  return (
    <div className="mainContainer">
      <HeaderWhats className="header" />
      <Keyboard className="keyboard" />
    </div>
  );
}

export default WhatsPokemon;
