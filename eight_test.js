Feature('Test de la page Année préparatoire + données présentes');

Scenario('Test de la page Année préparatoire + données présentes', (I) => {
I.amOnPage('/admissions/annee-preparatoire/');
I.see('une lettre de motivation', '.page-template-default .content-page ul li:nth-of-type(1)');
I.see('une photocopie recto verso de la carte d’identité, ou une photocopie du passeport pour les étudiants étrangers', '.page-template-default .content-page ul li:nth-of-type(2)');
I.see('les relevés de notes des deux dernières années en cours (des trois dernières en cas de redoublement)', '.page-template-default .content-page ul li:nth-of-type(3)');
I.see('le règlement des frais de traitement du dossier', '.page-template-default .content-page ul li:nth-of-type(4)');
I.see('une copie des diplômes', '.page-template-default .content-page ul li:nth-of-type(5)');
I.see('un dossier comprenant des réalisations techniques', '.page-template-default .content-page ul li:nth-of-type(6)');
});
