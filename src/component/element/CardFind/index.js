import React from "react";

// import custom hooks

//import styles
import "./cardfind.css";

const CardFind = ({ props, checkIndex, select, ident, check }) => {
  const numberPok = props.id;
  let type = props.types[0].type.name;

  const isSelected = select.includes(ident);

  const utilities = () => {
    check(numberPok);
    checkIndex(ident);
  };

  return (
    <>
      <div
        className={`mainCard ${isSelected ? "selected" : ""}`}
        id={`${type}`}
      >
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
