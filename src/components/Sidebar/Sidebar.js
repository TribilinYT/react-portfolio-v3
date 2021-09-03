import React from 'react'
import {Codepen, EmailLink, Github, Line, Linkedin, SidebarEmail, SidebarSocial, SocialLink, Twitter } from './SidebarElements'
import {Link} from 'react-router-dom'


const Sidebar = () => {
    return (
        <>
            <SidebarSocial >
                <SocialLink>
                    <Link to={{pathname: "https://github.com/TribilinYT"}} target="_blank">
                        <Github/>
                    </Link>
                    
                    <Link to={{pathname:"https://twitter.com/DevCLuna"}} target="_blank">
                        <Twitter/>
                    </Link>
                    
                    <Link to={{pathname:"https://www.linkedin.com/feed/"}} target="_blank">
                        <Linkedin/>
                    </Link>

                    <Link to={{pathname:"https://codepen.io/DevCluna"}} target="_blank">
                        <Codepen/>
                    </Link>
                </SocialLink>
                <Line/>
            </SidebarSocial>

            <SidebarEmail>
                <EmailLink href="mailto:jobs.cluna@gmail.com">
                    jobs.cluna@gmail.com
                </EmailLink>

                <Line/>
            </SidebarEmail>
        </>
    )
}

export default Sidebar
