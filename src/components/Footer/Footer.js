import React, {useContext} from 'react'
import { CopyRight, FooterContainer } from './FooterElements'
import ThemeContext  from '../../context/themeContext'

const Footer = () => {
    const {currentTheme} = useContext(ThemeContext)
    return (
        <FooterContainer currentTheme={currentTheme}>
            Design & developed by <CopyRight href="https://twitter.com/DevCLuna" target="_blank" currentTheme={currentTheme}>@DevCluna </CopyRight>
        </FooterContainer>
    )
}

export default Footer
