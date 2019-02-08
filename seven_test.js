Feature('Test de la page alternance + données présentes');

Scenario('Test Elodie Gueneau page alternance', (I) => {
I.amOnPage('/entreprises-debouches/alternance/');
I.see('Elodie Guéneau', '.author > div.row:nth-child(2) > div:nth-child(1) > h3');
I.see('Responsable des Relations Entreprises', '.author > div.row:nth-child(2) > div:nth-child(1) > h4');
I.see('elodie.gueneau@devinci.fr', '.author > div.row:nth-child(2) > div:nth-child(1) > p:nth-of-type(1) > a');
I.see('Tél : 01 41 16 75 56', '.author > div.row:nth-child(2) > div:nth-child(1) > p:nth-of-type(2)');
});
