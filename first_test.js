Feature('Test de la homepage');

Scenario('Test affichage de la homepage', (I) => {
  I.amOnPage('/');
  I.seeInTitle('IIM Paris – Grande École du Digital');
});
