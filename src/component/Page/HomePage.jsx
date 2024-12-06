import React from "react";
// import logo from '../../../public/pokeapi.png'

import BtnGoFind from "../element/buttons/BtnGoFind";
import BtnGoType from "../element/buttons/BtnGoType";
import BtnGoWhats from "../element/buttons/BtnGoWhats";
import MainHeader from "../layout/Headers/MainHeader";

// import css en page.scss
import "../../index.css";

export const HomePage = () => {
  return (
    <div className="main">
      {/* este es el titulo */}
      <MainHeader />
      {/* este es el bloque donde están los dos botones para elegir el juego */}
      <section className="board">
        <BtnGoWhats />
        <BtnGoFind />
        <BtnGoType />
      </section>
      <img src="../../pokeapi.png" alt="logo pokeapi" className="pokeapi" />
    </div>
  );
};

export default HomePage;
