

const getColor = (colores) => {
	const color = document.documentElement.style

	switch( colores ){
		case 'bug':
			color.setProperty('--background', '#33FF46')
			break
		case 'dark':
			color.setProperty('--background', '#5D515E')
			break
		case 'dragon':
			color.setProperty('--background', '#08EAEA')
			break
		case 'electric':
			color.setProperty('--background', '#f6e002')
			break
		case 'fairy':
			color.setProperty('--background', '#d7320e')
			break
		case 'fighting':
			color.setProperty('--background', '#e77408')
			break
		case 'fire':
			color.setProperty('--background', '#f60513')
			break
		case 'flying':
			color.setProperty('--background', '#0895b7')
			break
		case 'ghost':
			color.setProperty('--background', '#480683')
			break
		case 'grass':
			color.setProperty('--background', '#4dec36')
			break
		case 'ground':
			color.setProperty('--background', '#8c570a')
			break
		case 'ice':
			color.setProperty('--background', '#a7d7f0')
			break
		case 'normal':
			color.setProperty('--background', '#ada294')
			break
		case 'poison':
			color.setProperty('--background', '#9909ba')
			break
		case 'psychic':
			color.setProperty('--background', '#e906ce')
			break
		case 'rock':
			color.setProperty('--background', '#854c08')
			break
		case 'steel':
			color.setProperty('--background', '#b3ccb9')
			break
		case 'water':
			color.setProperty('--background', '#4d8dec')
			break	
		default:
			color.setProperty('--background', 'null')
	}
}

//color.setProperty('--background', '#585')


export default getColor