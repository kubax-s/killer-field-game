import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from './Home'
import Button from '@mui/material/Button'

describe('Home component', () => {

  it('renders title', () => {
    render(<Home />)
    expect(screen.getByText('Killer')).toBeInTheDocument()
  })

  test('Button "Ready" calls checkResult()', () => {
    const mockedCheckResult = jest.fn()
    const { getByTestId } = render(
      <Button 
        variant="contained"
        onClick={ mockedCheckResult }
        data-testid="home-ready"
      >
        Ready
      </Button>
    )
    const button = getByTestId('home-ready')

    fireEvent.click(button)
    expect(mockedCheckResult).toHaveBeenCalled()
  })
  
})