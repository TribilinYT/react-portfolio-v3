import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const SectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: blue;
  border-bottom: 2px dashed  lightcyan;
  position: relative;
`

//---------------Section Home-------------
export const SectionHome = styled.div`
  margin-top: 103px;
  background: lightcoral;
  position: absolute;
  width: 100%;
  height: calc(100% - 103px);
  display: flex;
  flex-direction: column;
  justify-content:center;
  
`

export const HomeTitle = styled.h1`
  font-size: 20px;
  margin-left: 50px;
`

export const HomeName = styled.h2`
margin: 0;
  font-size: 65px;
  margin-left: 50px;
`

export const HomeDescription = styled.p`
  max-width: 450px;
  font-size: 20px ;
  margin-left: 50px;
`

export const HomeButton = styled(LinkS)`
  display: flex;
  align-items: center;
  border: 2px solid blue;
  width: clamp(90px, 150px, 250px);
  padding: 1.2em;
  margin-left: 50px;
  border-radius: 4px;
  cursor: pointer;
`
//----------------------------------------

//---------------Section About------------
export const SectionAbout = styled.div`
  margin-top: 103px;
  background: lightcoral;
  position: absolute;
  width: 100%;
  height: calc(100% - 103px);
  display: flex;
  align-items: center;
  justify-content:center;
`

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px){
    flex-direction: column;
  }
`

export const AboutDescription = styled.div`
  margin: 1.5em;
  max-width:50%;

  @media only screen and (max-width: 768px){
    max-width:100%;
  }
`

export const AboutTitle = styled.h1``

export const AboutP = styled.p``



export const AboutPicture = styled.div`
  width: 230px;
  height: 250px;
  background: lightcyan;
  margin: 1.5em;
  position: relative;
  border-radius: 0.5em;
  transition: all 0.9s ease;
  transform-style: preserve-3d;

  @media only screen and (max-width: 768px){
    display: none;
  }

  :hover{
    transform: rotateY(180deg);
    transition: all 0.9s ease; 
  }
`

export const AboutFront = styled.img`
  position:  absolute;
  width: 100%;
  height: 100%;
  background-color: red;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border:none;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
`

export const AboutBack = styled.img`
  position: absolute;
  transform: rotateY(180deg);
  height: 100%;
  width: 100%;
  background: blue;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border:none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
`

export const AboutListContainer = styled.div`
  display: flex;
`

export const AboutList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 0.8em;
`

export const AboutItem= styled.li`
 position: relative;
  padding-left: 0.9em;
  padding-bottom: 1.2em;
  

  &::before{
    content: "";
    margin-top: 0.4em;
    position: absolute;
    left: 0;

    width: 0; 
    height: 0; 
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent; 
  
    border-left:7px solid blue; 
  }
`

//----------------------------------------



//--------------Section Experience --------
export const SectionExperience = styled.div`
  margin-top: 103px;
  background: lightcoral;
  position: absolute;
  width: 100%;
  height: calc(100% - 103px);
  display: flex;
  flex-direction: column;
  justify-content:center;

` 
export const ExperienceTitle = styled.h2`
  user-select: none;
  padding: 0.5em 1.2em;
  margin-bottom: 0;
`

export const ExperienceContent = styled.div`
  display: flex;
  height: 300px;
  padding: 0.5em 1.2em;
  
  @media only screen and (max-width: 768px){
    flex-direction: column;
  }
`

export const ExperienceJobs = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media only screen and (max-width: 768px){
    flex-direction: row;
  }
`

export const ExperienceJobItem = styled.button`
  height: 100%;
  padding: 0 0.9em;
  cursor: pointer;
  font-size: 1.2em;
  background: ${({status})=>(status ? "rgba(180, 180, 5, 0.2)" : "transparent")};
  outline: none;
  border: none;
  border-left: ${({status})=> (status ? "2px solid red" : "2px solid blue")};


  @media only screen and (max-width: 768px){
    width: 100%;
    border-left: none ;
    border-bottom: 2px solid blue;
  }

  &:hover{
    background: rgba(180, 180, 5, 0.2);
  }

`

export const ExperienceDescription = styled.div`
  max-width:100%;
  outline: 2px solid transparent;
  padding: 0.5em;

  &:hover{
    outline: 2px dashed blue;
  }

  @media only screen and (max-width: 768px){
    margin-top: 1.2em;
  }
`

export const DescriptionRol = styled.h3`
  margin-bottom: 0;
  margin-top: 0.05em;
`

export const DescriptionBussines = styled.span`
  color: red;
  cursor: pointer;
  user-select: none;
`

export const RolTime = styled.p`
  margin-top: 0;
`

export const RolFunctions = styled.ul`
  list-style: none;
  padding: 0;

`

export const RolItem = styled.li`
  position: relative;
  padding-left: 0.9em;
  padding-bottom: 1.2em;
  

  &::before{
    content: "";
    margin-top: 0.5em;
    position: absolute;
    left: 0;

    width: 0; 
    height: 0; 
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent; 
  
    border-left:7px solid blue; 
  }


`
//----------------------------------

//---------Section Contact----------
export const SectionContact = styled.div`
  margin-top: 103px;
  background: lightcoral;
  position: absolute;
  width: 100%;
  height: calc(100% - 103px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
` 

export const ContactTitle = styled.h2`
  font-size: 20px;
`

export const ContactSubtitle = styled.h3`
  font-size: clamp(1.5em, 60px, 6.5em);
  margin: 0.09em;
`

export const ContactDescription = styled.p`
  font-size: 20px;
  margin: 0.5em auto;
  width: clamp(60%, 500px, 95% );
  text-align: center;
`

export const ContactMail = styled.a`
  font-size: 20px;
  text-decoration: none;
  border: 2px solid red;
  padding: 0.5em 1.5em;
  border-radius: 6px;
  user-select: none;
  margin-top: 0.5em;
  cursor: pointer;
`
//-----------------------------