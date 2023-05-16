import React from "react";

const CardFind = ({ props, check, see }) => {
  const name = props.species.name;
  let type = props.types[0].type.name;
  const numberPok = props.id;

  const utilities = () => {
    see();
    check(numberPok);
  };

  return (
    <>
      <div className="mainCard" id={`${type}`}>
        <div id={`${type}`} onClick={utilities}>
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
