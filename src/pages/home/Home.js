import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { MainContainer } from '../../components/Main/MainElements'
import Section from '../../components/Section/Section'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Container } from './HomeElements'

const Home = () => {
    return (
        <Container>
            <Header></Header>
            <MainContainer>
                <Section id="about">About</Section>
                <Section id="experience">Experience</Section>
                <Section id="projects">Projects</Section>
                <Section id="contact"><p>s</p></Section>
            </MainContainer>
            <Sidebar />
            <Footer/>
        </Container>
    )
}

export default Home
