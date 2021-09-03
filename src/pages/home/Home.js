import React, {useState} from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { MainContainer } from '../../components/Main/MainElements'
import { AboutBack, AboutContainer, AboutDescription, AboutFront, AboutItem, AboutList, AboutListContainer,  AboutP, AboutPicture, AboutTitle, ContactDescription, ContactMail, ContactSubtitle, ContactTitle, DescriptionBussines, DescriptionRol, ExperienceContent, ExperienceDescription, ExperienceJobItem, ExperienceJobs, ExperienceTitle, HomeButton, HomeDescription, HomeName, HomeTitle, RolFunctions, RolItem, RolTime, SectionAbout, SectionContact, SectionContainer, SectionExperience, SectionHome } from '../../components/Section/SectionElements'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Container } from './HomeElements'
import {experience} from "../../data/experience"
import photo1 from "../../assets/img/cl-child.jpg"
import photo2 from "../../assets/img/cl-adult.jpg"

const Home = () => {
    const [jobs, setJobs] = useState(experience)
    const [currentPickedJob, setCurrentPickedJob] = useState(experience[0])
    
    return (
        <Container>
            <Header></Header>
            <MainContainer>

                <SectionContainer id="home">
                    <SectionHome>
                        <HomeTitle>
                            Hello World!
                        </HomeTitle>
                        <HomeName>
                            Cristhian Luna
                        </HomeName>
                        
                        <HomeDescription>
                            I'm a frontend developer
                            aimed to build (and design sometines web apps, static layouts)
                        </HomeDescription>

                        <HomeButton
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset= {2}
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
                                <AboutTitle>
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
                                        <AboutItem>JavaScript (ES6+)</AboutItem>
                                        <AboutItem>Node JS</AboutItem>
                                        <AboutItem>React JS</AboutItem>
                                    </AboutList>
                                    <AboutList>
                                        <AboutItem>Express JS</AboutItem>
                                        <AboutItem>Mongo DB</AboutItem>
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
                        <ExperienceTitle>
                            Where I`ve Worked
                        </ExperienceTitle>
                        <ExperienceContent>
                            <ExperienceJobs>
                                {jobs.map(job => (
                                    <ExperienceJobItem status={job.status} key={job.id} onClick={()=>{
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
                            
                            <ExperienceDescription>
                                <DescriptionRol>
                                    {currentPickedJob.title} <DescriptionBussines>@{currentPickedJob.business}</DescriptionBussines>
                                </DescriptionRol>

                                <RolTime>
                                    {currentPickedJob.time}
                                </RolTime>

                                <RolFunctions>
                                    {currentPickedJob.description.map(job => (
                                        <RolItem key={job.idDescription}>
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

                <SectionContainer id="projects">
                    sasdsad
                </SectionContainer>
                
                <SectionContainer id="contact">
                        <SectionContact>
                            <ContactTitle>What's Next?</ContactTitle>
                            <ContactSubtitle>Contact Me!</ContactSubtitle>
                            <ContactDescription>
                                Im actually looking for new opportunities so it will be nice to receive your proposals in my inbox. I'll try my best to reply you.
                            </ContactDescription>
                            <ContactMail href="mailto:jobs.cluna@gmail.com">Say Hi!</ContactMail>
                        </SectionContact>
                </SectionContainer>
            </MainContainer>
            <Sidebar />
            <Footer/>
        </Container>
    )
}

export default Home
