Feature('Test des réseaux sociaux');

Scenario('Test Facebook', (I) => {
  I.amOnPage('/');
  I.click({css: '.social-icons-container .social-icons:nth-child(1) .icon-item a'});
  I.wait(3);
  I.switchToNextTab();
  I.seeInCurrentUrl('https://www.facebook.com/Institut.Internet.Multimedia');
});

Scenario('Test Twitter', (I) => {
  I.amOnPage('/');
  I.click({css: '.social-icons-container .social-icons:nth-child(2) .icon-item a'});
  I.wait(3);
  I.switchToNextTab();
  I.seeInCurrentUrl('https://twitter.com/iimparis');
});

Scenario('Test Youtube', (I) => {
  I.amOnPage('/');
  I.click({css: '.social-icons-container .social-icons:nth-child(3) .icon-item a'});
  I.wait(3);
  I.switchToNextTab();
  I.seeInCurrentUrl('https://www.youtube.com/user/chaineIIM');
});

Scenario('Test Google+', (I) => {
  I.amOnPage('/');
  I.click({css: '.social-icons-container .social-icons:nth-child(4) .icon-item a'});
  I.wait(3);
  I.switchToNextTab();
  I.seeInCurrentUrl('https://plus.google.com/+IIMfr');
});
