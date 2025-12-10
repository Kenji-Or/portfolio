import React from 'react';
import skillCategories from "../components/listCompetence";
import certifications from "../components/listCertifications";

const Competences = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                {/* Title Section */}
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3 titre">
                        <span className="text-primary">Mes Competences</span>
                    </h1>
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
                                                <div className="p-3 rounded-3 shadow-sm h-100 text-center hover-effect">
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

                {/* Certifications Section */}
                <div className="mt-5 pt-5 border-top">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3">
                            <span className="text-primary">Mes Certifications</span>
                        </h2>
                        <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
                            Certifications officielles attestant de mes compétences techniques
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {certifications.map((certification) => (
                            <div key={certification.id} className="col-md-6 col-lg-4">
                                <div className="card h-100 border-0 shadow-sm certification-card">
                                    <div className="card-body text-center p-4">
                                        <div className={`bg-${certification.colorClass} bg-opacity-10 p-4 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center`} style={{width: '100px', height: '100px'}}>
                                            <img
                                              src={certification.img}
                                              alt={certification.title}
                                              className="img-fluid"
                                              style={{width: '70px', height: '70px', objectFit: 'contain'}}
                                            />
                                        </div>
                                        <h5 className="card-title mb-2">{certification.title}</h5>
                                        <p className="text-muted small mb-3">{certification.organisme}</p>
                                        <p className="card-text small">
                                            {certification.description}
                                        </p>
                                        <div className="mt-3">
                                            <span className={`badge bg-${certification.colorClass} bg-opacity-10 text-${certification.colorClass}`}>
                                                {certification.year}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Competences;