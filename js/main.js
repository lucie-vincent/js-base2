// let carre2      = document.querySelector("#carre2");
// let carre3      = document.querySelector("#carre3");
// let carre4      = document.querySelector("#carre4");
// let carre5      = document.querySelector("#carre5");
// let carre2Style = window.getComputedStyle(carre2);
// let carre3Style = window.getComputedStyle(carre3);
// let carre4Style = window.getComputedStyle(carre4);
// let carre5Style = window.getComputedStyle(carre5);

let carres      = document.querySelectorAll(".carre");
let codeCouleur = document.querySelector(".codeCouleur");
console.log(carres.length)



for (var carreIndex  in carres) {
    const carre = carres[carreIndex]

    console.log(carre)
    carre.addEventListener('click', function() {
            afficherCodeCouleur(window.getComputedStyle(carre));
            changerCouleur(window.getComputedStyle(carre))
        })
}

function afficherCodeCouleur(carreStyle) {
    console.log(carreStyle.backgroundColor)
    codeCouleur.style.visibility = "visible";
    codeCouleur.textContent = `${carreStyle.backgroundColor}`;

}

function changerCouleur(carreStyle) {
    console.log(carres[carres.length])
    carres[carres.length-1].style.backgroundColor =carreStyle.backgroundColor;
}


// carre1.addEventListener('click', () => {
//     console.log(window.getComputedStyle(carre1))
//     afficherCodeCouleur(window.getComputedStyle(carre1)),
//     carre5.style.backgroundColor = colorGreen;
// });
