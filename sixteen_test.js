Feature('Test bouton Voir tous les projets étudiants');

Scenario('Test bouton Voir tous les projets étudiants', (I) => {
I.amOnPage('/');
I.click({css: '.projects-students .justify-content-center a'});
I.wait(3);
I.seeInCurrentUrl('https://www.iim.fr/galerie/?');

});
