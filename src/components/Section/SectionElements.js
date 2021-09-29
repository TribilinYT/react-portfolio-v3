import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import Carousel from 'react-elastic-carousel'
import {FiGithub, FiExternalLink} from 'react-icons/fi'
import Typed from 'react-typed'


export const SectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: blue; */
  position: relative;
`                                                                                                                        

//---------------Section Home-------------
export const SectionHome = styled.div`
  margin-top: 103px;
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
  color: ${({currentTheme})=>(currentTheme.primaryColor)};
`

export const HomeRolP = styled(Typed)`
  font-size: clamp(1.5em, 90px, 7.5em);
  margin-top: 0;
  margin-left: 50px;
  margin-bottom: 0;
`

export const HomeDescription = styled.p`
  max-width: 450px;
  font-size: 20px ;
  margin-left: 50px;
  color: ${({currentTheme})=>(currentTheme.secondaryColorText)};
`

export const HomeButton = styled(LinkS)`
  display: flex;
  align-items: center;
  border: 1.5px solid ${({currenttheme})=>(currenttheme.primaryColor)};
  color: ${({currenttheme})=>(currenttheme.primaryColor)};
  width: clamp(90px, 150px, 250px);
  padding: 1.2em;
  margin-left: 50px;
  border-radius: 4px;
  cursor: pointer;

  &:hover{
    background: ${({currenttheme})=>(currenttheme.hoverButtonColor)};
  }
`
//----------------------------------------

//---------------Section About------------
export const SectionAbout = styled.div`
  margin-top: 103px;
  /* background: lightcoral; */
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
  max-width: 69%;

  @media only screen and (max-width: 768px){
    max-width:100%;
  }
`

export const AboutTitle = styled.h1`
  color: ${({currentTheme})=>(currentTheme.primaryColor)};
`

export const AboutP = styled.p``

export const AboutSpan = styled.span`
  color: ${({currentTheme})=>(currentTheme.primaryColor)};
  font-weight: bold;
  cursor: pointer;
`


export const AboutPicture = styled.div`
  width: 250px;
  height: 280px;
  /* background: lightcyan; */
  margin: 1.5em;
  position: relative;
  border-radius: 0.5em;
  transition: all 0.9s ease;
  transform-style: preserve-3d;

  filter: saturate(30%);

  @media only screen and (max-width: 768px){
    display: none;
  }

  :hover{
    filter: saturate(70%);
    transform: translateY(-12px);
    transition: all 0.9s ease; 
  }
`

export const AboutFront = styled.img`
  position:  absolute;
  height: clamp( 150px, 100%, 380px);
  width: clamp( 150px, 100%, 380px);
  /* background-color: red; */
  /* -webkit-backface-visibility: hidden;
  backface-visibility: hidden; */
  border:none;
  object-fit: cover;
  cursor: pointer;
  border-radius: 6px;
`

export const AboutBack = styled.img`
  position: top;
  transform: rotateY(180deg);
  height: clamp( 150px, 100%, 350px);
  width: clamp( 150px, 100%, 350px);
  /* background: blue; */
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
  cursor: pointer;

  &:hover{
    color: ${({currentTheme})=>(currentTheme.primaryColor)}
  }

  &::before{
    content: "";
    margin-top: 0.4em;
    position: absolute;
    left: 0;

    width: 0; 
    height: 0; 
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent; 
  
    border-left:7px solid ${({currentTheme})=>(currentTheme.primaryColor)}; 
  }
`

//----------------------------------------

//---------Section Projects---------------
export const SectionProjects = styled.div`
  /* background: green; */
  width: 100%;
  height: ${({appsStatus, layoutsStatus, fragmentsStatus})=>{
    if((appsStatus && !layoutsStatus && !fragmentsStatus) || (!appsStatus && layoutsStatus && !fragmentsStatus) || (!appsStatus && !layoutsStatus && fragmentsStatus)){
      return "750px"
    }else if(!appsStatus && !layoutsStatus && !fragmentsStatus){
      return "450px"
    }else if ((appsStatus && layoutsStatus && !fragmentsStatus) || (!appsStatus && layoutsStatus && fragmentsStatus) || (appsStatus && !layoutsStatus && fragmentsStatus)){
      return "1100px"
    }
    else if(appsStatus && layoutsStatus && fragmentsStatus){
      return "1400px"
    }
    }};
  position: relative;
`

export const ProjectsTitle = styled.h2`
  margin-left: 1.2em;
  color: ${({currentTheme})=>(currentTheme.primaryColor)};
`

export const ProjectsContainer = styled.div`
  /* background: lightcoral; */
  position: absolute;
  margin-top: 103px;
  width: 100%;
  height: 100%;
`

export const ProjectContainerItem = styled.div`
  margin: 1.5em;
  border: 2px ${({currentTheme})=>(currentTheme.borderStyle)} ${({currentTheme})=>(currentTheme.primaryColor)};
  padding: 0.3em 1.5em 0.8em 1.5em;
`

export const ItemHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({currentTheme})=>(currentTheme.primaryColor)};
  
`

export const NoteDiv = styled.div`
  margin-top: 0.9em;
`

