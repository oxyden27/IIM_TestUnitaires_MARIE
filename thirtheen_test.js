Feature('Test éléments master game art');

Scenario('Test éléments master game art', (I) => {
I.amOnPage('/cursus/mastere-game-art/');
I.see('Concept art', '#programmes li');
I.see('Direction artistique', '#programmes li');
I.see('Création des décors 2D/3D', '#programmes li');
I.see('Design d’interface utilisateur', '#programmes li');
I.see('Animation 2D/3D', '#programmes li');
I.see('Optimisation d’assets', '#programmes li');
I.see('Rendu – Matières, lumières et effets spéciaux', '#programmes li');

});
