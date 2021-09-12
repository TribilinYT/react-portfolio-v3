import React, {useContext} from 'react'
import {Codepen, EmailLink, Github, Line, Linkedin, SidebarEmail, SidebarSocial, SocialLink, Twitter } from './SidebarElements'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/themeContext'


const Sidebar = () => {
    const {currentTheme} = useContext(ThemeContext)
    return (
        <>
            <SidebarSocial currentTheme={currentTheme}>
                <SocialLink>
                    <Link to={{pathname: "https://github.com/TribilinYT"}} target="_blank">
                        <Github currenttheme={currentTheme}/>
                    </Link>
                    
                    <Link to={{pathname:"https://twitter.com/DevCLuna"}} target="_blank">
                        <Twitter currenttheme={currentTheme}/>
                    </Link>
                    
                    <Link to={{pathname:"https://www.linkedin.com/feed/"}} target="_blank">
                        <Linkedin currenttheme={currentTheme}/>
                    </Link>

                    <Link to={{pathname:"https://codepen.io/DevCluna"}} target="_blank">
                        <Codepen currenttheme={currentTheme}/>
                    </Link>
                </SocialLink>
                <Line currentTheme={currentTheme}/>
            </SidebarSocial>

            <SidebarEmail currentTheme={currentTheme}>
                <EmailLink currentTheme={currentTheme} href="mailto:jobs.cluna@gmail.com">
                    jobs.cluna@gmail.com
                </EmailLink>

                <Line currentTheme={currentTheme}/>
            </SidebarEmail>
        </>
    )
}

export default Sidebar
