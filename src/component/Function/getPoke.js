const getPoke = async(num) => {
	const raw = await fetch(`http://pokeapi.co/api/v2/pokemon/${num}`)
	const character = await raw.json()
	return character
}

export default getPoke