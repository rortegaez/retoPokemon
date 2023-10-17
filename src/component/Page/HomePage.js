import React from "react";
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
    </div>
  );
};

export default HomePage;
