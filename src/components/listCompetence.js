import iconFrontEnd from "../assets/images/iconFront-end.svg"
import iconBackEnd from "../assets/images/iconDatabase.svg"
import iconDesign from "../assets/images/iconDesign.svg"
import iconOutil from "../assets/images/iconGlobe.svg"

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
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wamp/wamp-original.svg"
            }
        ]
    }
];

export default skillCategories;