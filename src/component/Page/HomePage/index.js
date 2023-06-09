import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "../../layout/Headers/MainHeader";

export const HomePage = () => {
  return (
    <div>
      <MainHeader />
      <Link to="/whatspokemon">Whats Pokemon</Link>
      <Link to="/findpokemon">Find Pokemon</Link>
    </div>
  );
};

export default HomePage;
