Feature('Test de la page alternance');

Scenario('Test Elodie Gueneau', (I) => {
  I.amOnPage('/entreprises-debouches/alternance/');
  I.see('Elodie Guéneau', '.author > div.row:nth-child(2) > div:nth-child(1) > h3');
  I.see('elodie.gueneau@devinci.fr', '.author > div.row:nth-child(2) > div:nth-child(1) > p > a');
});
