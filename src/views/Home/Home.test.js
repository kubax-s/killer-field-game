import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from './Home'
import Button from '@mui/material/Button'

const mockedCheckResult = jest.fn()
const ReadyButton = 
  <Button 
    variant="contained"
    onClick={ mockedCheckResult }
    data-testid="home-ready"
  >
    Ready
  </Button>

describe('Home component', () => {

  it('renders correct DOM', () => {
    const { queryByText, getByTestId } = render(<Home />)
    const button = queryByText('Ready')
    const form = getByTestId('add-form')

    expect(screen.getByText('Killer')).toBeInTheDocument()
    expect(form).toBeInTheDocument()
    expect(button).not.toBeInTheDocument()
  })

  test('Button "Ready" calls checkResult()', () => {
    const { getByTestId } = render(ReadyButton)
    const button = getByTestId('home-ready')

    fireEvent.click(button)
    expect(mockedCheckResult).toHaveBeenCalled()
  })
  
})