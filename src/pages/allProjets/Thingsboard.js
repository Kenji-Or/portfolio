import React from "react";
import iconKotlin from "../../assets/images/Kotlin_Icon.svg"
import iconAngular from "../../assets/images/icons-angularjs.svg"

const skills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "GitLab", icon: "https://static.cdnlogo.com/logos/g/8/gitlab.svg" },
    { name: "MQTT", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Mqtt-hor.svg"},
    { name: "Kotlin", icon: `${iconKotlin}`},
    { name: "Angular", icon: `${iconAngular}`}
];

const Thingsboard = () => {
    return (
        <div className="container-fluid py-5 bg-ligh">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3 titre">
                        <span className="text-primary">Thingsboard</span>
                    </h1>
                </div>
                {/* Section description */}
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2 className="text-secondary text-center mb-4">Description</h2>
                        <p>Nos systèmes de pesage (pesage pelle, pesage chargeuse) sont connectés au Wi-Fi afin de remonter leurs données et de faciliter la facturation des clients.
                            C'est pour cela que nous avons réalisé un POC sur le site de ThingsBoard, qui nous permet de faire remonter les données par MQTT et de les afficher.</p>
                        <p>
                            Pour ce projet, je suis partie de zéro et j'ai commencé par me former sur Kotlin, le protocole MQTT, le framework Angular et le fonctionnement de ThingsBoard.
                        </p>
                        <p>Voici ce que j'ai réalisé par la suite :</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <strong>Envoi de données et affichage : </strong> Création d'un petit serveur Python pour envoyer des données avec le protocole MQTT à ThingsBoard, puis les récupérer, les traiter et enfin les afficher.
                            </li>
                            <li className="list-group-item">
                                <strong>Test avec composant des systeme pesage pelle :</strong> Création d'une page en Kotlin sur la tablette du pesage pelle pour saisir des données, les envoyer à ThingsBoard via le protocole MQTT et les afficher.
                            </li>
                        </ul>
                        <p className="mt-3">
                            Ensuite, ce POC a été mis en pause pour se concentrer sur des projets plus importants.
                        </p>
                    </div>
                    {/* Image du ticket finalisé */}
                    <div className="text-center mt-5">
                        <img
                            src=""
                            alt="Exemple de donnée remonter et afficher"
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

export default Thingsboard;