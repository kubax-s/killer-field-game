import React from 'react'
import FlexWrapper from './FlexWrapper'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('FlexWrapper component', () => {

    it('renders the correct element with display: flex;', () => {
        
        const tree = renderer.create(<FlexWrapper />).toJSON()
        expect(tree).toHaveStyleRule('display', 'flex')

    })

})