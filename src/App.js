import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Character from './components/Character';
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <h1 className="Header">Pokédex</h1>
      <FlexContainer>
        {characters.map(char => <Character key={char.url} info={char}></Character>)}
      </FlexContainer>
    </div>
  );
}

const FlexContainer = styled.div`
  display:flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  margin:0 10%;
  color:white;
`

export default App;
