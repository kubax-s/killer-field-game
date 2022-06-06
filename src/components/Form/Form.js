import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Form = ({ addPlayer, inputValue, setInputValue }) => (
    <FormElement onSubmit={ e => addPlayer(e) }>
        <TextField variant="standard" color="primary" label="Name" value={ inputValue } onChange={ e => setInputValue(e.target.value) }/>
        <Button variant="contained" type="submit" sx={{ marginTop: '1.25rem' }}>Add player</Button>
    </FormElement>
)

export default Form
