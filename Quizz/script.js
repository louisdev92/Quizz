// Variables pour les boutons et les réponses
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");
const btn6 = document.querySelector("#btn-6");
const btn7 = document.querySelector("#btn-7");
const btn8 = document.querySelector("#btn-8");
const btn9 = document.querySelector("#btn-9");
const btn10 = document.querySelector("#btn-10");
const btn11 = document.querySelector("#btn-11");
const btn12 = document.querySelector("#btn-12");
const btn13 = document.querySelector("#btn-13");
const btn14 = document.querySelector("#btn-14");
const btn15 = document.querySelector("#btn-15");
const btn16 = document.querySelector("#btn-16");
const btn17 = document.querySelector("#btn-17");
const btn18 = document.querySelector("#btn-18");
const btn19 = document.querySelector("#btn-19");
const btn20 = document.querySelector("#btn-20");

const responses = [
    btn1.nextElementSibling.nextElementSibling,
    btn3.nextElementSibling.nextElementSibling,
    btn5.nextElementSibling.nextElementSibling,
    btn7.nextElementSibling.nextElementSibling,
    btn9.nextElementSibling.nextElementSibling,
    btn11.nextElementSibling.nextElementSibling,
    btn13.nextElementSibling.nextElementSibling,
    btn15.nextElementSibling.nextElementSibling,
    btn17.nextElementSibling.nextElementSibling,
    btn19.nextElementSibling.nextElementSibling
];

// Les bonnes réponses
const correctAnswers = [true, true, false, true, false, true, false, true, true, true];

// Initialisation du score
let score = 0;

// Fonction pour afficher la réponse avec l'animation de couleur
function showResponse(button, isCorrect, index) {
    const response = responses[index];
    response.classList.add('show'); // Afficher la réponse

    if (isCorrect) {
        response.style.backgroundColor = 'green'; // Si correct, couleur verte
        score++;
    } else {
        response.style.backgroundColor = 'red'; // Si incorrect, couleur rouge
    }

    // Désactiver tous les boutons après une réponse
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(b => b.disabled = true);
}

// Ajouter des événements de clic aux boutons
btn1.addEventListener("click", () => showResponse(btn1, correctAnswers[0], 0));
btn2.addEventListener("click", () => showResponse(btn2, !correctAnswers[0], 0));
btn3.addEventListener("click", () => showResponse(btn3, correctAnswers[1], 1));
btn4.addEventListener("click", () => showResponse(btn4, !correctAnswers[1], 1));
btn5.addEventListener("click", () => showResponse(btn5, correctAnswers[2], 2));
btn6.addEventListener("click", () => showResponse(btn6, !correctAnswers[2], 2));
btn7.addEventListener("click", () => showResponse(btn7, correctAnswers[3], 3));
btn8.addEventListener("click", () => showResponse(btn8, !correctAnswers[3
