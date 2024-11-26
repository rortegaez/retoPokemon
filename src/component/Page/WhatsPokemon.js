// import componets
import Header from "../layout/Headers/Header";
import KeyboardWhats from "../layout/Keyboards/KeyboardWhats";

// import styles pages.scss
import "../../index.css";

function WhatsPokemon() {
  return (
    <div className="mainContainer">
      <Header />
      <KeyboardWhats />
    </div>
  );
}

export default WhatsPokemon;
