import styled from 'styled-components'

export const FooterContainer = styled.footer`
    height: 80px;
    background-color: ${({currentTheme})=>(currentTheme.footerColor)};
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CopyRight = styled.a`
    color: ${({currentTheme})=>(currentTheme.primaryColor)};
    margin-left: 0.2em;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        font-weight: bold;
    }
`