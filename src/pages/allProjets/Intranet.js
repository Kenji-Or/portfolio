import React from "react";
import image1 from "../../assets/images/schemabdd.webp";
import roleGsb from "../../assets/images/rôlesgsb.webp";
import forumIntranet from "../../assets/images/intranetForum.webp";
import iconGithub from "../../assets/images/icons-github.svg";
import iconTrello from "../../assets/images/icon-trello.svg";

const skills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"},
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},
    { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"},
    { name: "Wamp", icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbayanbox.ir%2Fpreview%2F55024440732165511%2FWampServer-logo.jpg&f=1&nofb=1&ipt=03be946ae86d0b6729b8dff59f7be52f55b8373f4d6c08d76eaf3536e20b68f7&ipo=images"},
    { name: "Github", icon: `${iconGithub}`},
    { name: "Trello", icon: `${iconTrello}`}
];

const Intranet = () => {
    return (
        <div className="container-fluid py-5 bg-ligh">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3 titre">
                        <span className="text-primary">Developpement d'un site intranet GSB</span>
                    </h1>
                </div>
                {/* Section description */}
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2 className="text-secondary text-center mb-4">Description</h2>
                        <p>Dans le cadre d'un projet, une entreprise fictive, le laboratoire pharmaceutique Galaxy Swiss Bourdin (GSB), avait besoin d'un site pour centraliser ses ressources internes et améliorer la communication au sein de l’entreprise.
                            C'est pourquoi j'ai conçu un intranet afin d’optimiser la communication interne et de répondre aux besoins de modernisation et de digitalisation de GSB.</p>
                        <p>
                            Pour ce projet, je suis parti de zéro et j'ai commencé par me former sur PHP.
                        </p>
                        <p>Voici ce que j'ai réalisé par la suite :</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <strong>Cahier des charges, MDC, Maquettage :</strong> Création du cahier des charges, du Modèle Conceptuel de Données (MDC) et de la maquette.
                            </li>
                            <li className="list-group-item">
                                <strong>Base de données</strong> <p>Création de la base de données avec phpmyadmin, création des tables et des clées étrangères</p>
                                <div className="text-center mt-5">
                                    <img
                                        src={image1}
                                        alt="Exemple de ticket finalisé"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                                    />
                                </div>
                            </li>
                            <li className="list-group-item">
                                <strong>Code : </strong> Développement des différents affichages (Page d'authentification, page d'accueil, page de forum, page de contact, page des documents, des articles, des évènements, ...),
                                les différentes fonctions (Gestion de token, mot de passe oublier, authentification, gestion de forum, calendrier, gestion d'articles, gestion des documents, gestion des utilisateurs)
                                <div className="text-center mt-5">
                                    <img
                                        src={forumIntranet}
                                        alt="Exemple de ticket finalisé"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                                    />
                                </div>
                            </li>
                        </ul>
                        <p className="mt-3">
                            Ce projet gère 3 rôles différents :
                        </p>
                        <img
                            src={roleGsb}
                            alt="Explication des différents roles"
                            className="img-fluid rounded"
                            style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                        />
                    </div>
                </div>
                <div>

                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Compétences utilisées :</h5>
                                <div className="d-flex flex-wrap">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="d-flex align-items-center me-3 mb-2">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="img-fluid"
                                                style={{ width: '20px', height: '20px' }}
                                            />
                                            <span className="ms-2 small">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intranet;