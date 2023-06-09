// aquí cargamos los pokemos que vamos a buscar a la api, a través de la logic

import { useState, useEffect } from "react";

// import constante
import { SIZEFIND } from "../../constans";

//import logic
import fetchPokFind from "../logic/fetchPokFind";

export const usePok = () => {
  const [list, setList] = useState([]);

  const fetchPoke = async () => {
    const pokes = await fetchPokFind(SIZEFIND);
    setList(pokes);
  };

  useEffect(() => {
    fetchPoke();
  }, []);

  return {
    list,
  };
};
