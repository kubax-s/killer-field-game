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
  const [players, setPlayers] = useState(localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : [])
  const [result, setResult] = useState(false)

  const addPlayer = e => {
    e.preventDefault()
    if (players.includes(inputValue) || inputValue === '') return
    setPlayers([...players, inputValue])
    localStorage.setItem('players', JSON.stringify([...players, inputValue]))
    setInputValue('')
  }

  const deletePlayer = player => {
    setPlayers(players.filter(item => item !== player))
    localStorage.setItem('players', JSON.stringify(players.filter(item => item !== player)))
  }

  const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)]

  const getTarget = (arr, player) => {
    const target = getRandomElement(arr)

    if (target !== player) return target
    if (arr.length >= 2) getTarget(arr, player)
  }

  const getResult = () => {
    let targets = [...players]
    return players.reduce((accumulator, player) => {
      const target = getTarget(targets, player)
      targets = [...targets.filter(item => item !== target)]

      return [
        ...accumulator,
        {
          'killer': player,
          'target': target
        }
      ]
    }, [])
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
          onClick={ () => setResult(getResult) }
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