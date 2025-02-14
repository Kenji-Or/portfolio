import React from "react";

const Contact = () => {
    return (
        <div className="container py-5 bg-light d-flex justify-content-center align-items-center flex-column" style={{ minHeight: 'calc(100vh - 190px)' }}>
            <div className="container text-center">
                {/* Section Titre */}
                <div className="mb-5">
                    <h1 className="display-4 fw-bold text-primary">Contact</h1>
                    <p className="lead">N'hésitez pas à me contacter via ce formulaire :</p>
                </div>

                {/* Formulaire */}
                <div className="card shadow p-4 mb-5 bg-white rounded" style={{ maxWidth: "500px", margin: "0 auto" }}>
                    <form action="https://formspree.io/f/myzkdrww" method="POST">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Votre email :</label>
                            <input type="email" name="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Votre message :</label>
                            <textarea name="message" className="form-control" id="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Envoyer</button>
                    </form>
                </div>

                {/* Informations de contact */}
                <div className="mb-4">
                    <p className="lead">N'hésitez pas à me contacter et à me suivre sur mes réseaux professionnels.</p>
                    <div className="d-flex justify-content-center gap-3">
                        <a href="https://github.com/Kenji-Or" target="_blank" rel="noopener noreferrer" aria-label="Lien vers le profil GitHub">
                            <img className="rounded img-fluid" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" style={{ width: "50px", height: "50px" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/kenji-ogier-33583b296/" target="_blank" rel="noopener noreferrer" aria-label="Lien vers le profil LinkedIn">
                            <img className="rounded img-fluid" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={{ width: "50px", height: "50px" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
