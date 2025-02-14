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
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
    { name: "Wamp", icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbayanbox.ir%2Fpreview%2F55024440732165511%2FWampServer-logo.jpg&f=1&nofb=1&ipt=03be946ae86d0b6729b8dff59f7be52f55b8373f4d6c08d76eaf3536e20b68f7&ipo=images" },
    { name: "Github", icon: `${iconGithub}` },
    { name: "Trello", icon: `${iconTrello}` }
];

const Intranet = () => {
    return (
        <div className="container-fluid py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3 titre">
                        <span className="text-primary">Développement d'un site Intranet pour GSB</span>
                    </h1>
                </div>
                {/* Section Description */}
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2 className="text-secondary text-center mb-4">Description du projet</h2>
                        <p>
                            Dans le cadre d'un projet, j'ai travaillé sur la conception d'un intranet pour une entreprise fictive, Galaxy Swiss Bourdin (GSB), un laboratoire pharmaceutique. Le but était de créer une plateforme centralisant les ressources internes et d'améliorer la communication au sein de l'entreprise.
                        </p>
                        <p>
                            J'ai conçu cet intranet pour moderniser et digitaliser les processus internes de l'entreprise. Ce projet m'a permis de mettre en pratique mes compétences en développement web.
                        </p>
                        <p>Voici les principales étapes que j'ai suivies pour réaliser ce projet :</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent">
                                <strong>Planification et Design :</strong> Création du cahier des charges, du Modèle Conceptuel de Données (MCD), ainsi que des maquettes fonctionnelles pour l'interface utilisateur.
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Base de données :</strong> Mise en place de la base de données avec phpMyAdmin, création des tables et des clés étrangères pour assurer une structure de données optimale.
                                <div className="text-center mt-5">
                                    <img
                                        src={image1}
                                        alt="Schéma de la base de données"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                                    />
                                </div>
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Développement du site :</strong> Création des pages (authentification, accueil, forum, contact, documents, articles, événements, etc.) et des fonctionnalités (gestion de tokens, mot de passe oublié, authentification, gestion de forum, calendrier, gestion d'articles, gestion des documents, gestion des utilisateurs).
                                <div className="text-center mt-5">
                                    <img
                                        src={forumIntranet}
                                        alt="Exemple de page Forum sur l'intranet"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                                    />
                                </div>
                            </li>
                            <li className="list-group-item bg-transparent">
                                <p className="mt-3">
                                    Ce projet inclut la gestion de trois rôles différents au sein de l'entreprise :
                                </p>
                                <div className="text-center mt-5">
                                    <img
                                        src={roleGsb}
                                        alt="Rôles des utilisateurs dans l'intranet"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Compétences utilisées */}
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
                <div className="mt-3">
                    <strong>Lien github : </strong> <a href="https://github.com/Kenji-Or/GSB-web">GSB-Web github</a>
                </div>
            </div>
        </div>
    );
}

export default Intranet;
