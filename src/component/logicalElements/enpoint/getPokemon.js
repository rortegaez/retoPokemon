import axios from "axios";

const getPokemon = async (num) => {
  const raw = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
  return raw;
};

export const getTypePokemon = async (type) => {
  try {
    const response = await fetch(`http://pokeapi.co/api/v2/type/${type}`)

    const data = await response.json()

    const pokemonList = data.pokemon.map(pokemon => pokemon.pokemon.url)

    return pokemonList
  } catch(error){
    console.log('error al obtener los Pokémon:', error)
    return []
  }
}

export default getPokemon;

