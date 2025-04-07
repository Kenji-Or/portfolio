import React from 'react';
import skillCategories from "../components/listCompetence";

const Competences = () => {
    const tabCompetence = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/Tableau-competenceKenji.xlsx`;
        link.download = 'TableauCompetence-Kenji_Ogier.xlsx';
        link.click();
    };
    return (
        <div className="container-fluid py-5 bg-light">
            <div className="container">
                {/* Title Section */}
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3 titre">
                        <span className="text-primary">Mes Competences</span>
                    </h1>
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 rounded-lg shadow-lg mb-5">
                        <div className="flex justify-between items-center">
                            <div className="text-black mb-2">
                                <h3 className="text-xl font-semibold mb-1">Téléchargez mon tableau des compétences</h3>
                                <p className="text-blue-100 mb-0">Découvrez mon parcours complet et mes réalisations</p>
                            </div>
                            <button
                                className="btn btn-outline-dark btn-lg " onClick={tabCompetence}>
                                <span>Télécharger</span>
                            </button>
                        </div>
                    </div>
                    <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
                        Un aperçu des technologies et outils que j'utilise quotidiennement
                        pour créer des solutions modernes et performantes.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="row g-4">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    {/* Category Header */}
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                                            <img
                                                src={category.icon}
                                                alt={category.title}
                                                className="img-fluid"
                                                style={{ width: '24px', height: '24px' }}
                                            />
                                        </div>
                                        <h3 className="h4 mb-0">{category.title}</h3>
                                    </div>

                                    {/* Technologies Grid */}
                                    <div className="row row-cols-3 g-3">
                                        {category.technologies.map((tech, techIndex) => (
                                            <div key={techIndex} className="col">
                                                <div className="p-3 bg-white rounded-3 shadow-sm h-100 text-center hover-effect">
                                                    <img
                                                        src={tech.icon}
                                                        alt={tech.name}
                                                        className="img-fluid mb-2"
                                                        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                                                    />
                                                    <p className="small mb-0">{tech.name}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing Message */}
                <div className="text-center mt-5">
                    <p className="text-muted">
                        Ces technologies me permettent de créer des applications complètes et modernes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Competences;