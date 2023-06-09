import React from "react";
import MainHeader from "../../layout/Headers/MainHeader";
import BtnGoWhats from "../../element/buttons/BtnGoWhats";
import BtnGoFind from "../../element/buttons/BtnGoFind/index";

export const HomePage = () => {
  return (
    <div>
      <MainHeader />
      <BtnGoWhats />
      <BtnGoFind />
    </div>
  );
};

export default HomePage;
