import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Form from './Form'

describe('Form component', () => {

    it('renders the correct DOM', () => {
        const { getByTestId } = render(<Form />)
    
        const input = getByTestId('add-input').querySelector('input')
        const button = getByTestId('add-button')
    
        expect(input.getAttribute('value')).toBe('')
        expect(button).toBeInTheDocument()
    })

    test('Input value is changing', () => {
        const mockedSetInputValue = jest.fn()

        const startingInputValue = ''
        const inputValue = 'Lorem ipsum'
        const { getByTestId } = render(<Form inputValue={startingInputValue} setInputValue={() => mockedSetInputValue(inputValue)}/>)
    
        const input = getByTestId('add-input').querySelector('input')
        
        fireEvent.change(input, { target: { value : inputValue } })

        expect(mockedSetInputValue).toHaveBeenCalledWith(inputValue)
    })

    test('Button click is calling addPlayer()', () => {
        const mockedAddPlayer = jest.fn()
        mockedAddPlayer.mockImplementation(event => { event.preventDefault() })

        const { getByTestId } = render(<Form addPlayer={mockedAddPlayer} inputValue=""/>)
    
        const button = getByTestId('add-button')
      
        fireEvent.click(button)
        expect(mockedAddPlayer).toBeCalled() 
    })

})