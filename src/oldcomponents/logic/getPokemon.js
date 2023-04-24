
const getPokemon = async(num) => {
	const raw = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
	const character = await raw.json()
	const url = character['sprites']['other']['official-artwork']['front_default']
	return url
}

export default getPokemon
