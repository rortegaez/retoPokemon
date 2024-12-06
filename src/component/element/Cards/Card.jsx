import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./card.css";
import CardFind from "./CardFind";
import CardWhats from "./CardWhat";

const Card = ({ props, check, solved, ident, selectId, checks }) => {
  const places = useLocation();

  const [position, setPosition] = useState("");

  useEffect(() => {
    setPosition(places.pathname);
  }, []);

  return (
    <>
      {position === "whatspokemon" ? (
        <CardWhats props={props} checks={checks} />
      ) : (
        <CardFind
          props={props}
          solved={solved}
          ident={ident}
          selectId={selectId}
          check={check}
        />
      )}
    </>
  );
};

export default Card;
