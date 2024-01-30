let carre1      = document.querySelector("#carre1");
let carre2      = document.querySelector("#carre2");
let carre3      = document.querySelector("#carre3");
let carre4      = document.querySelector("#carre4");
let carre5      = document.querySelector("#carre5");
let codeCouleur = document.querySelector(".codeCouleur");

let carre1Style = window.getComputedStyle(carre1);
let carre2Style = window.getComputedStyle(carre2);
let carre3Style = window.getComputedStyle(carre3);
let carre4Style = window.getComputedStyle(carre4);
let carre5Style = window.getComputedStyle(carre5);

function afficherCouleur(carreStyle) {
    // afficher le texte + changer contenu texte
    codeCouleur.style.visibility = "visible";
    codeCouleur.value = `${carreStyle.backgroundColor}`;

    // essai changer couleur
    // carre5Style.style.backgroundColor = carreStyle.style.backgroundColor;
}

carre1.addEventListener('click', function() {
    afficherCouleur(carre1Style)
});

carre2.addEventListener('click', function() {
    afficherCouleur(carre2Style)
});

carre3.addEventListener('click', function() {
    afficherCouleur(carre3Style)
});

carre4.addEventListener('click', function() {
    afficherCouleur(carre4Style)
});

