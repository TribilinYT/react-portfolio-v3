import React, {useState} from 'react'
 
import { ButtonResume, HeaderContainer, Logo, MenuBar, MenuClose, MobileButtonResume, MobileMenu, MobileMenuItem, NavContainer, NavItem, ThemePickerBtn, ThemePickerContainer, ThemePickerContent, ThemePickerItem } from './HeaderElements'
import resume from '../../../src/assets/files/resume.pdf'
import {themeData} from '../../data/themeData'


const Header = () => {
    const [currentTheme, setCurrentTheme] = useState("")
    const [isActive, setIsActive] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
        <MobileMenu toggleMenu={toggleMenu}>
            <MenuClose onClick={()=>{
                setToggleMenu(!toggleMenu)
                console.log(toggleMenu)
            }}/>
            <NavItem
                    to="about"
                    smooth={true}
                    duration={500}
                    offset= {2}
                    spy={true}
                    exact="true"
                >
                    <MobileMenuItem onClick={()=>{
                        setToggleMenu(!toggleMenu)
                    }}>
                        About
                    </MobileMenuItem>
                </NavItem>
                
                <NavItem
                    to="experience"
                    smooth={true}
                    offset= {2}
                    duration={500}
                    spy={true}
                    exact="true"
                >
                    <MobileMenuItem onClick={()=>{
                        setToggleMenu(!toggleMenu)
                    }}>
                        Experience
                    </MobileMenuItem>
                </NavItem>

                <NavItem
                    to="projects"
                    smooth={true}
                    offset= {2}
                    duration={500}
                    spy={true}
                    exact="true"                
                >
                    <MobileMenuItem onClick={()=>{
                        setToggleMenu(!toggleMenu)
                    }}>
                        Projects
                    </MobileMenuItem>
                </NavItem>

                <NavItem
                    to="contact"
                    smooth={true}
                    offset= {2}
                    duration={500}
                    spy={true}
                    exact="true"                
                >
                    <MobileMenuItem onClick={()=>{
                        setToggleMenu(!toggleMenu)
                    }}>
                        Contact
                    </MobileMenuItem>
                </NavItem>
               
                    <MobileMenuItem>
                        <MobileButtonResume href={resume} target="_blank" rel="noreferrer">
                            Resume
                        </MobileButtonResume>
                    </MobileMenuItem>
                   
             
        </MobileMenu>
       <HeaderContainer>
           <NavItem
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
           >
           <Logo>
               CL
           </Logo>
           </NavItem>

           
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
                                setIsActive(!isActive)
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
                    offset= {2}
                    spy={true}
                    exact="true"
                >
                    About
                </NavItem>
                
                <NavItem
                    to="experience"
                    smooth={true}
                    offset= {2}
                    duration={500}
                    spy={true}
                    exact="true"
                >
                    Experience
                </NavItem>

                <NavItem
                    to="projects"
                    smooth={true}
                    offset= {2}
                    duration={500}
                    spy={true}
                    exact="true"                
                >
                    Projects
                </NavItem>

                <NavItem
                    to="contact"
                    smooth={true}
                    offset= {2}
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
           <MenuBar onClick={()=> {
               setToggleMenu(!toggleMenu);
           }}/>
           
       </HeaderContainer>
       </>
    )
}

export default Header
