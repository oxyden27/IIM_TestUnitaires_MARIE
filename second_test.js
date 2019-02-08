Feature('Navigation test');

Scenario('Test des menus dans le header', (I) => {
  I.amOnPage('/');
  I.see('L’Ecole', '.menu-item a');
  I.see('Admissions', '.menu-item a');
  I.see('Axes', '.menu-item a');
  I.see('Programmes', '.menu-item a');
  I.see('Entreprises et débouchés', '.menu-item a');
  I.see('Vie étudiante', '.menu-item a');
  I.see('Galerie', '.menu-item a');
  I.see('Blog', '.menu-item a');
});
