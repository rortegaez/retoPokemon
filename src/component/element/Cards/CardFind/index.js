import React, { useEffect, useState } from "react";

// import custom hooks

//import styles
import "./cardfind.css";

const CardFind = ({ props, check, solved, ident, selectId }) => {
  const [selected, setSelected] = useState(false); // donde hacemos las comprobaciones de true, para el objeto seleccionado
  const [disabled, setDisabled] = useState(false); // donde hacemos las comprobaciones de true, para los objetos ganadores

  let type = props.types[0].type.name;

  const testSolved = (num) => {
    if (solved.includes(num)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const testSelect = (num) => {
    if (selectId.includes(ident)) {
      setSelected(true);
    } else {
      setTimeout(() => setSelected(false), 500);
    }
  };

  useEffect(() => {
    testSelect();
    testSolved(props.id);
  }, [selectId, solved]);

  const utilities = () => {
    check(props.id, ident);
  };

  return (
    <>
      <div
        className={`mainCard ${selected ? "selected" : ""} 
				${disabled ? "disabled" : ""}`}
        /* id={`${type}`} */
        onClick={utilities}
      >
        <div className="card">
          <div className="back">
            <h1
              className={`namePok ${selected ? "selected" : ""} ${
                disabled ? "disabled" : ""
              }`}
            >
              {props.species.name}
            </h1>
            <img
              src={props.sprites.other.home.front_default}
              alt={props.species.name}
              className={`imgPok ${selected ? "selected" : ""} ${
                disabled ? "disabled" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFind;
