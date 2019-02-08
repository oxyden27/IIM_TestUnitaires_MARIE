Feature('Test titres des parties ecole numérique');

Scenario('Test titres des parties ecole numérique', (I) => {
I.amOnPage('/la-grande-ecole-du-numerique/');
I.see('Présentation', '.page-template-default .content-page h2');
I.see('Titres reconnus', '.page-template-default .content-page h2');
I.see('10 bonnes raisons de choisir l’IIM', '.page-template-default .content-page h2');
I.see('Les chiffres clés', '.page-template-default .content-page h2');
I.see('La transversalité', '.page-template-default .content-page h2');
I.see('ce que font', '.row.justify-content-center.title-container div h2');
I.see('nos étudiants', '.row.justify-content-center.title-container div h2');

});
