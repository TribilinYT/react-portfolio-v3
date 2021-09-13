import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll';
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 100px;
    max-width:100%; 
    background-color: ${({currentTheme})=>(currentTheme.headerColor)};
    font-family: ${({currentTheme})=>(currentTheme.primaryFont)};
    position: sticky;
    top:0;
    margin-top: -102px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    color: ${({currentTheme})=>(currentTheme.headerColorText)};
    /* display: none; */
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);
`

// ------------Mobile Menu-----------------
export const MobileMenu = styled.div`
    position: fixed;
    margin-top: 102px;
    margin-left: ${({toggleMenu})=>(toggleMenu ? "0": "100vw")};
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background: ${({currentTheme})=>(currentTheme.colorMobileMenu)};
    color: ${({currentTheme})=>(currentTheme.primaryColorText)};
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease;
    
`

export const  MobileMenuItem = styled.div`
    font-size: 3.2em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* &:hover{
        background: red;
        
    } */
`

export const MobileButtonResume = styled.a`
    text-decoration: none;
    color: ${({currentTheme})=>(currentTheme.primaryColorText)};
`

export const MenuClose = styled(GrClose)`
    position: absolute;
    font-size: 4.5em;
    cursor: pointer;
    right: 0.5em;
    top: 0.5em;
    
`
//-------------------------------------------

export const Logo = styled.svg`
    margin-left: 2.5em;
    color: red;
    width: 70px;
    height: 70px;
    &:hover{
        color: ${({currentTheme})=>(currentTheme.hoverHeaderColor)}
    }
`
export const MenuBar = styled(GiHamburgerMenu)`
    cursor: pointer;
    font-size: 2.3em;
    margin-right: 0.9em;

    @media (min-width: 768px){
        display: none;
    }
`

export const NavContainer = styled.nav`
    margin-right: 2.5em;
    width: 500px;
    display: flex;
    justify-content:space-between;
    align-items: center;

    @media (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled(LinkS)`
    cursor: pointer;

`
export const SpanItem = styled.span`
    &:hover{
        color: ${({currentTheme})=>(currentTheme.hoverHeaderColor)}
    }
`

export const ButtonResume = styled.a`
    padding: 0.9em 1.2em;
    border: 1.5px solid ${({currentTheme})=>(currentTheme.headerBorderButtonColor)};
    border-radius: 8px;
    font-family: ${({currentTheme})=>(currentTheme.primaryFont)};
    text-decoration: none;
    color: ${({currentTheme})=>(currentTheme.headerButtonTextColor)};
    &:hover{
        background: ${({currentTheme})=>(currentTheme.hoverButtonColor)};
    }
`

// ------------Theme Picker----------------
export const ThemePickerContainer = styled.div`
    /* border: 2px dashed red; */
    user-select: none;
    position: relative;
    width: 177px;
    
`

export const ThemePickerBtn = styled.div`
    padding: 0.5em;
    cursor: pointer;
    border: 2px ${({currentTheme
    })=>(currentTheme.borderStyle)} ${({currentTheme})=>(currentTheme.borderColor)};
`

export const ThemePickerContent = styled.div`
    /* background: greenyellow; */
    position: absolute;
    width: 100%;
    border: 2px ${({currentTheme})=>(currentTheme.borderStyle)} ${({currentTheme})=>(currentTheme.borderColor)};
    background: ${({currentTheme})=>(currentTheme.headerThemePicker)};
    margin-top: 0.8em;
`

export const ThemePickerItem = styled.div`
    padding: 0.5em;
    cursor: pointer;
    color: ${({currentTheme})=>(currentTheme.headerColorText)};
    &:hover{
        background: ${({currentTheme})=>(currentTheme.hoverColor)}
    }
`



//-----------------------------------------