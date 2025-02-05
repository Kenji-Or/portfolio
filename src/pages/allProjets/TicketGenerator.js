import React from "react";
import image1 from "../../assets/images/ticketGenerator.webp";

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

const TicketGenerator = () => {
    return (
            <div className="container-fluid py-5 bg-ligh">
                <div className="container">
                    <div className="text-center mb-5">
                        <h1 className="display-4 fw-bold mb-3 titre">
                            <span className="text-primary">Ticket Generator</span>
                        </h1>
                    </div>
                    {/* Section description */}
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h2 className="text-secondary text-center mb-4">Description</h2>
                            <p>Notre système de pesage pour pelles émet des tickets de réception après le remplissage des camions avec les pesées. C'est pourquoi j'ai dû créer un site pour personnaliser les tickets, afin que nos clients puissent les adapter à leurs besoins.</p>
                            <p>
                                Pour ce projet, j’ai repris la base d’un site existant en interne à l’entreprise. Voici les fonctionnalités que j’ai ajoutées ou améliorées :
                            </p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <strong>Gestion des entités</strong> : ajout d’une gestion des entités dans le système.
                                </li>
                                <li className="list-group-item">
                                    <strong>Personnalisation des tickets</strong> : création d’une page dédiée permettant de personnaliser chaque élément d’un ticket, notamment :
                                    <ul className="mt-2">
                                        <li>Texte d’en-tête</li>
                                        <li>Logo</li>
                                        <li>QR code</li>
                                        <li>Texte de pied de page</li>
                                        <li>Interlignes</li>
                                    </ul>
                                </li>
                            </ul>
                            <p className="mt-3">
                                L'utilisateur peut choisir quels éléments afficher ou masquer, en fonction de ses besoins.
                            </p>
                            {/* Image du ticket finalisé */}
                            <div className="text-center mt-5">
                                <img
                                    src={image1}
                                    alt="Exemple de ticket finalisé"
                                    className="img-fluid rounded"
                                    style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section description */}
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <p>
                                Ensuite, chaque ticket est enregistré sur le serveur, que le système de pesage pelle pourra récupérer lorsqu'il en aura besoin.
                            </p>
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
}

export default TicketGenerator;