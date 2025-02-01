import React from "react";

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
                            Pour ce projet, je suis partie de zéro et j'ai commencé par me former sur le protocole MQTT, le framework Angular et le fonctionnement de ThingsBoard.
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
            </div>
        </div>
    )
}

export default Thingsboard;