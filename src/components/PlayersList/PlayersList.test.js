// import React from 'react'
import { render, fireEvent, getByText } from '@testing-library/react'
import PlayersList from './PlayersList'

describe('PlayersList component', () => {

    const mockedDeletePlayer = jest.fn()
    const players = ['First player', 'Second player', 'Third player']

    it('renders the correct DOM', () => {
        const { getByText, getAllByTestId } = render(<PlayersList players={players} deletePlayer={mockedDeletePlayer} />)
    
        const listItem = getAllByTestId('players-listItem')
        const button = getAllByTestId('players-button')
        expect(listItem.length).toBe(players.length)
        expect(button.length).toBe(players.length)

        players.forEach(player => {
            const text = getByText(player)
            expect(text).toBeInTheDocument()
        })
    })

    test('Button click calls deletePlayer()', () => {
        const { getAllByTestId } = render(<PlayersList players={players} deletePlayer={mockedDeletePlayer} />)
        
        const button = getAllByTestId('players-button')
        fireEvent.click(button[0])
        expect(mockedDeletePlayer).toBeCalled()
    })
})