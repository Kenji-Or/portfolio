import React from "react";
import image1 from "../../assets/images/ticketGenerator.png";

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
                        </div>
                    </div>

                    {/* Image du ticket finalisé */}
                    <div className="text-center mt-5">
                        <img
                            src={image1}
                            alt="Exemple de ticket finalisé"
                            className="img-fluid rounded"
                            style={{ maxWidth: "1000px" }}
                        />
                    </div>

                    {/* Section description */}
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <p>
                                Ensuite, chaque ticket est enregistré sur le serveur, que le système de pesage pelle pourra récupérer lorsqu'il en aura besoin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default TicketGenerator;