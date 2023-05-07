import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>Hola HomePage</h1>
      <Link to="/whatspokemon">Whats Pokemon</Link>
      <Link to="/findpokemon">Find Pokemon</Link>
    </div>
  );
};

export default HomePage;
