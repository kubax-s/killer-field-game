import React, { useState } from 'react'
import styled from 'styled-components'
import FlexWrapper from '../../components/layout/FlexWrapper/FlexWrapper'
import Button from '@mui/material/Button'

import Form from '../../components/Form/Form'
import PlayersList from '../../components/PlayersList/PlayersList'
import Result from '../../components/Result/Result'

const H1 = styled.h1`
  font-size: 60px;
`

const Home = () => {

  const [inputValue, setInputValue] = useState('')
  const [players, setPlayers] = useState(localStorage.getItem('KILLER_FIELD_GAME_PLAYERS') ? JSON.parse(localStorage.getItem('KILLER_FIELD_GAME_PLAYERS')) : [])
  const [result, setResult] = useState(false)

  const addPlayer = e => {
    e.preventDefault()
    if (players.includes(inputValue) || inputValue === '') return
    setPlayers([...players, inputValue])
    localStorage.setItem('KILLER_FIELD_GAME_PLAYERS', JSON.stringify([...players, inputValue]))
    setInputValue('')
  }

  const deletePlayer = player => {
    setPlayers(players.filter(item => item !== player))
    localStorage.setItem('KILLER_FIELD_GAME_PLAYERS', JSON.stringify(players.filter(item => item !== player)))
  }

  const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)]

  const getResult = () => {
    const targets = [...players]
    return players.reduce((accumulator, player) => {
      const valuesToFilter = accumulator.map(item => item.target)
      const targetsFiltered = targets.filter(item => !valuesToFilter.includes(item))
      
      if (targetsFiltered.length >= 2) { 
        return [
          ...accumulator,
          {
            'killer': player,
            'target': getRandomElement(targetsFiltered.filter(item => item !== player))
          }
        ]
       }
      if (targetsFiltered.length === 1) {
        return [
          ...accumulator,
          {
            'killer': player,
            'target': targetsFiltered[0]
          }
        ] 
       }
       return []
    }, [])
  }

  const checkResult = () => {
    const arr = getResult()
    const lastElement = arr[arr.length - 1]
    if (lastElement.killer !== lastElement.target) {
      setResult(arr)
      return
    }
    checkResult()
  }

  return (
    <FlexWrapper 
      dir="column" 
      justify="center" 
      align="center"
    >
      <H1>Killer</H1>

      {
        !result &&
        <Form 
          addPlayer={ addPlayer }
          inputValue={ inputValue }
          setInputValue={ setInputValue }
        />
      }

      {
        players && !result && 
        <PlayersList 
          players={ players } 
          deletePlayer={ deletePlayer }
        />
      }

      {
        players.length >= 3 && !result &&
        <Button 
          variant="contained"
          onClick={ checkResult }
          data-testid="home-ready"
        >
          Ready
        </Button>
      }

      {
        result && <Result result={result} setResult={setResult}/>
      }
    </FlexWrapper>
  )
}

export default Home