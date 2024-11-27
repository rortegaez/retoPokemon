import { useEffect, useState } from "react";

// import components
import confetti from "canvas-confetti";
import CardWhats from "../../element/Cards/CardWhat";
import BtnBack from "../../element/buttons/BtnBack";
import ButtonRefresh from "../../element/buttons/ButtonRefresh";

//import customHooks
import { useSize } from "../../logicalElements/customHooks/useSize";

// import css en keyboard.scss
import "./keyboards.css";

// import logic
import BtnChangeWhats from "../../element/buttons/BtnChangeWhats";
import fetchPokemon from "../../logicalElements/logic/fetchPokemon";

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
      <div className='mainContainerKeyboards'>
        <div className='keyboards'>
          {list.map((item, index) => (
            <CardWhats
              key={index}
              id={index}
              props={item.data}
              checks={() => checks(index)}
            />
          ))}
        </div>

        <div className='contBtn'>
          <ButtonRefresh
            handleRefresh={handleRefrest}
          />
          <BtnChangeWhats
            incrementWhat={incrementWhat}
            decrementWhat={decrementWhat}
            sizewhat={sizewhat}
          />
          <BtnBack />
        </div>
      </div>
    </>
  );
};

export default Keyboard;
