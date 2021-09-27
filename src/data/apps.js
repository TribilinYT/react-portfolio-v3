import ChatBud from "../assets/videos/apps/chatbud_app.mp4"

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

]