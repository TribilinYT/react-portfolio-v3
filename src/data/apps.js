import ChatBud from "../assets/videos/apps/chatbud_app.mp4"
import SpotifyClient from "../assets/videos/apps/spotify_client_app.mp4"
import GoogleKeep from "../assets/videos/apps/google_keep_app.mp4"

export  const apps = [
    {
        id: 1,
        title: "ChatBud - ChatApp",
        description: "A MERN application, built to carry out encrypted messages, between users anonymously. ",
        techs:[
            {
                id:1,
                name: "React"
            },
            {
                id:2,
                name: "Express"
            },
            {
                id:3,
                name: "MongoDB"
            },
           
            {
                id:4,
                name: "Socket.io"
            },
        ],
        video: ChatBud,
        links:{
            live: "https://chatbub-react.netlify.app/",
            github: "https://github.com/devCluna/ChatBud_Client"
        }
    },
    {
        id: 2,
        title: "Spotify Client - clone",
        description: "A non official spotify client built with React.js & Express,js",
        techs:[
            {
                id:1,
                name: "React"
            },
            {
                id:2,
                name: "Express"
            },
            {
                id:3,
                name: "Spotify API"
            },
        ],
        video: SpotifyClient,
        links:{
            live: "https://spotify-client.netlify.app/",
            github: "https://github.com/devCluna/react-spotify-clone-node"
        }
    },

    {
        id: 3,
        title: "Google Keep - clone",
        description: "A non official Google Keep client built with React.js & Styled components",
        techs:[
            {
                id:1,
                name: "React"
            },
            {
                id:2,
                name: "Express"
            },
            {
                id:3,
                name: "styled-components"
            },
        ],
        video: GoogleKeep,
        links:{
            live: "https://google-keep-clone-client.netlify.app/",
            github: "https://github.com/devCluna/google-keep-clone-client"
        }
    },
]