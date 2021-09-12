import React, {useState, useContext} from 'react'
 
import { ButtonResume, HeaderContainer, Logo, MenuBar, MenuClose, MobileButtonResume, MobileMenu, MobileMenuItem, NavContainer, NavItem, SpanItem, ThemePickerBtn, ThemePickerContainer, ThemePickerContent, ThemePickerItem } from './HeaderElements'
import resume from '../../../src/assets/files/resume.pdf'
import {themeData} from '../../data/themeData'
import ThemeContext  from '../../context/themeContext'


const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    const {currentTheme, setCurrentTheme} = useContext(ThemeContext)
    
    console.log(currentTheme.colorMobileMenu)
    return (
        <>
        <MobileMenu toggleMenu={toggleMenu} currentTheme={currentTheme}>
            <MenuClose 
                
                onClick={()=>{
                setToggleMenu(!toggleMenu)
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
                    offset= {3}
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
                        <MobileButtonResume 
                            href={resume} 
                            target="_blank" 
                            rel="noreferrer"
                            currentTheme={currentTheme}
                            >
                                Resume
                        </MobileButtonResume>
                    </MobileMenuItem>
                   
             
        </MobileMenu>
        
       <HeaderContainer
        currentTheme={currentTheme}
       >
           <NavItem
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
           >
            <Logo currentTheme={currentTheme}>
                CL
            </Logo>
           </NavItem>

           
           <ThemePickerContainer currentTheme={currentTheme}>
               <ThemePickerBtn currentTheme={currentTheme} onClick={()=>setIsActive(!isActive)}>
                    <span style={{fontWeight: "bold"}}>Theme:</span> {currentTheme.nameTheme|| "Choose Theme"}
               </ThemePickerBtn>
               {isActive && (<ThemePickerContent currentTheme={currentTheme}>
                    {themeData.map(theme=>(
                        <ThemePickerItem 
                            currentTheme={currentTheme}
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

           
           <NavContainer
            currentTheme={currentTheme}
           >
                <NavItem
                    to="about"
                    smooth={true}
                    duration={500}
                    offset= {2}
                    spy={true}
                    exact="true"
                >
                    <SpanItem currentTheme={currentTheme}>
                        About
                    </SpanItem>
                </NavItem>
                
                <NavItem
                    to="experience"
                    smooth={true}
                    offset= {2}
                    duration={500}
                    spy={true}
                    exact="true"
                >
                    <SpanItem currentTheme={currentTheme}>
                        Experience
                    </SpanItem>
                </NavItem>

                <NavItem
                    to="projects"
                    smooth={true}
                    offset= {2}
                    duration={500}
                    spy={true}
                    exact="true"                
                >
                    <SpanItem currentTheme={currentTheme}>
                        Projects
                    </SpanItem>
                </NavItem>

                <NavItem
                    to="contact"
                    smooth={true}
                    offset= {2}
                    duration={500}
                    spy={true}
                    exact="true"                
                >
                    <SpanItem currentTheme={currentTheme}>
                        Contact
                    </SpanItem>
                </NavItem>
                <ButtonResume
                    currentTheme={currentTheme}
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
