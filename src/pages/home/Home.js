import React, {useState, useContext} from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { MainContainer } from '../../components/Main/MainElements'
import { ProjectItemVideo, AboutBack, AboutContainer, AboutDescription, AboutFront, AboutItem, AboutList, AboutListContainer,  AboutP, AboutPicture, AboutTitle, ContactDescription, ContactMail, ContactSubtitle, ContactTitle, DescriptionBussines, DescriptionRol, ExperienceContent, ExperienceDescription, ExperienceJobItem, ExperienceJobs, ExperienceTitle, HomeButton, HomeDescription, HomeName, HomeTitle, ItemHead, ProjectContainerItem, ProjectItem, ProjectsContainer, ProjectsDown, ProjectSlider, ProjectsUp, ProjectTitle, RolFunctions, RolItem, RolTime, SectionAbout, SectionContact, SectionContainer, SectionExperience, SectionHome, ProjectItemTitle, ProjectItemDescription, ProjectTags, ProjectItemTag, ProjectItemDescriptionContainer, ProjectLinks, GithubLink, LiveLink, ProjectsTitle, SectionProjects, Link } from '../../components/Section/SectionElements'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Container } from './HomeElements'
import {experience} from "../../data/experience"
import photo1 from "../../assets/img/cl-child.jpg"
import photo2 from "../../assets/img/cl-adult.jpg"
import {apps} from "../../data/apps"
import {layouts} from "../../data/layouts"
import {fragments} from "../../data/fragments"
import ThemeContext from "../../context/themeContext"

