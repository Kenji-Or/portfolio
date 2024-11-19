import React, { useState } from "react";

const Contact = () => {
    // State pour gérer les valeurs du formulaire
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Fonction pour mettre à jour les valeurs des champs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Fonction pour soumettre le formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container-fluid py-5 bg-light">
            <div className="container">
                {/* Section Titre */}
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3">
                        <span className="text-primary">Contact</span>
                    </h1>
                    <p className="lead">N'hésitez pas à me contacter via le formulaire ci-dessous.</p>
                </div>

                {/* Informations de contact */}
                <div className="text-center mb-4">
                    <p><strong>Adresse e-mail :</strong> <a href="mailto:kenjiogier@gmail.com">kenjiogier@gmail.com</a></p>
                    <p><strong>Téléphone :</strong> <a href="tel:+123456789">+123456789</a></p>
                    <div className="d-flex justify-content-center gap-3">
                        <a href="https://github.com/Kenji-Or" target="_blank" rel="noopener noreferrer" aria-label="Lien vers le profil GitHub">
                            <img className="rounded img-fluid"
                                 src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F11%2FGitHub-Logo.png&f=1&nofb=1&ipt=21f188b611244dc9ea2613f0d77d687dc3f7c272212a5f5a2cf5d204e8e6e0ef&ipo=images"
                                 alt="logo GitHub"
                                 style={{width: "120px", height: "60px"}} />
                        </a>
                        <a href="https://www.linkedin.com/in/kenji-ogier-33583b296/" target="_blank" rel="noopener noreferrer" aria-label="Lien vers le profil LinkedIn">
                            <img className="rounded img-fluid"
                                 src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Flinkedin%2Flogo-linkedin-icon-1536.png&f=1&nofb=1&ipt=b261ef1114ebc91bbf40850359299c2079e210b2ab62e003c98f8043db53ac3a&ipo=images"
                                 alt="logo LinkedIn"
                                 style={{width: "60px", height: "60px"}} />
                        </a>
                    </div>
                </div>

                {/* Formulaire de contact */}
                <form onSubmit={handleSubmit} className="mx-auto" style={{maxWidth: '600px'}}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nom</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
