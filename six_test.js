Feature('Test homepage adresse + téléphone IIM');

Scenario('Test homepage adresse + téléphone IIM', (I) => {
  I.amOnPage('/');
  I.see('iim@devinci.fr', '.contact-informations a span');
  I.see('01 41 16 75 11', '.contact-informations a span');
});
