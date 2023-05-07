import { useEffect, useState } from "react";

// import components
import Card from "../../element/Card";
import ButtonRefresh from "../../buttons/ButtonRefresh";
import { SIZEWHATS } from "../../constans.js";
import confetti from "canvas-confetti";

// import styles
import styles from "./keyboard.module.css";

// import logic
import fetchPokemon from "../../logic/fetchPokemon";

const Keyboard = () => {
  const [list, setList] = useState([]);
  const [handle, setHandle] = useState(true);

  //pendiente de finalizar la lógica, cuando se pulse el botón, cuando se pulse SIZE diferentes saltará el confetti

  let numberId = [];
  let pass = 0;
  const checks = (id) => {
    if (!numberId.includes(id)) {
      numberId = [...numberId, id];
      pass = pass + 1;
    }

    if (pass === SIZEWHATS) {
      confetti();
    }
  };

  const fetchPoke = async () => {
    const pokes = await fetchPokemon(SIZEWHATS);
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
