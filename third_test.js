Feature('Test de l\'affichage des 5 axes métiers de l\'IIM');

Scenario('Test de l\'affichage des 5 axes métiers de l\'IIM', (I) => {
  I.amOnPage('/');
  I.see('DÉVELOPPEMENT WEB', '.axes-metier .icons-container span');
  I.see('COMMUNICATION DIGITALE & E-BUSINESS', '.axes-metier .icons-container span');
  I.see('CRÉATION & DESIGN', '.axes-metier .icons-container span');
  I.see('ANIMATION 3D', '.axes-metier .icons-container span');
  I.see('JEUX VIDÉO', '.axes-metier .icons-container span');
});
