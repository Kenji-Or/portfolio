import React from "react";

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
                        <p>Nos systèmes anticollision MC602 et MC603 nécessitent différents capteurs et matériels pour être installés sur les différentes marques et modèles de grues.
                            C'est pourquoi le site Base Grue a été créé pour permettre de créer, modifier et référencer les fiches grue dont nous avons besoin, avec la possibilité de générer un PDF de la fiche pour la partie compatibilité. Cela simplifie les commandes en permettant d'accéder directement aux détails sans avoir à effectuer de recherches supplémentaires.
                        </p>
                        <p>
                            Pour ce projet, j’ai apporté de nombreuses modifications :
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <strong>Recherche par numéro de série</strong> : Ajout d'un champ de saisie et de la partie backend pour permettre la recherche d'une fiche grue par numéro de série.
                            </li>
                            <li className="list-group-item">
                                <strong>Demande de modification</strong> : création d’une page dédiée permettant de personnaliser chaque élément d’un ticket, notamment :
                            </li>
                        </ul>
                        <p className="mt-3">
                            L'utilisateur peut choisir quels éléments afficher ou masquer, en fonction de ses besoins.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BaseGrue;