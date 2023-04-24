import axios from "axios";

const getPokemon = async (num) => {
  const raw = await axios.get(`http://pokeapi.co/api/v2/pokemon/${num}`);
  return raw;
};

export default getPokemon;
