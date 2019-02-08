Feature('Test bouton découvrir projets ce que font nos étudiants');

Scenario('Test bouton découvrir projets ce que font nos étudiants', (I) => {
I.amOnPage('/');
I.click({css: '.projects-students .projects-container .col-md-4 .cta_container a'});
});
