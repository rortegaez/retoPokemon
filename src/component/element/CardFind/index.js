import React, { useEffect, useState } from "react";

// import custom hooks

//import styles
import "./cardfind.css";

const CardFind = ({ props, check, solved }) => {
  const [selected, setSelected] = useState(false);

  const numberPok = props.id;
  let type = props.types[0].type.name;

  useEffect(() => {
    if (solved.includes(numberPok)) {
      setSelected((prevSelected) => !prevSelected);
    }
  }, [solved]);

  const utilities = () => {
    check(numberPok);
    //checkIndex(ident);
  };

  return (
    <>
      <div className={`mainCard ${selected ? "selected" : ""}`} id={`${type}`}>
        <div id="card" onClick={utilities}>
          <h1>{props.species.name}</h1>
          <img
            src={props.sprites.other.home.front_default}
            alt={props.species.name}
            className="imgPokemon"
          />
        </div>
      </div>
    </>
  );
};

export default CardFind;
