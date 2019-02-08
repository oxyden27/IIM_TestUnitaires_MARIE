Feature('Test affichage homepage anglais + titre anglais');

Scenario('Test click page anglais', (I) => {
I.amOnPage('/');
I.click('.wpml-ls-link');
});


Scenario('Test affichage page anglais avec menu', (I) => {
I.amOnPage('/en');
I.see('Who we are', '.menu-item a');
});
