import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FORMSPREE_ENDPOINT =
    process.env.REACT_APP_FORMSPREE_ENDPOINT ||
    "https://formspree.io/f/myzkdrww";

const Contact = () => {
    return (
        <div className="container py-5 d-flex justify-content-center align-items-center flex-column" style={{ minHeight: 'calc(100vh - 190px)' }}>
            <div className="container text-center">
                {/* Section Titre */}
                <div className="mb-5">
                    <h1 className="display-4 fw-bold text-primary">Contact</h1>
                    <p className="lead">N'hésitez pas à me contacter via ce formulaire :</p>
                </div>

                {/* Formulaire */}
                <div className="card shadow p-4 mb-5 rounded" style={{ maxWidth: "500px", margin: "0 auto" }}>
                    <form action={FORMSPREE_ENDPOINT} method="POST">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Votre email :</label>
                            <input type="email" name="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Votre message :</label>
                            <textarea name="message" className="form-control" id="message" rows="4" required></textarea>
                        </div>
                        <input type="text" name="_gotcha" style={{ display : 'none' }} />
                        <button type="submit" className="btn btn-primary w-100">Envoyer</button>
                    </form>
                </div>

                {/* Informations de contact */}
                <div className="mb-4">
                    <p className="lead">N'hésitez pas à me contacter et à me suivre sur mes réseaux professionnels.</p>
                    <div className="d-flex justify-content-center gap-3">
                        <a href="https://github.com/Kenji-Or" target="_blank" rel="noopener noreferrer" aria-label="Lien vers le profil GitHub">
                            <FaGithub size={50} aria-hidden="true" />
                        </a>
                        <a href="https://www.linkedin.com/in/kenji-ogier-33583b296/" target="_blank" rel="noopener noreferrer" aria-label="Lien vers le profil LinkedIn">
                            <FaLinkedin size={50} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
