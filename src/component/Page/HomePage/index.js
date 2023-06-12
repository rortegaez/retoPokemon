import React from "react";
import MainHeader from "../../layout/Headers/MainHeader";
import BtnGoWhats from "../../element/buttons/BtnGoWhats";
import BtnGoFind from "../../element/buttons/BtnGoFind/index";

import style from "./homepage.module.css";

export const HomePage = () => {
  return (
    <div className={style.main}>
      <MainHeader />
      <section className={style.board}>
        <BtnGoWhats />
        <BtnGoFind />
      </section>
    </div>
  );
};

export default HomePage;
