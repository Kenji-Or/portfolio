import React from 'react';

const Home = () => {
  const cvPDF = () => {
    alert("téléchargement cv !");
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/CV_Kenji_Ogier.pdf`; // Chemin vers ton fichier PDF
    link.download = 'cv_Kenji_Ogier.pdf'; // Nom du fichier lors du téléchargement
    link.click(); 
  };
  return (
    <>
    <section>
      <div className='background-image d-flex justify-content-center align-items-center'>
        <h1 className='display-1 text-center text-light'>Bienvenue sur mon Portfolio</h1>
      </div>
    </section>
    <section className="py-5">
    <div className="container">
      <h2 className='display-4 text-center'>Qui suis-je ?</h2>
      <div className="mb-4">
        <div>
          <h4 className='brand'>Kenji Ogier</h4>
          <p className="fs-4">Je suis passionné par la création et l'innovation. Mon objectif est de développer des solutions sur mesure pour répondre aux besoins de mes clients.</p>
          <br />
          <p className='fs-4'>Développeur d'applications passionné, je m'engage à concevoir des solutions innovantes et utiles pour les utilisateurs, comme en témoigne mon portfolio.</p>
          <br />
          <p className='fs-4'>J'ai soif d'apprendre de nouvelles compétences et technologies afin d'améliorer constamment mes créations et proposer des applications toujours plus performantes.</p>
          <br />
          <p className='fs-4'>Mon portfolio reflète mon expérience et mon expertise, et j'espère qu'il saura capter votre intérêt autant que j'ai pris plaisir à développer ces projets.</p>
        </div>
        <div className='text-center'>
          <button type="button" className='btn btn-primary position-relative' onClick={cvPDF}>Télécharger Curriculum Vitae</button>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};

export default Home;
