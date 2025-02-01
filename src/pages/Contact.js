import React from "react";

const Contact = () => {
    return (
        <div className="container-fluid py-5 bg-light d-flex justify-content-center align-items-center flex-column" style={{ minHeight: 'calc(100vh - 190px)' }}>
            <div className="container text-center">
                {/* Section Titre */}
                <div className="mb-5">
                    <h1 className="display-4 fw-bold mb-3 titre">
                        <span className="text-primary">Contact</span>
                    </h1>
                    <p className="lead">N'hésitez pas à me contacter par mail.</p>
                </div>

                {/* Informations de contact */}
                <div className="mb-4">
                    <p><strong>Adresse e-mail :</strong> <a href="mailto:kenjiogier@gmail.com">kenjiogier@gmail.com</a></p>
                    <p className="lead">N'hésitez pas à me contacter et à me suivre sur mes réseaux professionnels.</p>
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
            </div>
        </div>
    );
};

export default Contact;
