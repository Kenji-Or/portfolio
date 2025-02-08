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
        <div className="container-fluid py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3 titre">
                        <span className="text-primary">Ticket Generator</span>
                    </h1>
                </div>

                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2 className="text-secondary text-center mb-4">Description</h2>
                        <p>Notre système de pesage pour pelles est un système qui nous permet de connaître la masse soulevée par la pelleteuse.</p>
                        <p>Le projet que j'ai réalisé pour ce système est le suivant : j'ai créé un nouveau site en m'inspirant du site thème management interne à l'entreprise.
                            Ce nouveau site va servir à générer des tickets de réception après le remplissage des camions. Ce projet vise à permettre aux clients de personnaliser ces tickets selon leurs besoins.</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent">
                                <strong>Gestion des entités :</strong> Ajout d’un système de gestion des entités pour organiser les tickets.
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Personnalisation des tickets :</strong> Création d’une page dédiée où les utilisateurs peuvent personnaliser les éléments suivants :
                                <ul className="mt-2">
                                    <li>Texte d’en-tête</li>
                                    <li>Logo</li>
                                    <li>QR code</li>
                                    <li>Texte de pied de page</li>
                                    <li>Espacement entre les lignes</li>
                                </ul>
                            </li>
                        </ul>
                        <p className="mt-3">Les utilisateurs peuvent choisir d’afficher ou de masquer ces éléments selon leurs préférences.</p>

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

                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <p>Une fois personnalisés, les tickets sont enregistrés sur le serveur pour être récupérés par le système de pesage des pelles.</p>
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
