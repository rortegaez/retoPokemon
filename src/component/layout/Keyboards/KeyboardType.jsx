import React, { useEffect, useState } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { BtnReturnType } from "../../element/buttons/BtnReturnType";
import { BtnType } from "../../element/buttons/BtnType";
import { getTypePokemon } from "../../logicalElements/enpoint/getPokemon";
import { fetchPokemonData } from "../../logicalElements/enpoint/typeLogic";

import BtnBack from "../../element/buttons/BtnBack";
import "./keyboards.css";

const KeyboardType = () => {
  const [listType, setListType] = useState([]); //nos da la url de todos los datos del pokemon
  const [pokemonData, setPokemonData] = useState([]); //nos devuelve el nombre y url de la image
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

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

  const handleVisibleGallery = () => {
    console.log("handlevisible");
    setShowGallery(!showGallery);
  };

  return (
    <div className="mainContainerKeyboards">
      <div className={`keyboards ${showGallery ? "hidden" : ""}`}>
        <BtnType
          handleType={fetchPokemonType}
          handleVisibleGallery={handleVisibleGallery}
        />
      </div>
      <div className="contBtn">
        <BtnBack />
        <BtnReturnType handleVisibleGallery={handleVisibleGallery} />
      </div>
      <div className={`galery ${showGallery ? "visible" : "hidden"}`}>
        {isLoading ? (
          <div> Cargando Pokemón..</div>
        ) : error ? (
          <div> Error: {error}</div>
        ) : pokemonData.length > 0 ? (
          <Gallery
            items={pokemonData.map((poke) => ({
              original: poke.image,
              thumbnail: poke.image,
            }))}
          />
        ) : (
          <div>No hay pokemon disponibles</div>
        )}
      </div>
    </div>
  );
};

export default KeyboardType;
