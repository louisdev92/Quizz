// Sélecteurs

//document.querySelector("h4").style.background = "red";
const baliseHTML = document.querySelector("h4");
// baliseHTML.style.background = "red";

// Ciblage de .click-event
const questionContainer = document.querySelector(".click-event");

// On écoute le déclenchement du click sur l'élément

/*
questionContainer.addEventListener("click", () => {
    console.log("test du click");
    questionContainer.style.background = "red";
    questionContainer.style.border = "5px solid black"
})*/

questionContainer.addEventListener("click", () => {
    // Pour ajouter une class : add
    //questionContainer.classList.add("question-clicked")

    // Pour supprimer une class : remove
    //questionContainer.classList.remove("question-clicked")

    questionContainer.classList.toggle("question-clicked")
})

// Sélectioner un élément avec son ID
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");

// Quizz
const response = document.querySelector("p");

btn1.addEventListener("click", () =>{
    response.classList.add("show-response");
    response.style.background = "red";
})

btn2.addEventListener("click", () =>{
    response.classList.add("show-response");
    response.style.background = "green";
})

// formulaire = form events
const imputTexte = document.querySelector("input[type='text']");
let texte = "";
imputTexte.addEventListener("input", (e) => {
    console.log(e.target.value);
    texte = e.target.value;
})

console.log(texte);

// Validation du formulaire
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    // Supprime la fonctionalité native de l'élément ciblé
    e.preventDefault();

    // On insère du HTML avec JS dans une div
    document.querySelector("form > div").innerHTML = `
    <h3> Texte : ${texte}</h3>`;

})