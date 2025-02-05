import React from "react";

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
        <div className="container-fluid py-5 bg-ligh">
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
                        <p>Nos systèmes d'anticollision ont besoin d'un code d'accès pour déverrouiller l'accès au système et donc aussi au contrôle de la grue.
                            Cela est nécessaire car les grues sont souvent louées à différentes personnes pendant une certaines durées, et donc, pour donner accès
                            à la grue à ces personnes pendant une période donnée, nous allons sur ce site, créer un code avec la durer de validation.
                            Notre projet sur ce site va être de créer un accès a distance au systeme en directe.</p>
                        <p>
                            Pour ce projet, je suis partie du site existant et j'ai ajouter une rubrique
                        </p>
                        <p>Voici ce que j'ai réalisé par la suite :</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <strong>Page d'affichage : </strong> Création d'une tuile permettant d'accéder à la page de connexion au
                                service d'accès à distance. Ajout des requêtes vers le service pour vérifier l'authentification. Une fois authentifié,
                                un iframe s'affiche, permettant même de prendre le contrôle du système.
                            </li>
                            <li className="list-group-item">
                                <strong>Requête côté service d'authentification : </strong> Création des requêtes pour vérifier si l'authentification est correcte et si l'entité à laquelle l'utilisateur appartient souscrit à notre abonnement pour bénéficier de ce service, puis,
                                si elle l'est, renvoi du lien de l'iframe.
                            </li>
                        </ul>
                    </div>
                    {/* Image du ticket finalisé */}
                    <div className="text-center mt-5">
                        <img
                            src=""
                            alt="Exemple accès a distance"
                            className="img-fluid rounded"
                            style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                        />
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
    )
}

export default CodeGenerator;