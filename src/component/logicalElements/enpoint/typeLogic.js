export const fetchPokemonData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    const pokemon = {
      name: data.name
    }
    return pokemon
  } catch (error) {
    console.log('Error fetching Pokemons data:', error)
    return null
  }
}