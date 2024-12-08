import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import css en header.scss
import "./headers.css";

const Header = () => {
  const [whats, setWhats] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/whatspokemon") {
      return setWhats("¿Como se llama?");
    } else if (location.pathname === "/findpokemon") {
      return setWhats("Encuentra mi pareja");
    } else {
      return setWhats("Elije el tipo");
    }
  }, [location]);

  console.log(location.pathname, "location");

  return (
    <div className="titleContainer">
      <h1 className="titlePokemon">{whats}</h1>
    </div>
  );
};

export default Header;
