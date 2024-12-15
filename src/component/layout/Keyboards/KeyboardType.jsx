import React, { useEffect, useState } from "react";
import { BtnType } from "../../element/buttons/BtnType";
import { getTypePokemon } from "../../logicalElements/enpoint/getPokemon";
import { fetchPokemonData } from "../../logicalElements/enpoint/typeLogic";

import BtnBack from "../../element/buttons/BtnBack";
import "./keyboards.css";

const KeyboardType = () => {
  const [listType, setListType] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemonType = async (type) => {
    setIsLoading(true);
    setError(null);
    /* Esto nos devuelve la url de los pokemons, del type que le indiquemos */
    try {
      const pokemon = await getTypePokemon(type);
      return setListType(pokemon);
    } catch (error) {
      setError("Error al obtener los tipos de Pokémon");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchAllPokemonData = async () => {
      if (!listType.length) return;
      try {
        setIsLoading(true);
        const allPokemonData = await Promise.all(
          listType.map(fetchPokemonData)
        );
        setPokemonData(allPokemonData);
      } catch (error) {
        setError("Error al cargos los datos de los Pokémon.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllPokemonData();
  }, [listType]);

  return (
    <div className="mainContainerKeyboards">
      <div className="keyboards">
        <BtnType handleType={fetchPokemonType} />
      </div>
      <div className="contBtn">
        <BtnBack />
      </div>
      <div className="galery">
        {isLoading ? (
          <div> Cargando Pokemón..</div>
        ) : error ? (
          <div> Error: {error}</div>
        ) : pokemonData.length > 0 ? (
          pokemonData.map((poke) => (
            <div key={poke.name}>
              <p>{poke.name}</p>
              <img src={poke.image} alt={poke.name} />
            </div>
          ))
        ) : (
          <div>No hay pokemon disponibles</div>
        )}
      </div>
    </div>
  );
};

export default KeyboardType;
