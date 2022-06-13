import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Form = ({ addPlayer, inputValue, setInputValue }) => (
  <FormElement data-testid="add-form" onSubmit={ e => addPlayer(e) }>
    <TextField data-testid="add-input" variant="standard" color="primary" label="Name" value={ inputValue } onChange={ e => setInputValue(e.target.value) }/>
    <Button data-testid="add-button" variant="contained" type="submit" sx={{ marginTop: '1.25rem' }}>Add player</Button>
  </FormElement>
)

export default Form
