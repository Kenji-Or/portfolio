import React from 'react';
import logo_ascorel from '../assets/images/logo_ascorel.webp';
import img_me from '../assets/images/img_me_home.webp';

const Home = () => {
  const cvPDF = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/cv_kenji.pdf`; // Chemin vers le fichier PDF
    link.download = 'cv_Kenji_Ogier.pdf'; // Nom du fichier lors du téléchargement
    link.click(); 
  };

  const portfolioItems = [
    {
      year: '2019-2022',
      title: 'Bac STI2D option SIN',
      description: 'Bac STI2D option SIN Lycée Galilée',
      logo: "https://vienne.educagri.fr/wp-content/uploads/2023/05/galilee.jpg",
    },
    {
      year: '2023-2025',
      title: 'BTS SIO option SLAM',
      description: 'BTS SIO option SLAM AFIP Formations',
      logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorage.letudiant.fr%2Fosp%2Fcards%2F137%2Ftmp%2FLOGO-230301011731.jpg&f=1&nofb=1&ipt=8f242815342c90a35fb6d3d0a07aef6915eb71f9cd69ba5619db812615f3301a&ipo=images",
    },
    {
      year: '2025-2026',
      title: 'Bachelor CDA',
      description: 'Bachelor Concepteur Developpeur d\'Application, AFIP Formations',
      logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorage.letudiant.fr%2Fosp%2Fcards%2F137%2Ftmp%2FLOGO-230301011731.jpg&f=1&nofb=1&ipt=8f242815342c90a35fb6d3d0a07aef6915eb71f9cd69ba5619db812615f3301a&ipo=images",
    },
  ];

  const parcoursPro = [
    {
      year: '2023-2025',
      title: 'Ascorel',
      description: "Alternance au sein du bureau d'étude chez Ascorel pendant mes deux années de BTS. C'est une entreprise spécialisée dans l'architecture embarquée, située à Pont-Évêque.",
      image: `${logo_ascorel}`,
    },
    {
      year: '2025-2026',
      title: 'Ascorel',
      description: "Alternance au sein du bureau d'étude chez Ascorel pendant mon année de bachelor CDA. C'est une entreprise spécialisée dans l'architecture embarquée, située à Pont-Évêque.",
      image: `${logo_ascorel}`,
    }
  ]

  return (
      <div className="App">
        <header className="hero-section text-white text-center d-flex align-items-center">
          <div className="container">
            <h1 className="display-1 mb-4 titre" style={{color: "#ffffff"}}>Kenji Ogier</h1>
            <p className="lead mb-5" style={{color: "#ffffff"}}>Développeur passionné | Dev fullstack</p>
            <button className="btn btn-outline-light btn-lg" onClick={cvPDF}>
              Télécharger mon CV
            </button>
          </div>
        </header>

        <section className="py-5">
          <div className="container">
            <h2 className="display-4 text-center mb-5">Qui suis-je ?</h2>
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                    src={`${img_me}`}
                    alt="Kenji Ogier" className="img-fluid rounded-circle"/>
              </div>
              <div className="col-md-6">
                <h3 className="mb-4">Kenji Ogier</h3>
                <p className="lead mb-4">Développeur d'applications passionné, je m'engage à concevoir des solutions
                  innovantes et utiles pour les utilisateurs.</p>
                <p className="mb-4">J'ai soif d'apprendre de nouvelles compétences et technologies afin d'améliorer
                  constamment mes créations et proposer des applications toujours plus performantes.</p>
                <p className="mb-4">Mon portfolio reflète mon expérience et mon expertise, et j'espère qu'il saura
                  capter votre intérêt autant que j'ai pris plaisir à développer ces projets.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <h2 className="display-4 text-center mb-5">Mon parcours scolaire</h2>
            <div className="row">
              {portfolioItems.map((item, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm border">
                      <div className="card-body">
                        <img src={item.logo} alt={item.title} className="img-fluid rounded shadow"
                             style={{objectFit: 'contain', height: '200px', width: '100%'}}/>
                        <h5 className="card-title">{item.title}</h5>
                        <h6 className="card-subtitle mb-2">{item.year}</h6>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5">
        <div className="container">
            <h2 className="display-4 text-center mb-5">Mon parcours professionel</h2>
            <div className="row justify-content-center">
              {parcoursPro.map((item, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm border">
                      <div className="card-body">
                        <img src={item.image} alt={item.title} className="img-fluid rounded shadow"
                             style={{objectFit: 'cover', height: '200px', width: '100%'}}/>
                        <h5 className="card-title">{item.title}</h5>
                        <h6 className="card-subtitle mb-2">{item.year}</h6>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </div>
  );
}

export default Home;
