// import componets
import Header from "../../layout/Header/index";
import Keyboard from "../../layout/Keyboard/index";

// import styles
import "./whatspokemon.css";
function WhatsPokemon() {
  return (
    <div className="mainContainer">
      <Header className="header" />
      <Keyboard className="keyboard" />
    </div>
  );
}

export default WhatsPokemon;
