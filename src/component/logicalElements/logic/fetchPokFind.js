// import logic
import getNumber from "./getNumber";
import shuffle from "./shuffle";

// import endpoint
import getPokemon from "../enpoint/getPokemon";

const fetchPokFind = async (size) => {
  const num = getNumber(size);
  let totalPok = [];

  let pok1 = [];
  let pok2 = [];
  for (let i = 0; i < num.length; i++) {
    const item = await getPokemon(num[i]);
    pok1 = [...pok1, item];
    pok2 = [...pok2, item];
  }

  totalPok = [...pok1, ...pok2];

  return shuffle(totalPok);
};

export default fetchPokFind;
