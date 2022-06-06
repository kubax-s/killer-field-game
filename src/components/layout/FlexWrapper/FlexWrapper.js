import styled from 'styled-components'

const FlexWrapper = styled.div.attrs(props => ({
        dir: props.dir || 'row',
        justify: props.justify || 'flex-start',
        align: props.align || 'flex-start',
        padding: props.padding || 0,
    }))`
    display: flex;
    flex-direction: ${ props => props.dir };
    justify-content: ${ props => props.justify };
    align-items: ${ props => props.align };
    padding: ${ props => props.padding };
    width: 100%;
`

export default FlexWrapper