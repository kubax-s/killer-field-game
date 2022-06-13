import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Result from './Result'
import Button from '@mui/material/Button'

const result = [
    {
        killer: 'First Player',
        target: 'Second Player'
    },
    {
        killer: 'Second Player',
        target: 'Third Player'
    },
    {
        killer: 'Third Player',
        target: 'First Player'
    }
]

const mockedHandleOpenModal = jest.fn()
const OpenModalButton = 
    <Button variant="outlined" size="small" data-testid="open-modal-button" onClick={() => mockedHandleOpenModal(result[0].target)}>
        Show target
    </Button>

const mockedSetResult = jest.fn()
const ResetResultButton = 
    <Button variant="contained" data-testid="reset-result-button" onClick={() => mockedSetResult(null)}>
        Reset result
    </Button>

describe('Result component', () => {

    it('renders the correct DOM', () => {
        const { getByText, getByTestId, getAllByTestId } = render(<Result result={ result } />)
    
        const listItem = getAllByTestId('result-listItem')
        const buttonShowTarget = getAllByTestId('open-modal-button')
        const buttonResetResult = getByTestId('reset-result-button')

        expect(listItem.length).toBe(result.length)
        expect(buttonShowTarget.length).toBe(result.length)
        expect(buttonResetResult).toBeInTheDocument()

        result.forEach(player => {
            const text = getByText(player.killer)
            expect(text).toBeInTheDocument()
        })
    })

    test('Button "Show target" calls handleOpenModal(player.target)', () => {
        const { getByTestId } = render(OpenModalButton)
        const button = getByTestId('open-modal-button')

        fireEvent.click(button)
        expect(mockedHandleOpenModal).toHaveBeenCalledWith(result[0].target)
    })

    test('Button "Reset result" calls setResult(null)', () => {
        const { getByTestId } = render(ResetResultButton)
        const button = getByTestId('reset-result-button')

        fireEvent.click(button)
        expect(mockedSetResult).toHaveBeenCalledWith(null)
    })

})