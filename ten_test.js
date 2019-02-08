Feature('Test menu Navigation Programme Restart Post Bac');

Scenario('Test menu Navigation Programme Restart Post Bac', (I) => {
I.amOnPage('/');
I.click({css: '.menu-item .menu-item-3036 a'});
I.wait(3);
I.seeInCurrentUrl('https://www.iim.fr/cursus/restart-postbac/');
});
