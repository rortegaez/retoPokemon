import React from "react";
// import logo from '../../../public/pokeapi.png'

import MainHeader from "../layout/Headers/MainHeader";
import BtnGoWhats from "../element/buttons/BtnGoWhats";
import BtnGoFind from "../element/buttons/BtnGoFind";

// import css en page.scss
import '../../index.css';

export const HomePage = () => {
  return (
    <div className='main'>
      {/* este es el titulo */}
      <MainHeader />
      {/* este es el bloque donde están los dos botones para elegir el juego */}
      <section className='board'>
        <BtnGoWhats />
        <BtnGoFind />
      </section>
      <img src='../../pokeapi.png' alt="logo pokeapi" className="pokeapi"/>
    </div>
  );
};

export default HomePage;
