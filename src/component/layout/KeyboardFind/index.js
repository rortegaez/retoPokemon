import React from "react";
import { useEffect, useState } from "react";

//import constante
import { SIZEFIND } from "../../constans.js";

//import components
import ButtonRefresh from "../../buttons/ButtonRefresh/index.jsx";
import Card from "../../element/Card/index.js";
import fetchPokFind from "../../logic/fetchPokFind.js";

const KeyboardFind = () => {
  const [list, setList] = useState([]);

  const fetchPoke = async () => {
    const pokes = await fetchPokFind(SIZEFIND);
    setList(pokes);
  };

  useEffect(() => {
    fetchPoke();
  }, []);

  return (
    <div>
      <h1>KeyboardFind</h1>
      {list.map((item, index) => (
        <Card key={index} id={index} props={item.data} />
      ))}
      <ButtonRefresh />
    </div>
  );
};

export default KeyboardFind;
