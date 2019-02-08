Feature('Test fonctionnement bouton candidature');

Scenario('Test fonctionnement bouton candidature', (I) => {
    I.amOnPage('/');
    I.click({css: 'a.grey-cta.btn-candidature'});
    I.wait(3);
    I.switchToNextTab();
    I.seeInCurrentUrl('https://admissions.leonard-de-vinci.net/ecole/IIM?utm_source=(direct)&utm_medium=(none)&utm_campaign=(not%20set)');
});
