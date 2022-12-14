

const getTypes = async(num) => {
	const raw = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
	const character = await raw.json()
	const type = character['types']['0']['type']['name']
	return type
}

export default getTypes