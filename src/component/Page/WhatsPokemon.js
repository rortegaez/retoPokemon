// import componets
import HeaderWhats from "../layout/Headers/HeaderWhats";
import KeyboardWhats from "../layout/Keyboards/KeyboardWhats";

// import styles pages.scss
import "../../index.css";

function WhatsPokemon() {
  return (
    <div className="mainContainer">
      <HeaderWhats />
      <KeyboardWhats />
    </div>
  );
}

export default WhatsPokemon;
