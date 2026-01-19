import React from "react";
import {Link} from "react-router-dom";
import imageTicketGenerator from "../assets/images/accueilTicketGenerator.webp";
import imageBaseGrue from "../assets/images/accueilBaseGrue.webp";
import accueilIntranet from "../assets/images/intranetAccueil.webp";
import imageACG from "../assets/images/acg.webp";
import imageGestionStock from "../assets/images/gestionStockAccueil.webp"
import imgPresentationSeo from "../assets/images/imgpresentationseo.webp"
import imgIPCS from "../assets/images/ipcs_web.webp";

const projetsFormation = [
    {
        date: "Octobre 2024 - Décembre 2024",
        title: "Développement d'un site intranet",
        img: `${accueilIntranet}`,
        link: "/projets/intranet"
    },
    {
        date: "Janvier 2025 - Mars 2025",
        title: "Développement d'une application gestion de stock",
        img: `${imageGestionStock}`,
        link: "/projets/gestionstock"
    },
    {
        date: "Novembre 2024 - Juin 2025",
        title: 'TP SEO',
        img: `${imgPresentationSeo}`,
        link: "/projets/seo"
    },
    {
        date: "Octobre 2025 - Janvier 2026",
        title: "Application de messagerie instantanée",
        img: "",
        link: "/projets/appchat"
    }
]

const projetsProfessionnel = [
    {
        date: "février 2024 - Janvier 2025",
        title: "Base grue",
        img: `${imageBaseGrue}`,
        link: "/projets/basegrue"
    },
    {
        date: "Juillet 2024 - Aout 2024",
        title: "Thingsboard",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uco.es%2Fatdfiware%2Fimages%2Fdoc%2Fcomunica%2Ftb%2F00-thingboard.png&f=1&nofb=1&ipt=33afd783f731236e25261f952ceab5a6c056b7d0b339d0174cca400b7a55f171&ipo=images",
        link: "/projets/thingsboard"
    },
    {
        date: "octobre 2024 - décembre 2024",
        title: "Générateur de tickets",
        img: `${imageTicketGenerator}`,
        link: "/projets/ticketgenerator"
    },
    {
        date: 'janvier 2025 - mars 2025',
        title: 'Access Code Generator',
        img: `${imageACG}`,
        link: '/projets/acg'
    },
    {
        date: 'septembre 2025 - mars 2026',
        title: 'IPCS Web',
        img: `${imgIPCS}`,
        link: '/projets/ipcs'
    }
]

const Projet = () => {
    return (
        <div className="container-fluid py-5 bg-ligh">
            <div className="container">
                {/* Title Section */}
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3 titre">
                        <span className="text-primary">Mes Projets</span>
                    </h1>
                </div>
                <section className="py-5">
                    <div className="container">
                        <h2 className="display-4 text-center mb-5">Réalisations en cours de formations : </h2>
                        <div className="row">
                            {projetsFormation.map((item, index) => (
                                <div key={index} className="col-md-6 mb-4">
                                    <Link to={item.link}>
                                        <div className="card h-100 shadow-sm">
                                            <div className="card-body">
                                                <img src={item.img} alt={item.title}
                                                     className="img-fluid rounded shadow"
                                                     style={{objectFit: 'contain', height: '200px', width: '100%'}}/>
                                                <h5 className="display-4 fw-bold mb-3">{item.title}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Kenji Ogier</h6>
                                                <h6 className="card-subtitle mb-2 text-muted">{item.date}</h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container">
                        <h2 className="display-4 text-center mb-5">Réalisations en milieu professionnel : </h2>
                        <div className="row">
                            {projetsProfessionnel.map((item, index) => (
                                <div key={index} className="col-md-6 mb-4">
                                    <Link to={item.link}>
                                        <div className="card h-100 shadow-sm">
                                            <div className="card-body">
                                                <img src={item.img} alt={item.title}
                                                     className="img-fluid rounded shadow"
                                                     style={{objectFit: 'contain', height: '200px', width: '100%'}}/>
                                                <h5 className="display-4 fw-bold mb-3">{item.title}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Kenji Ogier</h6>
                                                <h6 className="card-subtitle mb-2 text-muted">{item.date}</h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}


export default Projet;