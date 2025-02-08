import React from "react";
import image1 from "../../assets/images/basegruefichegrue.webp";
import drapeauimage from "../../assets/images/drapeaubasegrue.webp";

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

const BaseGrue = () => {
    return (
        <div className="container-fluid py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3 titre">
                        <span className="text-primary">Base Grue</span>
                    </h1>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2 className="text-secondary text-center mb-4">Description</h2>
                        <p>
                            Nos systèmes anticollision MC602 et MC603 nécessitent divers capteurs et équipements pour être installés sur différentes marques et modèles de grues.
                            C'est pourquoi le site Base Grue a été créé : il permet de créer, modifier et référencer les fiches grue nécessaires, tout en offrant la possibilité de générer un PDF
                            détaillant la compatibilité. Cela simplifie les commandes en facilitant l'accès aux informations essentielles sans recherches supplémentaires.
                        </p>
                        <p>Dans le cadre de ce projet, j’ai apporté plusieurs améliorations :</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent">
                                <strong>Recherche par numéro de série :</strong> Ajout d'un champ de saisie et d'une intégration backend permettant la recherche d'une fiche grue par son numéro de série.
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Gestion des demandes de modification :</strong>
                                <p>
                                    Sur la page des détails d'une fiche grue, les droits de modification ont été ajustés :
                                    <ul>
                                        <li>Un <strong>administrateur</strong> peut modifier directement la fiche.</li>
                                        <li>Un <strong>utilisateur</strong> voit une popup s'afficher lorsqu'il clique sur le bouton de modification, où il peut spécifier les changements souhaités.</li>
                                    </ul>
                                </p>
                                <p>
                                    Une demande de modification génère un <strong>e-mail</strong> envoyé à l'administrateur avec un lien direct vers la fiche concernée.
                                    Une interface dédiée permet de suivre les demandes (en attente, refusées, acceptées). L'admin peut y ajouter un commentaire avant de valider ou refuser une demande.
                                </p>
                                <div className="text-center mt-5">
                                    <img
                                        src={image1}
                                        alt="Exemple de gestion des demandes"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                                    />
                                </div>
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Refonte de la gestion des options :</strong>
                                <p>Amélioration du système de gestion des options en les rendant administrables de manière plus intuitive, similaire à la gestion des nomenclatures commerciales.</p>
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Ajout de drapeaux d’indication :</strong>
                                <p>
                                    Lors de la recherche d'une fiche grue, la liste des résultats affiche désormais un <strong>drapeau</strong> pour indiquer son statut :
                                    <ul>
                                        <li>🔴 <strong>Rouge</strong> : fiche grue invalide.</li>
                                        <li>🟢 <strong>Vert</strong> : fiche grue valide.</li>
                                    </ul>
                                </p>
                                <div className="text-center mt-5">
                                    <img
                                        src={drapeauimage}
                                        alt="Exemple d'indicateur de statut"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                                    />
                                </div>
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Corrections et optimisations :</strong>
                                <p>
                                    Correction de divers bugs et améliorations mineures, notamment :
                                    <ul>
                                        <li>Affichage et gestion des profils utilisateur.</li>
                                        <li>Mise à jour de l'adresse e-mail Google vers une adresse professionnelle.</li>
                                        <li>Fusion des champs <em>serial</em> et <em>serial number</em> pour plus de cohérence.</li>
                                    </ul>
                                </p>
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
}

export default BaseGrue;
