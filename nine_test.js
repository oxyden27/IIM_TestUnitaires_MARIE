Feature('Test de la page VAE + données présentes');

Scenario('Test MARIE BERNARD page VAE', (I) => {
I.amOnPage('/admissions/vae-validation-des-acquis-de-lexperience/');
I.see('Marie BERNARD', '.container > .content-page > ul > li > strong');
I.see('marie.bernard@devinci.fr', '.container > .content-page > ul > li > a');
I.see('01 41 16 70 82', '.container > .content-page > ul > li');
});
