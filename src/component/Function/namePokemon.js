
const namePokemon = async(num) => {
	const raw = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
	const character = await raw.json()
	const name = character['species']['name']
	return name
}


export default namePokemon

