import volanti from "../assets/videos/layouts/volanti_layout.mp4"
import dolla from "../assets/videos/layouts/dolla_layout.mp4"
import valorant from "../assets/videos/layouts/valorant_login_page_layout.mp4"

export  const layouts = [
    {
        id: 1,
        title: "Volanti - Layout",
        description: "A single page aplication for flight low cost bussines.",
        techs:[
            {
                id:1,
                name: "Styled-components"
            },
            {
                id:2,
                name: "React"
            },
            {
                id:3,
                name: "Node JS"
            },
        ],
        video: volanti,
        links:{
            live: "https://reverent-swanson-845540.netlify.app/",
            github: "https://github.com/TribilinYT/volanti-react-responsive-frontpage-devcluna"
        }
    },

    {
        id: 2,
        title: "Dolla - Layout",
        description: "A single page aplication for Banking business sevices.",
        techs:[
            {
                id:1,
                name: "Styled-components"
            },
            {
                id:2,
                name: "React"
            },
            {
                id:3,
                name: "Node JS"
            },
        ],
        video: dolla,
        links:{
            live: "https://competent-franklin-7f8158.netlify.app",
            github: "https://github.com/TribilinYT/dolla-react-responsive-frontpage-devcluna"
        }
    },

    {
        id: 3,
        title: "Valorant Login Page",
        description: "A login page clone based on Riot game called Valorant",
        techs:[
            {
                id:1,
                name: "CSS 3"
            },
            {
                id:2,
                name: "Html"
            },
        ],
        video: valorant,
        links:{
            live: "https://competent-franklin-7f8158.netlify.app",
            github: "https://github.com/TribilinYT/dolla-react-responsive-frontpage-devcluna"
        }
    },
    
]