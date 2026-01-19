import React from 'react';
import iconMantine from "../../assets/images/iconMantine.svg";
import IPCS_Web from "../../assets/images/ipcs_web.webp";
import IPCS_old from "../../assets/images/old_ipcs.webp";

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Mantine", icon: iconMantine },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Axios", icon: "https://axios-http.com/assets/logo.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "GitLab", icon: "https://static.cdnlogo.com/logos/g/8/gitlab.svg" },
  { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" }
];

const IPCS = () => {
    return (
        <div className="container-fluid py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold mb-3 titre">
                <span className="text-primary">IPCS web</span>
              </h1>
            </div>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h2 className="text-secondary text-center mb-4">Description</h2>
                <p>
                  Le projet IPCS est une application web basé sur un vieux logiciel appeler IPCS, il est utiliser par nos systèmes de pesage (MC402-MC403),
                  il permet de faire remonter les données de pesée et facilite la facturation des clients.
                  L'objectif de ce projet est de moderniser l'interface utilisateur et d'améliorer les fonctionnalités existantes pour offrir une meilleure expérience aux utilisateurs finaux.
                  Mais aussi car la technologie utilisée dans le logiciel actuel est obsolète et difficile à maintenir.
                  On veut aussi rendre l'application accessible depuis n'importe quel appareil connecté à Internet, sans nécessiter d'installation locale.
                  Et cela permettrais aussi d'ajouter le pesage pelle au système IPCS.
                </p>
                <div className="text-center mt-5">
                  <img
                      src={IPCS_old}
                      alt="Ancienne version de l'IPCS"
                      className="img-fluid rounded"
                      style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                  />
                </div>
                <h2 className="text-secondary text-center mb-4">Fonctionnalités principales :</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent">Gestion des client</li>
                  <li className="list-group-item bg-transparent">Gestion des produits</li>
                  <li className="list-group-item bg-transparent">Gestion des véhicules</li>
                  <li className="list-group-item bg-transparent">Gestion des transporteurs</li>
                  <li className="list-group-item bg-transparent">Gestion des sites de livraison</li>
                  <li className="list-group-item bg-transparent">Gestion des bons de commande</li>
                  <li className="list-group-item bg-transparent">Gestion des transporteurs</li>
                  <li className="list-group-item bg-transparent">Gestion des formules</li>
                  <li className="list-group-item bg-transparent">Gestion des chargeuses</li>
                  <li className="list-group-item bg-transparent">Gestion des chargements</li>
                  <li className="list-group-item bg-transparent">Gestion des sites de chargement</li>
                  <li className="list-group-item bg-transparent">
                    <strong>Gestion des relations entre les données :</strong><br />
                    Mise en place de liens cohérents entre les différents éléments du système
                    (par exemple : association d’un chargement à un client).<br />
                    Interface utilisateur intuitive permettant de gérer facilement ces relations,
                    avec création automatique de liens lors de l’ajout de certains éléments.
                  </li>
                  <div className="text-center mt-5">
                    <img
                        src={IPCS_Web}
                        alt="IPCS Web"
                        className="img-fluid rounded"
                        style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                    />
                  </div>
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

export default IPCS;