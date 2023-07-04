import { useEffect, useState } from "react";

// import components
import CardWhats from "../../element/Cards/CardWhats/index";
import ButtonRefresh from "../../element/buttons/ButtonRefresh/index.jsx";
import confetti from "canvas-confetti";

//import customHooks
import { useSize } from "../../logicalElements/customHooks/useSize";

// import styles
import styles from "./keyboard.module.css";

// import logic
import fetchPokemon from "../../logicalElements/logic/fetchPokemon";
import BtnChangeWhats from "../../element/buttons/BtnChangeWhats";

const Keyboard = () => {
  const [list, setList] = useState([]);
  const [handle, setHandle] = useState(true);

  const { sizewhat, incrementWhat, decrementWhat } = useSize();

  let numberId = [];
  let pass = 0;
  const checks = (id) => {
    if (!numberId.includes(id)) {
      numberId = [...numberId, id];
      pass = pass + 1;
    }

    if (pass === sizewhat) {
      confetti();
    }
  };

  const fetchPoke = async () => {
    const pokes = await fetchPokemon(sizewhat);
    setList(pokes);
  };

  const handleRefrest = () => {
    setHandle(!handle);
  };

  useEffect(() => {
    fetchPoke();
  }, [handle, sizewhat]);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.keyboards}>
          {list.map((item, index) => (
            <CardWhats
              key={index}
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
          <BtnChangeWhats
            incrementWhat={incrementWhat}
            decrementWhat={decrementWhat}
            sizewhat={sizewhat}
          />
        </div>
      </div>
    </>
  );
};

export default Keyboard;
