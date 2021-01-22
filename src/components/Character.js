// Write your Character component here
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Details from './Details'

export default function Character (props) {
	const [charInfo, setCharInfo] = useState(null);
	const [expanded, setExpanded] = useState(false);
	const { url, name } = props.info;
	
	useEffect(() => {
		// console.log(`mounting ${name} with url ${url}`)
		axios
			.get(url)
			.then(res => {
				setCharInfo(res.data);
			})
			.catch(err => console.log(err))
	}, [])

	const displayDetails = () => {
		setExpanded(!expanded)
	}

	const capitalize = (term) => {
		return term[0].toUpperCase() + term.slice(1)
	}

	return (
		<StyledDiv>
			<h2>{capitalize(name)}</h2>
			<div >
				{charInfo && <img src={charInfo.sprites.front_default} alt={name} style={{backgroundColor: 'lightgrey'}}/>}
			</div>
			{expanded && <Details info={charInfo}></Details>}
			<button onClick={() => displayDetails()}>See {expanded ? 'less' : 'more'}</button>
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
	border: 1px solid black;
	padding: 5px;
	margin: 5px;
	width: 150px;
	background-color: #CC221c;
	img {
		border: 1px solid black;
	}
	h2 {
		font-family: Arial, Helvetica, sans-serif;
		color:white;
	}
`