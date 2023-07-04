// aquí cargamos los pokemos que vamos a buscar a la api, a través de la logic

import { useState, useEffect } from "react";

// import constante
import { SIZEFIND } from "../../constans";

//import logic
import fetchPokFind from "../logic/fetchPokFind";

export const usePok = () => {
  const [list, setList] = useState([]);
  const [change, setChange] = useState(true);

  const fetchPoke = async () => {
    const pokes = await fetchPokFind(SIZEFIND);
    setList(pokes);
  };

  const listPok = list.map((item) => item.data.id);

  const handleRefresh = () => {
    setChange(!change);
  };

  useEffect(() => {
    fetchPoke();
    console.log("useEffect");
  }, [change]);

  return {
    list,
    listPok,
    handleRefresh,
  };
};
