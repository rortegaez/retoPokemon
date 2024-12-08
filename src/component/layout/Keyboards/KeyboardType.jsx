import React, { useEffect, useState } from "react";
import { BtnType } from "../../element/buttons/BtnType";
import { getTypePokemon } from "../../logicalElements/enpoint/getPokemon";
import { fetchPokemonData } from "../../logicalElements/enpoint/typeLogic";

import BtnBack from "../../element/buttons/BtnBack";
import "./keyboards.css";

const KeyboardType = () => {
  const [listType, setListType] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  const fetchPokemonType = async (type) => {
    /* Esto nos devuelve la url de los pokemons, del type que le indiquemos */
    const pokemon = await getTypePokemon(type);
    return setListType(pokemon);
  };

  useEffect(() => {
    console.log(listType, "list");
  }, [listType]);

  useEffect(() => {
    const fetchAllPokemonData = async () => {
      const allPokemonData = await Promise.all(listType.map(fetchPokemonData));
      setPokemonData(allPokemonData);
    };
    fetchAllPokemonData();
  }, [listType]);

  console.log(pokemonData, "setpoke");

  return (
    <div className="mainContainerKeyboards">
      <div className="keyboards">
        <BtnType handleType={fetchPokemonType} />
        <BtnBack />
      </div>
    </div>
  );
};

export default KeyboardType;
