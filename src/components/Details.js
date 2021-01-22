import React from 'react'
import styled from 'styled-components'

export default function Details (props) {
  const { height, weight, id } = props.info
  return (
    <div>
			<p>Pokédex number: {id}</p>
      <p>height: {height}</p>
      <p>weight: {weight}</p>
    </div>
  )
}