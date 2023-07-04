import { useEffect, useState } from "react";

// import components
import CardWhats from "../../element/Cards/CardWhats/index";
import ButtonRefresh from "../../element/buttons/ButtonRefresh/index.jsx";
import { SIZEWHATS } from "../../constans.js";
import confetti from "canvas-confetti";

// import styles
import styles from "./keyboard.module.css";

// import logic
import fetchPokemon from "../../logicalElements/logic/fetchPokemon";

const Keyboard = () => {
  const [list, setList] = useState([]);
  const [handle, setHandle] = useState(true);

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
        <div className={styles.keyboards}>
          {list.map((item, index) => (
            <CardWhats
              key={index}
              // si quiero utilizar el identificador del index, debo de enviarlo como un elemento diferente que la key
              id={index}
              props={item.data}
              checks={() => checks(index)}
            />
          ))}
        </div>

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
