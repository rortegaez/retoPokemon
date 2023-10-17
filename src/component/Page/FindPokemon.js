import React from "react";

//import layout
import KeyboardFind from "../layout/Keyboards/KeyboardFind";
import HeaderFind from "../layout/Keyboards/KeyboardFind";

const FindPokemon = () => {
  return (
    <div className="mainContainerKeyboards">
      <HeaderFind className="header" />
      <KeyboardFind className="keyboard" />
    </div>
  );
};

export default FindPokemon;
