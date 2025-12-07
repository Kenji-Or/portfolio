import React from "react";
import iconFrakkenPHP from "../../assets/images/iconFrakkenPHP.svg";

const skills = [
  { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
  { name: "FrakkenPHP", icon: iconFrakkenPHP },
  { name: "Doctrine ORM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/doctrine/doctrine-original.svg" },
  { name: "Mercure", icon: "https://mercure.rocks/static/logo.svg" },
  { name: "Twig", icon: "https://twig.symfony.com/images/logo.png" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "GitLab", icon: "https://static.cdnlogo.com/logos/g/8/gitlab.svg" },
  { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" }
];

const AppChat = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3 titre">
                        <span className="text-primary">Application de Chat en Temps Réel</span>
                    </h1>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2 className="text-secondary text-center mb-4">Description du projet</h2>
                        <p>
                            L'application de chat en temps réel a été conçue pour offrir une expérience de communication fluide et instantanée aux utilisateurs. En utilisant Symfony comme framework principal, j'ai pu structurer l'application de manière efficace tout en tirant parti des fonctionnalités robustes offertes par ce framework.
                        </p>
                        <p>
                            FrakkenPHP a été utilisé pour gérer les interactions en temps réel, permettant aux messages d'être envoyés et reçus instantanément sans nécessiter de rafraîchissement de la page. Doctrine ORM a été employé pour gérer la persistance des données, assurant une gestion efficace des utilisateurs, des messages et des salles de discussion.
                        </p>
                        <p>
                            Mercure a été intégré pour faciliter la diffusion en temps réel des messages
                            aux utilisateurs connectés, garantissant ainsi une expérience de chat fluide et réactive.
                            Twig a été utilisé pour le rendu des vues, offrant une interface utilisateur conviviale et attrayante.
                        </p>
                        <p>
                            L'application est conteneurisée à l'aide de Docker, ce qui facilite le déploiement et la gestion de l'environnement de développement. Grâce à cette approche, j'ai pu créer une application de chat performante et évolutive, offrant aux utilisateurs une plateforme de communication moderne et efficace.
                        </p>
                        <p>Voici les principales fonctionnalités de l'application :</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent">
                                <strong>Inscription et Authentification :</strong> Les utilisateurs peuvent créer un compte et se connecter pour accéder à l'application de chat.
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Salles de Discussion :</strong> Les utilisateurs peuvent rejoindre des salles de discussion existantes ou en créer de nouvelles pour discuter avec d'autres membres.
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Messages en Temps Réel :</strong> Les messages sont envoyés et reçus instantanément grâce à l'intégration de FrakkenPHP et Mercure, offrant une expérience de chat fluide.
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Gestion des Utilisateurs :</strong> Les utilisateurs peuvent gérer leur profil et modifier leurs informations personnelles.
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
export default AppChat;