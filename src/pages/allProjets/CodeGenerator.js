import React from "react";

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
            </div>
        </div>
    )
}

export default CodeGenerator;