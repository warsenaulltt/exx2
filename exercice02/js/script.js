// On va chercher une référence à notre contenant .problemes
const problemes = document.querySelector(".problemes .contenu");

// On créé ensuite un nouvel élément HTML de type p qu'on ajoutera au DOM par la suite
const paragraph = document.createElement("p");

// On ajoute du texte à ce nouvel élément qu'on vient juste de créer
paragraph.innerText = "Le contenu HTML n'est pas encore chargé quand le JavaScript s'exécute :)";

// On ajoute ce nouveau paragraphe à la fin de notre contenant problemes
problemes.append(paragraph);
