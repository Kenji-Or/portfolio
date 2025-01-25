import React from "react";
import {Link} from "react-router-dom";
import imageTicketGenerator from "../assets/images/accueilTicketGenerator.png";
import imageBaseGrue from "../assets/images/accueilBaseGrue.png";

const projetsFormation = [
    {
        date: "Octobre 2024 - Décembre 2024",
        title: "Développement d'un site intranet",
        img: "/",
        link: "/projets/intranet"
    },
    {
        date: "Janvier 2025 - Mars 2025",
        title: "Développement d'une application mobile",
        img: "/",
        link: "/"
    }
]

const projetsProfessionnel = [
    {
        date: "15/01/2024",
        title: "Ajout d'un tri de liste sur un site interne",
        img: "/",
        link: "/"
    },
    {
        date: "février 2024 - Janvier 2025",
        title: "Base grue",
        img: `${imageBaseGrue}`,
        link: "/projets/basegrue"
    },
    {
        date: "Juillet 2024 - Aout 2024",
        title: "POC sur une nouvelle technologie pour afficher des données",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uco.es%2Fatdfiware%2Fimages%2Fdoc%2Fcomunica%2Ftb%2F00-thingboard.png&f=1&nofb=1&ipt=33afd783f731236e25261f952ceab5a6c056b7d0b339d0174cca400b7a55f171&ipo=images",
        link: "/"
    },
    {
        date: "octobre 2024 - décembre 2024",
        title: "Générateur de tickets",
        img: `${imageTicketGenerator}`,
        link: "/projets/ticketgenerator"
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
                        <h2 className="display-4 text-center mb-5">Réalisations en cour de formations : </h2>
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