const Home = () => {
    const [jobs, setJobs] = useState(experience)
    const [currentPickedJob, setCurrentPickedJob] = useState(experience[0])
    const [appsStatus, setAppsStatus] = useState(true)
    const [layoutsStatus, setLayoutsStatus] = useState(false)
    const [fragmentsStatus, setFragmentsStatus] = useState(false)
    const {currentTheme} = useContext(ThemeContext)
    
    return (
        <Container currentTheme={currentTheme}>
            <Header></Header>
            <MainContainer>

                <SectionContainer id="home">
                    <SectionHome>
                        <HomeTitle>
                            Hello World!
                        </HomeTitle>
                        <HomeName currentTheme={currentTheme}>
                            Cristhian Luna
                        </HomeName>
                        
                        <HomeDescription
                            currentTheme={currentTheme}
                        >
                            I'm a frontend developer
                            aimed to build (and design sometines web apps, static layouts)
                        </HomeDescription>

                        <HomeButton
                            currenttheme={currentTheme}
                            to="projects"
                            smooth={true}
                            duration={500}

                            spy={true}
                            exact="true"
                        >
                            Checkout my work!
                        </HomeButton>
                    </SectionHome>

                </SectionContainer>

                <SectionContainer id="about">
                    <SectionAbout>
                        <AboutContainer>
                            <AboutDescription>
                                <AboutTitle currentTheme={currentTheme}>
                                    About Me!
                                </AboutTitle>

                                <AboutP>
                                Hi, I am Cristhian Luna, a self-taught web developer since 2019. I am currently in my last year of university degree in Systems engineering.
                                Here are some few things that I have been working with:
                               
                                </AboutP>
                                <AboutP>
                                Hi, I am Cristhian Luna, a self-taught web developer since 2019. I am currently in my last year of university degree in Systems engineering.
                                Porro repudiandae libero quae vitae expedita quos repellendus, deserunt totam ratione modi eligendi asperiores, dolores similique. Aut mollitia praesentium sed accusantium vero, libero autem in consequuntur quos dolores consequatur corporis?
                                </AboutP>

                                <AboutP>
                                Here are some few things that I have been working with:
                                </AboutP>

                                <AboutListContainer>
                                    <AboutList>
                                        <AboutItem currentTheme={currentTheme}>JavaScript (ES6+)</AboutItem>
                                        <AboutItem currentTheme={currentTheme}>Node JS</AboutItem>
                                        <AboutItem currentTheme={currentTheme}>React JS</AboutItem>
                                    </AboutList>
                                    <AboutList>
                                        <AboutItem currentTheme={currentTheme}>Express JS</AboutItem>
                                        <AboutItem currentTheme={currentTheme}>Mongo DB</AboutItem>
                                    </AboutList>
                                </AboutListContainer>
                                
                            </AboutDescription>

                            <AboutPicture>
                                <AboutFront src={photo1}/>
                                <AboutBack src={photo2}/>
                            </AboutPicture> 

                        </AboutContainer>

                    </SectionAbout>
                </SectionContainer>
                
                <SectionContainer id="experience">
                    <SectionExperience>
                        <ExperienceTitle currentTheme={currentTheme}>
                            Where I`ve Worked
                        </ExperienceTitle>
                        <ExperienceContent>
                            <ExperienceJobs>
                                {jobs.map(job => (
                                    <ExperienceJobItem 
                                        currentTheme={currentTheme}
                                        status={job.status} key={job.id} onClick={()=>{
                                        setCurrentPickedJob(job)
                                        setJobs((prevState)=>(prevState.map(item =>(
                                                item.id === job.id ? {...item, status: true} : item
                                            ))
                                        ))
                                        setJobs((prevState)=>(prevState.map(item =>(
                                            item.id !== job.id ? {...item, status: false} : item
                                        ))
                                    ))
                                        console.log(job)
                                    }}>
                                        {job.business}
                                    </ExperienceJobItem>
                                ))}

                            </ExperienceJobs>
                            
                            <ExperienceDescription currentTheme={currentTheme}>
                                <DescriptionRol>
                                    {currentPickedJob.title} <DescriptionBussines currentTheme={currentTheme} >@{currentPickedJob.business}</DescriptionBussines>
                                </DescriptionRol>

                                <RolTime>
                                    {currentPickedJob.time}
                                </RolTime>

                                <RolFunctions>
                                    {currentPickedJob.description.map(job => (
                                        <RolItem 
                                        currentTheme={currentTheme}
                                            key={job.idDescription}>
                                        {job.text}
                                    </RolItem>
                                    ))}
                                    {/* <RolItem>
                                        Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery
                                    </RolItem> */}

                                </RolFunctions>
                            </ExperienceDescription>
                        </ExperienceContent>
                    </SectionExperience>
                </SectionContainer>

                <SectionProjects id="projects" appsStatus={appsStatus} layoutsStatus={layoutsStatus} fragmentsStatus={fragmentsStatus}>
                    
                    <ProjectsContainer>
                    <ProjectsTitle currentTheme={currentTheme}>Some Things that I've Built</ProjectsTitle>

                        <ProjectContainerItem currentTheme={currentTheme}>
                            <ItemHead currentTheme={currentTheme}>
                                <ProjectTitle onClick={()=>{setAppsStatus(!appsStatus)}}>Apps ({apps.length})</ProjectTitle>
                                {appsStatus ? <ProjectsUp onClick={()=>{
                                    setAppsStatus(!appsStatus)
                                }} /> : <ProjectsDown onClick={()=>{
                                    setAppsStatus(!appsStatus)
                                }} />}
                            </ItemHead>
                            
                            {appsStatus && <ProjectSlider itemsToShow={2}>
                                {apps.map(app=>(
                                    <ProjectItem  key={app.id}>
                                        <ProjectItemVideo src={app.video} autoPlay loop/>
                                        <ProjectItemDescriptionContainer>
                                            <ProjectItemTitle currentTheme={currentTheme}>{app.title}</ProjectItemTitle>
                                            <ProjectItemDescription currentTheme={currentTheme}>
                                                {app.description}
                                            </ProjectItemDescription>

                                            <ProjectTags>
                                                {app.techs.map(tech=>(
                                                    <ProjectItemTag currentTheme={currentTheme} key={tech.id}>
                                                    {tech.name}
                                                </ProjectItemTag>
                                                ))}
                                            </ProjectTags>
                                            <ProjectLinks>
                                                <Link currentTheme={currentTheme} href={app.links.github} target="_blank" rel="noreferrer">
                                                    <GithubLink />
                                                </Link>
                                                
                                                <Link currentTheme={currentTheme} href={app.links.live} target="_blank" rel="noreferrer">
                                                    <LiveLink />    
                                                </Link>
                                                
                                            </ProjectLinks>
                                        </ProjectItemDescriptionContainer>
                                    </ProjectItem>
                                ))}

                                </ProjectSlider>}

                        </ProjectContainerItem>

                        <ProjectContainerItem currentTheme={currentTheme}>
                            <ItemHead currentTheme={currentTheme}>
                                <ProjectTitle onClick={()=>{setLayoutsStatus(!layoutsStatus)}}>Layouts ({layouts.length})</ProjectTitle>
                                {layoutsStatus ? <ProjectsUp onClick={()=>{
                                    setLayoutsStatus(!layoutsStatus)
                                }} /> : <ProjectsDown onClick={()=>{
                                    setLayoutsStatus(!layoutsStatus)
                                }} />}
                            </ItemHead>

                            {layoutsStatus && <ProjectSlider itemsToShow={2}>
                                {apps.map(layout=>(
                                    <ProjectItem key={layout.id}>
                                        <ProjectItemVideo src={layout.video} autoPlay loop/>
                                        <ProjectItemDescriptionContainer>
                                            <ProjectItemTitle currentTheme={currentTheme}>{layout.title}</ProjectItemTitle>
                                            <ProjectItemDescription currentTheme={currentTheme}>
                                                {layout.description}
                                            </ProjectItemDescription>

                                            <ProjectTags>
                                                {layout.techs.map(tech=>(
                                                    <ProjectItemTag currentTheme={currentTheme} key={tech.id}>
                                                    {tech.name}
                                                </ProjectItemTag>
                                                ))}
                                            </ProjectTags>
                                            <ProjectLinks>
                                                <Link currentTheme={currentTheme} href={layout.links.github} target="_blank" rel="noreferrer">
                                                    <GithubLink currentTheme={currentTheme}/>
                                                </Link>
                                                
                                                <Link currentTheme={currentTheme} href={layout.links.live} target="_blank" rel="noreferrer">
                                                    <LiveLink />    
                                                </Link>
                                                
                                            </ProjectLinks>
                                        </ProjectItemDescriptionContainer>
                                    </ProjectItem>
                                ))}

                                </ProjectSlider>}
                        </ProjectContainerItem>
                        
                        <ProjectContainerItem currentTheme={currentTheme}>
                            <ItemHead currentTheme={currentTheme}>
                                <ProjectTitle onClick={()=>{setFragmentsStatus(!fragmentsStatus)}}>Fragments ({fragments.length})</ProjectTitle>
                                {fragmentsStatus ? <ProjectsUp onClick={()=>{
                                    setFragmentsStatus(!fragmentsStatus)
                                }} /> : <ProjectsDown onClick={()=>{
                                    setFragmentsStatus(!fragmentsStatus)
                                }} />}
                            </ItemHead>

                            {fragmentsStatus && <ProjectSlider itemsToShow={2}>
                                {apps.map(fragment=>(
                                    <ProjectItem key={fragment.id}>
                                        <ProjectItemVideo src={fragment.video} autoPlay loop/>
                                        <ProjectItemDescriptionContainer>
                                            <ProjectItemTitle currentTheme={currentTheme}>{fragment.title}</ProjectItemTitle>
                                            <ProjectItemDescription currentTheme={currentTheme}>
                                                {fragment.description}
                                            </ProjectItemDescription>

                                            <ProjectTags>
                                                {fragment.techs.map(tech=>(
                                                    <ProjectItemTag currentTheme={currentTheme}  key={tech.id}>
                                                    {tech.name}
                                                </ProjectItemTag>
                                                ))}
                                            </ProjectTags>
                                            <ProjectLinks>
                                                <Link currentTheme={currentTheme} href={fragment.links.github} target="_blank" rel="noreferrer">
                                                    <GithubLink />
                                                </Link>
                                                
                                                <Link currentTheme={currentTheme} href={fragment.links.live} target="_blank" rel="noreferrer">
                                                    <LiveLink/>    
                                                </Link>
                                                
                                            </ProjectLinks>
                                        </ProjectItemDescriptionContainer>
                                    </ProjectItem>
                                ))}

                                </ProjectSlider>}
                        </ProjectContainerItem>

                    </ProjectsContainer>
                </SectionProjects>
                
                <SectionContainer id="contact">
                        <SectionContact>
                            <ContactTitle>What's Next?</ContactTitle>
                            <ContactSubtitle currentTheme={currentTheme}>Contact Me!</ContactSubtitle>
                            <ContactDescription>
                                I'm actually looking for new opportunities so it will be nice to receive your proposals in my inbox. I'll try my best to reply you.
                            </ContactDescription>
                            <ContactMail currentTheme={currentTheme}  href="mailto:jobs.cluna@gmail.com">Say Hi!</ContactMail>
                        </SectionContact>
                </SectionContainer>
            </MainContainer>
            <Sidebar />
            <Footer/>
        </Container>
    )
}

export default Home
