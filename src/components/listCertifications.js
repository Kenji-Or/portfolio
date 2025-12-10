import apprentiCodeurPython from "../assets/images/apprenti_codeur_python.png";
import codeurJuniorPython from "../assets/images/codeur_junior_python.png";

const certifications = [
    {
        id: 1,
        title: "Apprenti Codeur",
        organisme: "TRALALERE & Amazon Future Engineer",
        year: "2025",
        description: "J’ai complété le programme de la saison 1 du programme Citizen Code Python. Amazon Future Engineer certifie\n" +
          "qu’à travers des dizaines d’activités gamifiées, j’ai appris à construire des programmes simples et ai compris les\n" +
          "principes de bases de la programmation tels que les boucles ou les instructions conditionnelles. J’ai aussi\n" +
          "commencé à manipuler la syntaxe du langage Python",
        img: apprentiCodeurPython,
        colorClass: "primary"
    },
    {
        id: 2,
        title: "Codeur Junior",
        organisme: "TRALALERE & Amazon Future Engineer",
        year: "2025",
        description: "J’ai complété le programme de la saison 2 du programme Citizen Code Python. Amazon Future Engineer certifie\n" +
          "qu’à travers des dizaines d’activités ludiques, j’ai appris à créer de premiers programmes avancés. Plus que des\n" +
          "suites d’instruction, j’ai créé des algorithmes et manipulé des fonctions ou encore des boucles while. J’ai aussi\n" +
          "une certaine maîtrise de la syntaxe du langage Python",
        img: codeurJuniorPython,
        colorClass: "success"
    }
];

export default certifications;
