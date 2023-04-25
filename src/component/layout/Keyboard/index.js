import { useEffect, useState } from "react";

// import components
import Card from "../../element/Card";
import ButtonRefresh from "../../buttons/ButtonRefresh";

// import styles
import styles from "./keyboard.module.css";

// import logic
import fetchPokemon from "../../logic/fetchPokemon";

const Keyboard = () => {
  const [list, setList] = useState([]);
  const [handle, setHandle] = useState(true);

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
          <Card key={index} props={item.data} />
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
