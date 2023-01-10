
import React, { useEffect, useState } from 'react'

import './card.css'

//import getPokemon from '../Function/getPokemon'
//import namePokemon from '../Function/namePokemon'
//import getTypes from '../Function/getTypes'
import getNumber from '../Function/getNumber'
import getPoke from '../Function/getPoke'


const Card = () => {

	//const [ url, setUrl ] = useState()
	//const [ name, setName ] = useState()
	//const [ type, setTypes ] = useState()
	const [ poke, setPoke ] = useState([])

	useEffect(() => {

		getPoke(number).then(element => setPoke(element))

		//getPokemon(number).then(element => setUrl(element))
		//namePokemon(number).then(element => setName(element))
		//getTypes(number).then(element => setTypes(element))		
	
	}, [])

	const number = getNumber()		
	
	return <>
	{ console.log('prueba', poke) }
	

	{/* <div className='mainCard' id = { type }> */}
		{/* en el css tenemos #(tipo de pokemon) por cada type, asi que según el type que sea cambia el color del bakcground. */}
		{/* <h1 className='title'>{ name }</h1> */}
		{/* <img src= { url } alt= { name } className='cardBody'></img> */}
	{/* </div> */}
	</>
}

export default Card