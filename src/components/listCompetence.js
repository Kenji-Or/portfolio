import iconFrontEnd from "../assets/images/iconFront-end.svg"
import iconBackEnd from "../assets/images/iconDatabase.svg"
import iconDesign from "../assets/images/iconDesign.svg"
import iconOutil from "../assets/images/iconGlobe.svg"
import iconTrello from "../assets/images/icon-trello.svg";

const skillCategories = [
    {
        title: 'Frontend',
        icon: iconFrontEnd,
        technologies: [
            {
                name: 'HTML',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
            },
            {
                name: "CSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            },
            {
                name: 'React',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
            },
            {
                name: 'JavaScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
            },
            {
                name: 'Bootstrap',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
            },
            {
                name: "Axios",
                icon: "https://axios-http.com/assets/logo.svg"
            }
        ]
    },
    {
        title: 'Design',
        icon: iconDesign,
        technologies: [
            {
                name: 'Figma',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
            }
        ]
    },
    {
        title: 'Backend',
        icon: iconBackEnd,
        technologies: [
            {
                name: 'Node.js',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
            },
            {
                name: 'Express',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
            },
            {
                name: 'MongoDB',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
            },
            {
                name: 'MySQL',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
            },
            {
                name: 'PHP',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg'
            },
            {
                name: 'Java spring boot',
                icon: 'https://www.svgrepo.com/show/376350/spring.svg'
            }
        ]
    },
    {
        title: 'Outils',
        icon: iconOutil,
        technologies: [
            {
                name: 'Git',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
            },
            {
                name: 'VS Code',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
            },
            {
                name: "IntelliJ IDEA",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"
            },
            {
                name: "Wamp",
                icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbayanbox.ir%2Fpreview%2F55024440732165511%2FWampServer-logo.jpg&f=1&nofb=1&ipt=03be946ae86d0b6729b8dff59f7be52f55b8373f4d6c08d76eaf3536e20b68f7&ipo=images"
            },
            {
                name: "Trello",
                icon: `${iconTrello}`
            },
            {
                name: 'Postman',
                icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg'
            },
            {
                name: 'Android studio',
                icon: 'https://imgs.search.brave.com/ihtNQIMzb-63o0902L9VO9Lq-keJX3Viw3mpnNZ66Y0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi81LzUxL0Fu/ZHJvaWRfU3R1ZGlv/X0xvZ29fMjAyNC5z/dmcvMjIwcHgtQW5k/cm9pZF9TdHVkaW9f/TG9nb18yMDI0LnN2/Zy5wbmc'
            }
        ]
    }
];

export default skillCategories;