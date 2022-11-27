
import React, { useEffect, useState } from 'react'
import './card.css'

const Card = () => {

	const [ url, setUrl ] = useState()
	const [ name, setName ] = useState()

	useEffect(() =>{

		getPokemon(number).then(element => setUrl(element))
		namePokemon(number).then(obj => setName(obj))
	
	}, [])

	const getPokemon = async(num) => {
		const raw = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
		const character = await raw.json()
		const url = character['sprites']['other']['official-artwork']['front_default']
		return url			
	}

	const namePokemon = async(num) => {
		const raw = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
		const character = await raw.json()
		const name = character['species']['name']
		return name
	}
	console.log('nombre', namePokemon())

	const getNumber = () => {
		return Math.round(Math.random()*101)
	}

	const number = getNumber()
	
	return <>
	<div className='card'>
		<h1 className='title'>{ name }</h1>
		<img src={ url } alt='' className='cardBody'></img>
	</div>
	</>
}

export default Card