import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll';

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 100px;
    max-width:100%; 
    background-color: aqua;
    position: sticky;
    top:0;
    margin-top: -102px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`

`

export const NavContainer = styled.nav`

`

export const NavItem = styled(LinkS)`
    cursor: pointer;
`
export const ButtonResume = styled.a`

`

// ------------Theme Picker----------------
export const ThemePickerContainer = styled.div`
    border: 2px dashed red;
    user-select: none;
    position: relative;
`

export const ThemePickerBtn = styled.div`
    background: blue;
    cursor: pointer;
`

export const ThemePickerContent = styled.div`
    background: greenyellow;
    position: absolute;
`

export const ThemePickerItem = styled.div``



//-----------------------------------------