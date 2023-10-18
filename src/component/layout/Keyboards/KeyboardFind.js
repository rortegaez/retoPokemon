import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

// import customHooks
import { usePok } from "../../logicalElements/customHooks/usePok";
import { useCheck } from "../../logicalElements/customHooks/useCheck.js";
import { useSize } from "../../logicalElements/customHooks/useSize";

//import components
import ButtonRefreshFind from '../../element/buttons/BtnRefreshFind';
import CardFind from "../../element/Cards/CardFind";
import BtnChangeFind from "../../element/buttons/BtnChangeFind"
import BtnBack from "../../element/buttons/BtnBack";

// import css en keyboard.scss
import "../../../index.css"

const KeyboardFind = () => {
  const { list, listPok, handleRefresh, fetchPoke } = usePok();
  const { check, solved, selectId, cleanSolved } = useCheck();
  const { sizefind, incrementFind, decrementFind } = useSize();

  const [chck, setChck] = useState(false);

  const severalUtility = () => {
    cleanSolved();
    handleRefresh();
    setChck(false);
  };

  useEffect(() => {
    fetchPoke(sizefind);
  }, [sizefind]);

  useEffect(() => {
    if (solved.length === sizefind) {
      setChck(true);
    }
  }, [solved]);

  //----------------------------------------------

  return (
    <div>
      {chck && <Confetti />}
      <div className='mainContainerKeyboards'>
        <div className='keyboardFind'>
          {list.map((item, index) => (
            <CardFind
              key={index}
              ident={index}
              props={item.data} //todos los datos de cada pokemon
              classname='cardKeyboardFind'
              check={check}
              solved={solved}
              selectId={selectId}
              listPok={listPok}
            />
          ))}
        </div>
        <div className='contBtn'>
          <ButtonRefreshFind
            severalUtility={severalUtility}
          />
          <BtnChangeFind
            sizefind={sizefind}
            incrementFind={incrementFind}
            decrementFind={decrementFind}
            severalUtility={severalUtility}
          />
          <BtnBack />
        </div>
      </div>
    </div>
  );
};

export default KeyboardFind;
