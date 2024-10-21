import React from 'react';
import imageIAML from "../assets/images/IA-ML.webp";

const Veille = () => {
    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="display-4 text-primary">Veille Technologique</h1>
                <p className="lead text-secondary">
                    Introduction à l'IA et au ML pour les Développeurs
                </p>
            </div>

            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <div className="bg-light p-4 rounded">
                        <h5 className="mb-3">Introduction</h5>
                        <p>
                            L'intelligence artificielle (IA) et le machine learning (ML) sont devenus des outils
                            incontournables pour les développeurs, offrant de nouvelles perspectives en matière de
                            productivité et d'automatisation. Ces technologies, autrefois réservées aux spécialistes
                            des données, s'intègrent désormais directement dans le quotidien des développeurs.
                        </p>
                        <p>
                            L'IA permet notamment d'automatiser des tâches complexes telles que la génération de
                            code ou la détection de bugs, tandis que le ML apporte des capacités prédictives aux
                            applications. Pour les développeurs, cela signifie qu'ils doivent non seulement
                            maîtriser les fondamentaux de la programmation, mais aussi acquérir des compétences
                            spécifiques dans l'utilisation de ces technologies, avec des frameworks comme TensorFlow
                            ou PyTorch.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6 mb-4">
                    <div className="bg-light p-4 rounded">
                        <h5 className="mb-3">Frameworks pour le ML</h5>
                        <p>
                            Les frameworks les plus populaires pour intégrer des modèles ML dans des applications
                            web sont TensorFlow et PyTorch. TensorFlow, conçu par Google, est idéal pour des projets
                            à grande échelle et pour le déploiement sur le cloud ou sur mobile. PyTorch, développé
                            par Facebook, est apprécié pour sa flexibilité, et est souvent utilisé dans la recherche
                            ainsi que pour des applications commerciales.
                        </p>
                    </div>
                </div>

                <div className="col-md-4 mb-2">
                    <img
                        src={imageIAML}
                        alt="Illustration de l'intelligence artificielle et du machine learning"
                        className="img-fluid rounded"
                    />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6 mb-4">
                    <div className="bg-light p-4 rounded">
                        <h5 className="mb-3">Utilisations courantes de l'IA et du ML</h5>
                        <p>
                            Le ML est largement utilisé dans les applications web, notamment pour les chatbots
                            intelligents, l'analyse de comportement des utilisateurs, et les recommandations dans
                            les plateformes d'e-commerce.
                        </p>
                        <p>
                            Les nouvelles tendances montrent que l'IA est de plus en plus utilisée pour automatiser
                            les processus de développement, tels que les systèmes CI/CD et le edge computing.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="bg-light p-4 rounded">
                        <h5 className="mb-3">Défis de l'intégration de l'IA</h5>
                        <p>
                            Même si l'IA apporte beaucoup d'avantages, elle pose aussi des défis, tels que la
                            compréhension des modèles et la gestion des biais. La protection des données est
                            également un enjeu important.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                    <div className="bg-light p-4 rounded">
                        <h5 className="mb-3">Sources</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.tensorflow.org/api_docs" className="text-decoration-none">Documentation
                                TensorFlow</a></li>
                            <li><a href="https://pytorch.org/tutorials/" className="text-decoration-none">Tutoriels
                                PyTorch</a></li>
                            <li><a
                                href="https://dev.to/okibayu/deepcode-your-ai-assistant-for-coding-and-code-analysis-3ecb"
                                className="text-decoration-none">DeepCode - AI Assistant for Coding</a></li>
                            <li><a href="https://code.visualstudio.com/docs/copilot/ai-powered-suggestions"
                                   className="text-decoration-none">GitHub Copilot</a></li>
                            <li><a
                                href="https://libraria.ai/blog/creating-intelligent-bots-with-dialogflow-a-comprehensive-tutorial/"
                                className="text-decoration-none">Création de chatbots intelligents avec Dialogflow</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Veille;
