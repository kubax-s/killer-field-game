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
<<<<<<< HEAD
  const [players, setPlayers] = useState(localStorage.getItem('KILLER_FIELD_GAME_PLAYERS') ? JSON.parse(localStorage.getItem('KILLER_FIELD_GAME_PLAYERS')) : [])
=======
  const [players, setPlayers] = useState(localStorage.getItem('KILLER_FIELD_GAME_KILLERS') ? JSON.parse(localStorage.getItem('KILLER_FIELD_GAME_KILLERS')) : [])
>>>>>>> 7e0361db7ee6ff291c441e5fc1dd4f6ff67cc169
  const [result, setResult] = useState(false)

  const addPlayer = e => {
    e.preventDefault()
    if (players.includes(inputValue) || inputValue === '') return
    setPlayers([...players, inputValue])
<<<<<<< HEAD
    localStorage.setItem('KILLER_FIELD_GAME_PLAYERS', JSON.stringify([...players, inputValue]))
=======
    localStorage.setItem('KILLER_FIELD_GAME_KILLERS', JSON.stringify([...players, inputValue]))
>>>>>>> 7e0361db7ee6ff291c441e5fc1dd4f6ff67cc169
    setInputValue('')
  }

  const deletePlayer = player => {
    setPlayers(players.filter(item => item !== player))
<<<<<<< HEAD
    localStorage.setItem('KILLER_FIELD_GAME_PLAYERS', JSON.stringify(players.filter(item => item !== player)))
=======
    localStorage.setItem('KILLER_FIELD_GAME_KILLERS', JSON.stringify(players.filter(item => item !== player)))
>>>>>>> 7e0361db7ee6ff291c441e5fc1dd4f6ff67cc169
  }

  const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)]

  const getResult = () => {
    let targets = [...players]
    return players.reduce((accumulator, player) => {
      let target
      if (targets.length >= 2) { target = getRandomElement(targets.filter(item => item !== player)) }
      if (targets.length === 1) { target = targets[0] }
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