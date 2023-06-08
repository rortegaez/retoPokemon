import React, { useCallback, useEffect, useState } from "react";

// import custom hooks

//import styles
import "./cardfind.css";

const CardFind = ({ props, check, solved, ident, selectId }) => {
  const [selected, setSelected] = useState(false);

  let type = props.types[0].type.name;

  useEffect(() => {
    if (selectId.includes(ident)) {
      setSelected(true);
    } else {
      setTimeout(() => setSelected(false), 500);
    }
  }, [selectId]);

  const utilities = () => {
    check(props.id, ident);
  };
  console.log("ident cardfind", ident);
  console.log("selected", selected);

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
