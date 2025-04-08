import React from 'react';
import image1 from "../../assets/images/seotestperformance.webp";
import imgSeoquake from "../../assets/images/seoquake.webp";

const SEO = () => {
    return (
        <div className="container-fluid py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3 titre">
                        <span className="text-primary">SEO</span>
                    </h1>
                </div>

                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2 className="text-secondary text-center mb-4">Description</h2>
                        <p>
                            Lors des travaux pratiques, nous avons travaillé sur l'amélioration du SEO (référencement naturel)
                            des sites en appliquant les bonnes pratiques d'optimisation.
                        </p>
                        <p>
                            Il existe plusieurs outils pour évaluer la qualité d’un site web. Voici quelques-uns des plus utilisés :
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent">
                                <strong>PageSpeed Insights :</strong> Cet outil permet d’analyser les performances d’un site web
                                et d’évaluer son niveau d’optimisation pour le référencement naturel. Il fournit une analyse
                                détaillée pour les vues mobile et desktop.
                                <div className="text-center mt-4">
                                    <img
                                        src={image1}
                                        alt="Exemple de test de performance avec PageSpeed Insights"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                                    />
                                </div>
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Extension SEOquake :</strong> Cette extension de navigateur permet d’analyser les
                                performances SEO d’un site. Elle indique les points forts et les points faibles de l’optimisation
                                en matière de référencement.
                                <div className="text-center mt-4">
                                    <img
                                        src={imgSeoquake}
                                        alt="Exemple d’analyse SEO avec l’extension SEOquake"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: "100%", height: "auto", maxHeight: "600px" }}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SEO;