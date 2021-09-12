import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    max-width:100%; 
    color: ${({currentTheme})=>(currentTheme.primaryColorText)};
    background-color: ${({currentTheme})=>(currentTheme.bgColor)};
    position: relative;
    font-family: ${({currentTheme})=>(currentTheme.secondaryFont)};
`