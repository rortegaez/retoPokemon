// import logic
import getNumber from "./getNumber";

// import endpoint
import getPokemon from "../enpoint/getPokemon";

const fetchPokemon = async () => {
  const num = getNumber();

  let pok = [];
  for (let i = 0; i < num.length; i++) {
    const item = await getPokemon(num[i]);
    pok = [...pok, item];
  }

  return pok;
};

export default fetchPokemon;
