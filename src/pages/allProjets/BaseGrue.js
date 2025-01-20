import React from "react";
import image1 from "../../assets/images/basegruefichegrue.png";
import drapeauimage from "../../assets/images/drapeaubasegrue.png";

const BaseGrue = () => {
    return (
        <div className="container-fluid py-5 bg-ligh">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3">
                        <span className="text-primary">Base grue</span>
                    </h1>
                </div>
                {/* Section description */}
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2 className="text-secondary text-center mb-4">Description</h2>
                        <p>Nos systèmes anticollision MC602 et MC603 nécessitent différents capteurs et matériels pour
                            être installés sur les différentes marques et modèles de grues.
                            C'est pourquoi le site Base Grue a été créé pour permettre de créer, modifier et référencer
                            les fiches grue dont nous avons besoin, avec la possibilité de générer un PDF de la fiche
                            pour la partie compatibilité. Cela simplifie les commandes en permettant d'accéder
                            directement aux détails sans avoir à effectuer de recherches supplémentaires.
                        </p>
                        <p>
                            Pour ce projet, j’ai apporté de nombreuses modifications :
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <strong>Recherche par numéro de série</strong> : Ajout d'un champ de saisie et de la
                                partie backend pour permettre la recherche d'une fiche grue par numéro de série.
                            </li>
                            <li className="list-group-item">
                                <strong>Demande de modification</strong>:
                                <p>
                                    Modification de la page où l'on a les détails de la fiche grue, en modifiant les
                                    droits de modification.
                                    Si c'est un <strong>admin</strong>, il peut modifier la fiche grue.
                                    Si c'est un <strong>utilisateur</strong>, lorsqu'il va cliquer sur le bouton pour
                                    modifier la fiche grue, une popup apparaîtra pour lui demander les modifications
                                    qu'il souhaite apporter.
                                </p>
                                <p>
                                    Ensuite, un <strong>e-mail</strong> sera envoyé à l'admin pour l'informer de la
                                    demande de modification, avec les informations de la fiche grue concernée et un lien
                                    vers la fiche grue.
                                </p>
                                <p>
                                    Il y a également une page pour voir toutes les demandes de modification (les
                                    demandes non traitées, les refusées et les acceptées).
                                    Lorsque l'admin refuse ou accepte la modification, il peut laisser
                                    un <strong>commentaire</strong> à l'utilisateur, et ensuite il doit apporter les
                                    modifications demandées.
                                </p>
                                <div className="text-center mt-5">
                                    <img
                                        src={image1}
                                        alt="Exemple de ticket finalisé"
                                        className="img-fluid rounded"
                                        style={{maxWidth: "1000px"}}
                                    />
                                </div>
                            </li>
                            <li className="list-group-item">
                                <strong></strong>:
                            </li>
                            <li className="list-group-item">
                                <strong>Drapeau : </strong>
                                <p>
                                    Lorsqu'on cherche une fiche grue, le résultat affiche une liste des fiches grue
                                    correspondantes. Ma modification consiste à ajouter un <strong>drapeau </strong>
                                    dans cette liste pour chaque fiche grue : un drapeau rouge apparaît lorsqu'une
                                    fiche grue n'est pas valide, et un drapeau vert lorsqu'une fiche grue est valide.
                                </p>
                                <div className="text-center mt-5">
                                    <img
                                        src={drapeauimage}
                                        alt="Exemple de ticket finalisé"
                                        className="img-fluid rounded"
                                        style={{maxWidth: "1000px"}}
                                    />
                                </div>
                            </li>
                            <li className="list-group-item">
                                <strong>Corrections mineures</strong>:
                                <p>
                                    J'ai aussi apporté quelques petites corrections à des bugs mineurs, tels que la
                                    possibilité de voir son profil en tant qu'utilisateur, le changement de l'adresse
                                    email Google en adresse professionnelle, fusion de serial et serial number, etc.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BaseGrue;