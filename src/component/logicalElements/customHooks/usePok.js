// aquí cargamos los pokemos que vamos a buscar a la api, a través de la logic

import { useState, useEffect } from "react";

//import customHooks
import { useSize } from "../../logicalElements/customHooks/useSize";

//import logic
import fetchPokFind from "../logic/fetchPokFind";

export const usePok = () => {
  const [list, setList] = useState([]);
  const [change, setChange] = useState(true);

  const { sizefind } = useSize();

  const fetchPoke = async (number) => {
    const pokes = await fetchPokFind(number);
    setList(pokes);
  };

  const listPok = list.map((item) => item.data.id);

  //cada vez que cambia el change, hacemos un nuevo useEffect y un nuevo fetchPoke, por lo que obtenemos una lista nuevo de pokemons
  const handleRefresh = () => {
    setChange(!change);
  };

  useEffect(() => {
    fetchPoke(sizefind);
  }, [change]);

  return {
    list,
    listPok,
    handleRefresh,
    fetchPoke,
  };
};
