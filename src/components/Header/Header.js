import React, {useState} from 'react'
 
import { ButtonResume, HeaderContainer, Logo, NavContainer, NavItem, ThemePickerBtn, ThemePickerContainer, ThemePickerContent, ThemePickerItem } from './HeaderElements'
import resume from '../../../src/assets/files/resume.pdf'
import {themeData} from '../../data/themeData'

const Header = () => {
    const [currentTheme, setCurrentTheme] = useState("")
    const [isActive, setIsActive] = useState(false)
    console.log(themeData)
    return (
       <HeaderContainer>
           <Logo>
               Cristhian Luna
           </Logo>

           <ThemePickerContainer>
               <ThemePickerBtn onClick={()=>setIsActive(!isActive)}>
                    {currentTheme.nameTheme|| "Choose One"}
               </ThemePickerBtn>
               {isActive && (<ThemePickerContent>
                    {themeData.map(theme=>(
                        <ThemePickerItem 
                            key={theme.idTheme}
                            onClick={()=>{
                                setCurrentTheme(theme)
                                console.log(currentTheme)
                            }}
                        >
                        {theme.nameTheme}
                        </ThemePickerItem>
                    ))}
               </ThemePickerContent>)}
           </ThemePickerContainer>

           
           <NavContainer>
                <NavItem
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                >
                    About
                </NavItem>
                
                <NavItem
                    to="experience"
                    smooth={true}
                    offset= {5}
                    duration={500}
                    spy={true}
                    exact="true"
                >
                    Experience
                </NavItem>

                <NavItem
                    to="projects"
                    smooth={true}
                    offset= {5}
                    duration={500}
                    spy={true}
                    exact="true"                
                >
                    Projects
                </NavItem>

                <NavItem
                    to="contact"
                    smooth={true}
                    offset= {5}
                    duration={500}
                    spy={true}
                    exact="true"                
                >
                    Contact
                </NavItem>
                <ButtonResume
                    href={resume}
                    target="_blank"
                >
                    Resume
                </ButtonResume>
           </NavContainer>
       </HeaderContainer>
    )
}

export default Header
