/*
Doplň k obrázkům v HTML data atribut data-kalorie
a jako hodnotu do něj dej číslo, představující kalorickou
hodnotu potraviny na obrázku (číslo si klidně vymysli).

Zařiď, aby se při kliknutí na obrázek volala funkce,
která vypíše kalorickou hodnotu potraviny.

BONUS: počítej a zobrazuj celkový počet sněděných kalorií.
Tj. při klikání na obrázky se postupně sčítají kalorie.
*/


let ovoce = document.querySelector(".ovoce").querySelectorAll("img");
let vysledek = document.querySelector("#vysledek");
let pocetKalorii = 0;
//console.log(ovoce);

ovoce.forEach(element => {
    
    element.addEventListener("click", () => {
        //console.log(element.dataset.kalorie);
        pocetKalorii += parseInt(element.dataset.kalorie);
        vysledek.innerHTML = "Snězeno " + pocetKalorii + " kcal";
    })
    
});


