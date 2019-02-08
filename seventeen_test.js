Feature('Test texte present sur page accès');

Scenario('Test texte present sur page accès', (I) => {
I.amOnPage('/acces/');
I.see('En voiture : Tunnel de La Défense par le Pont de Neuilly, Sortie direction La Garenne-Colombes, 1er feu tout droit, départementale D992 « Boulevard de la Mission Marchand », 3ème rue à gauche, avenue Léonard de Vinci', '.container .content-page p:nth-of-type(1)');

});