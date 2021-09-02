import React from 'react'
import {Codepen, EmailLink, Github, Line, Linkedin, SidebarEmail, SidebarSocial, SocialLink, Twitter } from './SidebarElements'
import {FiGithub, FiTwitter, FiLinkedin, FiCodepen} from 'react-icons/fi'

const Sidebar = () => {
    return (
        <>
            <SidebarSocial >
                <SocialLink>
                    <Github/>
                    <Twitter/>
                    <Linkedin/>
                    <Codepen/>
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
