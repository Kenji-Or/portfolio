import React from 'react';

const Veille = () => {
    return (
        <div className="container my-5">
            <div className="text-center mb-4">
                <h1 className="display-4 font-weight-bold">Veille Technologique</h1>
            </div>
            <div className="text-center mb-5">
                <h2 className="display-5">Introduction à l'IA et au ML pour les Développeurs</h2>
            </div>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card shadow-sm mb-4">
                        <div className="card-body">
                            <p className="lead">
                                L'intelligence artificielle (IA) et le machine learning (ML) sont devenus des outils
                                incontournables pour les développeurs, offrant de nouvelles perspectives en matière de
                                productivité et d'automatisation. Ces technologies, autrefois réservées aux spécialistes
                                des données, s'intègrent désormais directement dans le quotidien des développeurs.
                            </p>
                            <p>
                                L'IA permet notamment d'automatiser des tâches complexes telles que la génération de
                                code ou la détection de bugs, tandis que le ML apporte des capacités prédictives aux
                                applications. Pour les développeurs, cela signifie qu’ils doivent non seulement
                                maîtriser les fondamentaux de la programmation, mais aussi acquérir des compétences
                                spécifiques dans l'utilisation de ces technologies, avec des frameworks comme TensorFlow
                                ou PyTorch.
                            </p>
                        </div>
                    </div>
                    <div className="card shadow-sm mb-4">
                        <div className="card-body">
                            <h3 className="card-title">Frameworks pour le ML</h3>
                            <p>
                                Les frameworks les plus populaires pour intégrer des modèles ML dans des applications
                                web sont TensorFlow et PyTorch. TensorFlow, conçu par Google, est idéal pour des projets
                                à grande échelle et pour le déploiement sur le cloud ou sur mobile. PyTorch, développé
                                par Facebook, est apprécié pour sa flexibilité, et est souvent utilisé dans la recherche
                                ainsi que pour des applications commerciales.
                            </p>
                        </div>
                    </div>
                    <div className="card shadow-sm mb-4">
                        <div className="card-body">
                            <h3 className="card-title">Utilisations courantes de l'IA et du ML</h3>
                            <p>
                                Le ML est largement utilisé dans les applications web, notamment pour les chatbots
                                intelligents, l'analyse de comportement des utilisateurs, et les recommandations dans
                                les plateformes d'e-commerce.
                            </p>
                            <p>
                                Les nouvelles tendances montrent que l’IA est de plus en plus utilisée pour automatiser
                                les processus de développement, tels que les systèmes CI/CD et le edge computing.
                            </p>
                        </div>
                    </div>
                    <div className="card shadow-sm mb-4">
                        <div className="card-body">
                            <h3 className="card-title">Défis de l'intégration de l'IA</h3>
                            <p>
                                Même si l'IA apporte beaucoup d'avantages, elle pose aussi des défis, tels que la
                                compréhension des modèles et la gestion des biais. La protection des données est
                                également un enjeu important.
                            </p>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">Sources</h4>
                            <ul className="list-unstyled">
                                <li><a href="https://www.tensorflow.org/api_docs" >Documentation
                                    TensorFlow</a></li>
                                <li><a href="https://pytorch.org/tutorials/" >Tutoriels PyTorch</a></li>
                                <li><a
                                    href="https://dev.to/okibayu/deepcode-your-ai-assistant-for-coding-and-code-analysis-3ecb"
                                    >DeepCode - AI Assistant for Coding</a></li>
                                <li><a href="https://code.visualstudio.com/docs/copilot/ai-powered-suggestions"
                                       >GitHub Copilot</a></li>
                                <li><a
                                    href="https://libraria.ai/blog/creating-intelligent-bots-with-dialogflow-a-comprehensive-tutorial/"
                                    >Création de chatbots intelligents avec Dialogflow</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Veille;