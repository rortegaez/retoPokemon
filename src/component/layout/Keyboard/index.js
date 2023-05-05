import { useEffect, useState } from "react";

// import components
import Card from "../../element/Card";
import ButtonRefresh from "../../buttons/ButtonRefresh";
import { SIZE } from "../../constans.js";
import confetti from "canvas-confetti";

// import styles
import styles from "./keyboard.module.css";

// import logic
import fetchPokemon from "../../logic/fetchPokemon";

const Keyboard = () => {
  const [list, setList] = useState([]);
  const [handle, setHandle] = useState(true);

  //pendiente de finalizar la lógica, cuando se pulse el botón, cuando se pulse SIZE diferentes saltará el confetti
  const checks = (id) => {
    const pass = SIZE;
    let numberId = [];
    console.log(numberId);
    console.log(id);
    console.log(numberId.includes(id));
    /*
		- se hace un include
		- si es false, se añada al array; si es true ignoramos, porque se habrá pulsado sobre algo ya pulsado
		- así hasta que numberId tenga los mismo elementos que SIZE
		- cuando se igualen debe de salir el confetti
		*/
    /* if (pass === numberId.length) {
      confetti();
    } else {
      numberId.includes(id) ? null : (numberId = [...numberId, id]);
    } */

    if (!numberId.includes(id) === true) {
      console.log("primero");
      numberId = [...numberId, id];
    } else if (pass === numberId.length) {
      console.log("segundo");
      confetti();
    }
  };

  const fetchPoke = async () => {
    const pokes = await fetchPokemon();
    setList(pokes);
  };

  const handleRefrest = () => {
    setHandle(!handle);
  };

  useEffect(() => {
    fetchPoke();
  }, [handle]);

  return (
    <>
      <div className={styles.mainContainer}>
        {list.map((item, index) => (
          <Card
            key={index}
            // si quiero utilizar el identificador del index, debo de enviarlo como un elemento diferente que la key
            id={index}
            props={item.data}
            checks={() => checks(index)}
          />
        ))}
        <div className={styles.contBtn}>
          <ButtonRefresh
            handleRefresh={handleRefrest}
            className={styles.contBtn}
          />
        </div>
      </div>
    </>
  );
};

export default Keyboard;
