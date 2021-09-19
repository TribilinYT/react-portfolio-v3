import video1 from "../assets/videos/fragments/cyberpunk_fragment.mp4"
import video2 from "../assets/videos/fragments/dropdown_fragment.mp4"


export  const fragments = [
    {
        id: 1,
        title: "CyberPunk - Logo",
        description: `A single Glitched Text, based on CD Project Red's game "CyberPunk 2077" `,
        hoverStatus: false,
        techs:[
            {
                id:1,
                name: "HTML"
            },
            {
                id:2,
                name: "CSS 3"
            },
        ],
        video: video1,
        links:{
            live: "https://cyberpunk-logo.netlify.app/",
            github: "https://github.com/TribilinYT/CyberPunkLogo"
        }
    },

    {
        id: 2,
        title: "Dropdown",
        description: `A simple dropdown menu for multiple porpouses. `,
        hoverStatus: false,
        techs:[
            {
                id:1,
                name: "HTML"
            },
            {
                id:2,
                name: "CSS 3"
            },
            {
                id:3,
                name: "React JS"
            },
        ],
        video: video2,
        links:{
            live: "https://react-simple-select-dropdown.netlify.app",
            github: "https://github.com/devCluna/react-simple-select-dropdown"
        }
    },
    
]