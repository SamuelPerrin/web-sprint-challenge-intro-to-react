import React from 'react'
import styled from 'styled-components'

export default function Details (props) {
  const { height, weight, id, types } = props.info
  return (
    <div>
			<p>Pokédex number: {id}</p>
      <p>height: {height}</p>
      <p>weight: {weight}</p>
			<StyledList>types: {types.map(each => <li key={each.type.name}>{each.type.name}</li>)}</StyledList>
    </div>
  )
}

const StyledList = styled.ul`
	text-align: left;
	li {
		text-align: center;
	}
`