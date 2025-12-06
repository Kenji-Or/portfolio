import React from "react";
import acg1 from "../../assets/images/acg3.webp";
import acg2 from "../../assets/images/acg5.webp";
import acg3 from "../../assets/images/acg1.webp";

const skills = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Axios", icon: "https://axios-http.com/assets/logo.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "GitLab", icon: "https://static.cdnlogo.com/logos/g/8/gitlab.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
];

const CodeGenerator = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3 titre">
                        <span className="text-primary">Access Code Generator</span>
                    </h1>
                </div>
                {/* Section description */}
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2 className="text-secondary text-center mb-4">Description</h2>
                        <p>
                            Nos systèmes d'anticollision (MC602-MC603) nécessitent un code d'accès pour passer en mode calibration ou avoir accès a des paramètres spéciaux, garantissant ainsi un contrôle sécurisé des grues.
                            Lorsqu'un client a son système bloquer, le support d'Ascorel peut alors s'authentifier avec un code d'accès dans leur système. Et avoir accès a plus de paramètres.
                            Ce site permet de générer un code temporaire et sécurisé, facilitant ainsi leur gestion.
                        </p>
                        <p>
                            Ce site a été codé par un autre développeur et j'ai ajouté plusieurs fonctionnalités clés :
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent">
                                <strong>Filtrage des utilisateurs :</strong> Ajout d'une fonctionnalité permettant de trier les utilisateurs selon leur entité, leur rôle et leur état,
                                grâce à des sélecteurs avancés.
                                <div className="text-center mt-5">
                                    <img
                                        src={acg3}
                                        alt="Filtrage des utilisateurs"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                                    />
                                </div>
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Accès à distance :</strong> Mise en place d'une tuile de connexion au service d'accès à distance,
                                incluant des requêtes de vérification d'authentification.
                                Une fois l'utilisateur authentifié, un iframe sécurisé s'affiche,
                                permettant un contrôle direct du système.
                                <div className="text-center mt-5">
                                    <img
                                        src={acg1}
                                        alt="Accès à distance au système"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                                    />
                                </div>

                                <strong>Gestion des licences :</strong> Création d'un système de vérification permettant de s'assurer
                                que l'utilisateur appartient à une entité souscrite à notre service via une licence.
                                Si l'authentification est validée, un lien vers l'iframe est généré,
                                permettant ainsi l'affichage de l'interface du système.
                                <div className="text-center mt-5">
                                    <img
                                        src={acg2}
                                        alt="Vérification d'authentification"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
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
    );
};

export default CodeGenerator;
