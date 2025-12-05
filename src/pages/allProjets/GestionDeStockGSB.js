import React from "react";
import iconGithub from "../../assets/images/icons-github.svg";
import iconTrello from "../../assets/images/icon-trello.svg";
import image1 from "../../assets/images/gestionMedicamentMobile.webp";
import gestionUtilisateur from "../../assets/images/gestionUtilisateurGestionStock.webp";

const skills = [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
    { name: "Github", icon: `${iconGithub}` },
    { name: "Trello", icon: `${iconTrello}` },
    { name: "Java", icon: "https://imgs.search.brave.com/RKiF688nF1busVH4a-YBVUni3i1u9gSlO2DHUgLWdsA/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZWIzMzY0ZWZh/MTE5MTVhM2E3MTEy/M2QzMDAwMWFlNTM1/OWVkMmMyNjA0OWM3/Mjc2YTFjNTI5ODkz/ZDg0NDYxMi93d3cu/amF2YS5jb20v"},
    { name: "Java Spring Boot", icon: "https://www.svgrepo.com/show/376350/spring.svg"},
    { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"},
    { name: "Postman", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg"}
];

const GestionStock = () => {
    return(
        <div className="container-fluid py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3 titre">
                        <span className="text-primary">Développement d'une application mobile de gestion de stock</span>
                    </h1>
                </div>
                {/* Section Description */}
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2 className="text-secondary text-center mb-4">Description du projet</h2>
                        <p>
                            Dans le cadre d'un projet, j'ai travaillé sur la conception d'une application mobile de gestion de stock pour une entreprise fictive, Galaxy Swiss Bourdin (GSB), un laboratoire pharmaceutique. Le but était de créer une plateforme centralisant les stocks et gérer les date de d'expiration des médicaments au sein de l'entreprise.
                        </p>
                        <p>
                            Cette application mobile a été conçue pour moderniser et optimiser les processus logistiques de l'entreprise. Ce projet m'a permis de mettre en pratique mes compétences en développement mobile et en gestion de base de données.
                        </p>
                        <p>Voici les principales étapes que j'ai suivies pour réaliser ce projet :</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent">
                                <strong>Planification et Design :</strong> Création du cahier des charges, du Modèle Conceptuel de Données (MCD), ainsi que des maquettes fonctionnelles pour l'interface utilisateur.
                                <div className="text-center mt-5">
                                    <img
                                        src={image1}
                                        alt="Vue gestion des médicaments"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                                    />
                                </div>
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Architecture et API :</strong> Développement d'une API REST pour assurer la communication entre l'application mobile et le serveur. Mise en place des endpoints nécessaires pour les opérations CRUD sur les médicaments, catégories, utilisateurs et rôles. Implémentation de l'authentification par token JWT pour sécuriser les échanges
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Base de données :</strong> Mise en place de la base de données SQL pour stocker les informations relatives aux produits, stocks, mouvements et utilisateurs, création des tables et des clés étrangères pour assurer une structure de données optimale.
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Développement de l'application :</strong> Création des différentes fonctionnalités : Authentification sécurisée des utilisateurs, Gestion des entrées et sorties de stock, Alertes de seuil minimal. Intégration avec l'API pour la synchronisation des données et le traitement des opérations
                                <div className="text-center mt-5">
                                    <img
                                        src={gestionUtilisateur}
                                        alt="Exemple de page Forum sur l'intranet"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                                    />
                                </div>
                            </li>
                            <li className="list-group-item bg-transparent">
                                <p className="mt-3">
                                    <strong>Ce projet inclut la gestion de 2 rôles différents au sein de l'entreprise :</strong>
                                    <br />Administrateur : dispose d'un accès complet incluant la gestion des utilisateurs, la gestion des médicaments et la gestion des catégories<br />
                                    Utilisateur : A le droit de consulter, créer, modifier et supprimer des médicaments, consulter les catégories, gérer son profil personnel et consulter les alertes de stock.
                                </p>
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
                    <strong>Liens github : </strong> <a href="https://github.com/Kenji-Or/PharmaStockGSB">Gestion de stock GSB github</a>
                    <br />
                    <a href="https://github.com/Kenji-Or/API_GSB_PharmaStock">API Gestion de stock GSB github</a>
                </div>
            </div>
        </div>
    );
}

export default GestionStock;