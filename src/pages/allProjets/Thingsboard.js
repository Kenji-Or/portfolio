import React from "react";
import iconKotlin from "../../assets/images/Kotlin_Icon.svg";
import iconAngular from "../../assets/images/icons-angularjs.svg";
import thingsboard1 from "../../assets/images/thingsboard1.webp";

const skills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "GitLab", icon: "https://static.cdnlogo.com/logos/g/8/gitlab.svg" },
    { name: "MQTT", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Mqtt-hor.svg" },
    { name: "Kotlin", icon: `${iconKotlin}` },
    { name: "Angular", icon: `${iconAngular}` },
    { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"}
];

const Thingsboard = () => {
    return (
        <div className="container-fluid py-5 bg-light">
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
                        <p>
                            ThingsBoard est une plateforme de gestion de données IoT (Internet of Things) permettant la collecte, le stockage et l'affichage des données issues de capteurs connectés.
                        </p>
                        <p>
                            Dans le cadre de ce projet, nous avons connecté nos systèmes de pesage (pesée de pelle, pesée de chargeuse) via Wi-Fi pour remonter les données en temps réel et les visualiser sous forme de graphiques. Pour cela, nous avons développé un POC utilisant ThingsBoard, permettant de transmettre les données via le protocole MQTT et de les afficher sur la plateforme.
                        </p>
                        <p>Voici les étapes que j'ai suivies pour réaliser ce projet :</p>
                        <p>
                            J'ai commencé ce projet en me formant sur les technologies suivantes : Kotlin, le protocole MQTT, le framework Angular et l'architecture de la plateforme ThingsBoard.
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent">
                                <strong>Envoi de données et affichage :</strong> Création d'un serveur Python pour envoyer des données à ThingsBoard via le protocole MQTT, récupérer ces données, les traiter et les afficher sur la plateforme.
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Test avec les composants des systèmes de pesage :</strong> Développement d'une page sur l'application de la tablette du pesage pelle en Kotlin, permettant de saisir des données, de les envoyer via MQTT et de les afficher sur ThingsBoard.
                            </li>
                        </ul>
                        <p className="mt-3">
                            Ce POC a ensuite été mis en pause pour se concentrer sur des projets à plus forte priorité.
                        </p>
                        {/* Image du ticket finalisé */}
                        <div className="text-center mt-5">
                            <img
                                src={thingsboard1}
                                alt="Exemple de ticket finalisé"
                                className="img-fluid rounded"
                                style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                            />
                        </div>
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

export default Thingsboard;
