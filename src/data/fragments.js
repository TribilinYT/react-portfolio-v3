import video1 from "../assets/videos/fragments/cyberpunk_fragment.mp4"
import video3 from "../assets/videos/fragments/dropdown_fragment.mp4"
import video2 from '../assets/videos/fragments/social_media_navbar_fragment.mp4'


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
        title: "Social Media Nav",
        description: `A simple Navbar custom with different social media choices `,
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
        video: video2,
        links:{
            live: "https://codepen.io/DevCluna/full/oNGRELm",
            github: "https://codepen.io/DevCluna/pen/oNGRELm"
        }
    },

    {
        id: 3,
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
        video: video3,
        links:{
            live: "https://react-simple-select-dropdown.netlify.app",
            github: "https://github.com/devCluna/react-simple-select-dropdown"
        }
    },
    
]