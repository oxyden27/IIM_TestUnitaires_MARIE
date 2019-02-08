Feature('Test texte devenir partenaire');

Scenario('Test texte devenir partenaire', (I) => {
I.amOnPage('/entreprises-debouches/devenir-partenaire/');
I.see('Forum alternance', '.page-template-default .content-page h3');
I.see('Forum entreprises', '.page-template-default .content-page h3');
I.see('Forum alumni', '.page-template-default .content-page h3');
});