export const NoteSpan = styled.span`
  color: ${({currentTheme})=>(currentTheme.primaryColor)};
  font-weight: bold;
`

export const ProjectTitle = styled.h3`
  cursor: pointer;
  user-select: none;
  margin: 0;
`

export const ProjectsUp = styled(BsChevronUp)`
  cursor: pointer;
  font-size: 35px;
  
`

export const ProjectsDown = styled(BsChevronDown)`
  cursor: pointer;
  font-size: 35px;
`

export const ProjectSlider = styled(Carousel)`
  margin-top: 1.5em;
  
`

export const ProjectItem = styled.div`
  width: 350px;
  height: 250px;
  cursor: pointer;
  position: relative;
  transition: all 0.5s ease;
  
  &:hover{
    transform: scale(1.08);
  }
`

export const ProjectItemVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
  position: absolute;
  transition: all 0.5s ease;
  ${ProjectItem}:hover &{
    visibility: none;
    filter: blur(0.2em) grayscale(100%) opacity(50%);
  }
  

`

export const ProjectItemDescriptionContainer = styled.div`
  position: absolute;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  justify-content: flex-end;
  margin: 1.2em;
  bottom: 0;
  

  ${ProjectItem}:hover &{
    visibility: visible;

  }
`

export const ProjectItemTitle = styled.a`
  text-decoration: none;
  font-weight: bolder;
  font-size: 1.2em;
  margin-bottom: 0;
  color: ${({currentTheme})=>(currentTheme.primaryColor)};
  text-shadow: 0.5px 0.5px black ;
`

export const ProjectItemDescription = styled.p`
  text-align: right;
  color: ${({currentTheme})=>(currentTheme.colorTextProjects)};
  text-shadow: 1.2px 1.2px black ;

`

export const ProjectTags = styled.div`
  display: flex;
  margin-bottom: 0.8em;
  
`

export const ProjectItemTag = styled.div`
  margin-right: 0.5em;
  font-weight: bold;
  color: ${({currentTheme})=>(currentTheme.colorTextProjects)};
  text-shadow: 1px 1px black ;
  &:hover{
    color: ${({currentTheme})=>(currentTheme.primaryColor)};
  }
`

export const ProjectLinks = styled.div`
  display: flex;
`
export const Link = styled.a`
  color: ${({currentTheme})=>(currentTheme.colorTextProjects )};
  &:hover{
    color: ${({currentTheme})=>(currentTheme.primaryColor)}
  }
`

export const GithubLink = styled(FiGithub)`
  font-size: 1.2em;
  margin-right: 0.5em;
  text-shadow: 10px 10px red;
`
export const LiveLink = styled(FiExternalLink)`
  font-size: 1.3em;
  
`

//----------------------------------------


//--------------Section Experience --------
export const SectionExperience = styled.div`
  margin-top: 103px;
  /* background: lightcoral; */
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
  color: ${({currentTheme})=>(currentTheme.primaryColor)};
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
  color: ${({status, currentTheme})=>( status ? `${currentTheme.primaryColor}` : `${currentTheme.secondaryColorText}`)};
  background: ${({currentTheme})=>(currentTheme.bgColor)};
  outline: none;
  border: none;
  border-left: ${({status, currentTheme})=> (status ? `2.5px solid ${currentTheme.primaryColor}` : `2.5px solid ${currentTheme.primaryColorText}`)};


  @media only screen and (max-width: 768px){
    width: 100%;
    border-left: none ;
    border-bottom: ${({status, currentTheme})=> (status ? `2px solid ${currentTheme.primaryColor}` : `2px solid ${currentTheme.primaryColorText}`)};
  }

  &:hover{
    background: ${({currentTheme})=>(currentTheme.hoverColor)};
    color: ${({currentTheme})=>(currentTheme.primaryColor)}
  }

`

export const ExperienceDescription = styled.div`
  max-width:100%;
  outline: 2px solid transparent;
  padding: 0.5em;

  &:hover{
    outline: 2px ${({currentTheme})=>(currentTheme.borderStyle)} ${({currentTheme})=>(currentTheme.primaryColor)};
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
  color: ${({currentTheme})=>(currentTheme.primaryColor)};
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
  color: ${({currentTheme})=>(currentTheme.secondaryColorText)};
  

  &::before{
    content: "";
    margin-top: 0.5em;
    position: absolute;
    left: 0;

    width: 0; 
    height: 0; 
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent; 
  
    border-left:7px solid ${({currentTheme})=>(currentTheme.primaryColor)}; 
  }


`
//----------------------------------

//---------Section Contact----------
export const SectionContact = styled.div`
  margin-top: 103px;
  /* background: lightcoral; */
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
  color: ${({currentTheme})=>(currentTheme.primaryColor)};
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
  border: 1.5px solid ${({currentTheme})=>(currentTheme.primaryColor)};
  color: ${({currentTheme})=>(currentTheme.primaryColor)};
  padding: 0.5em 1.5em;
  border-radius: 6px;
  user-select: none;
  margin-top: 0.5em;
  cursor: pointer;

  &:hover{
    background: ${({currentTheme})=>(currentTheme.hoverButtonColor)};
  }
`
//-----------------------------