import React from 'react';

const Home = () => {
  const cvPDF = () => {
    alert("téléchargement cv !");
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/CV_Kenji_Ogier.pdf`; // Chemin vers ton fichier PDF
    link.download = 'cv_Kenji_Ogier.pdf'; // Nom du fichier lors du téléchargement
    link.click(); 
  };

  const portfolioItems = [
    {
      year: '2023-2025',
      title: 'BTS SIO option SLAM',
      description: 'BTS SIO option SLAM AFIP Formations',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      year: '2019-2022',
      title: 'Bac STI2D option SIN',
      description: 'Bac STI2D option SIN Lycée Galilée',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  return (
      <div className="App">
        <header className="hero-section text-white text-center d-flex align-items-center">
          <div className="container">
            <h1 className="display-1 mb-4">Bienvenue sur mon Portfolio</h1>
            <p className="lead mb-5">Développeur passionné | Créateur d'innovations</p>
            <button className="btn btn-outline-light btn-lg" onClick={cvPDF}>
              Télécharger mon CV
            </button>
          </div>
        </header>

        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="display-4 text-center mb-5">Qui suis-je ?</h2>
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=755&q=80" alt="Kenji Ogier" className="img-fluid rounded-circle" />
              </div>
              <div className="col-md-6">
                <h3 className="mb-4">Kenji Ogier</h3>
                <p className="lead mb-4">Développeur d'applications passionné, je m'engage à concevoir des solutions innovantes et utiles pour les utilisateurs.</p>
                <p className="mb-4">J'ai soif d'apprendre de nouvelles compétences et technologies afin d'améliorer constamment mes créations et proposer des applications toujours plus performantes.</p>
                <p className="mb-4">Mon portfolio reflète mon expérience et mon expertise, et j'espère qu'il saura capter votre intérêt autant que j'ai pris plaisir à développer ces projets.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <h2 className="display-4 text-center mb-5">Mon parcours</h2>
            <div className="row">
              {portfolioItems.map((item, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm">
                      <img src={item.image} className="card-img-top" alt={item.title} />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{item.year}</h6>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-dark text-white text-center py-4">
          <div className="container">
            <p className="mb-0">&copy; 2024 Kenji Ogier. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
  );
}
//  );
//};

export default Home;
