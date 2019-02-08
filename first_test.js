Feature('Test affichage homepage + titre');

Scenario('Test affichage de la homepage + titre', (I) => {
  I.amOnPage('/');
  I.seeInTitle('IIM Paris – Grande École du Digital');
});
