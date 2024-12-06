import axios from "axios";

const getPokemon = async (num) => {
  const raw = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
  return raw;
};

export const getAllPokemon = async () => {
  const url = await axios.get('https://pokeapi.co/api/v2/pokemon/')
  const limit = 20
  let offset = 0
  const raw = []

  while(true) {
    const response = await fetch(`${url}?offset=${offset}&limit=${limit}`);
    const data = await response.json();
    raw.push(...data.results);

    if (!data.next) {
      break;
    }

    offset += limit;
  }

  return raw
}

export default getPokemon;


/*
Una función para que nos retorne todos los pokemon saltando la limitación de 20 pokemon

async function fetchAllPokemon() {
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const limit = 20;
  let offset = 0;
  const allPokemon = [];

  while (true) {
    const response = await fetch(`${url}?offset=${offset}&limit=${limit}`);
    const data = await response.json();
    allPokemon.push(...data.results);

    if (!data.next) {
      break;
    }

    offset += limit;
  }

  return allPokemon;
}
 */
