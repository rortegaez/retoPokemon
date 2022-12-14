
import React, { useEffect, useState } from 'react'

import './card.css'

import getPokemon from '../Function/getPokemon'
import namePokemon from '../Function/namePokemon'
import getNumber from '../Function/getNumber'
import getTypes from '../Function/getTypes'

const Card = () => {

	const [ url, setUrl ] = useState()
	const [ name, setName ] = useState()
	const [ type, setTypes ] = useState()

	useEffect(() => {

		getPokemon(number).then(element => setUrl(element))
		namePokemon(number).then(element => setName(element))
		getTypes(number).then(element => setTypes(element))		
	
	},[])

	const number = getNumber()		
	
	return <>
	<div className='mainCard' id = { type }>
		<h1 className='title'>{ name }</h1>
		<img src= { url } alt= { name } className='cardBody'></img>
	</div>
	</>
}

export default Card