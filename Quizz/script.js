let correctAnswers = 0;  // Compteur des bonnes réponses

// Tableau des bonnes réponses
const correctAnswersArray = [
    true,  // Question 1: Vrai
    true,  // Question 2: Vrai
    false, // Question 3: Faux
    true,  // Question 4: Vrai
    false, // Question 5: Faux
    true,  // Question 6: Vrai
    false, // Question 7: Faux
    true,  // Question 8: Vrai
    true,  // Question 9: Vrai
    true   // Question 10: Vrai
];

// Fonction pour vérifier la réponse
function checkAnswer(button, questionIndex) {
    const isCorrect = correctAnswersArray[questionIndex - 1];
    const responseElement = button.closest('.question-container').querySelector('.response'); // Cibler la réponse correspondante

    // Afficher la bonne ou mauvaise couleur
    if (isCorrect && button.textContent === "Vrai" || !isCorrect && button.textContent === "Faux") {
        button.classList.add('correct');
        correctAnswers++; // Incrémenter le score si la réponse est correcte
        responseElement.textContent = "Bonne réponse !";
        responseElement.classList.add("show");
        responseElement.classList.add("correct"); // Ajouter la classe 'correct' pour colorier la réponse en vert
    } else {
        button.classList.add('incorrect');
        responseElement.textContent = "Mauvaise réponse !";
        responseElement.classList.add("show");
        responseElement.classList.add("incorrect"); // Ajouter la classe 'incorrect' pour colorier la réponse en rouge
    }

    // Désactiver les deux boutons pour empêcher de cliquer plusieurs fois
    disableButtons(questionIndex);

    // Vérifier si toutes les questions ont été répondues
    checkAllAnswered();
}

// Désactiver les boutons après avoir répondu à la question
function disableButtons(questionIndex) {
    const buttons = document.querySelectorAll(`#btn-${questionIndex * 2 - 1}, #btn-${questionIndex * 2}`);
    buttons.forEach(button => button.disabled = true);
}

// Vérifier si toutes les questions ont été répondues et afficher le score final
function checkAllAnswered() {
    const allQuestions = document.querySelectorAll(".question-container");
    let answeredQuestions = 0;

    allQuestions.forEach((question, index) => {
        const buttons = question.querySelectorAll(".btn");
        if (Array.from(buttons).every(button => button.disabled)) {
            answeredQuestions++;
        }
    });

    if (answeredQuestions === allQuestions.length) {
        displayResult();
    }
}

// Afficher le résultat final
function displayResult() {
    const finalResult = document.getElementById("final-result");
    finalResult.textContent = `Vous avez répondu correctement à ${correctAnswers} question(s) sur ${correctAnswersArray.length}.`;
    finalResult.style.display = "block"; // Afficher le message final
}

// Ajouter des écouteurs d'événements aux boutons
document.getElementById("btn-1").addEventListener("click", function() { checkAnswer(this, 1); });
document.getElementById("btn-2").addEventListener("click", function() { checkAnswer(this, 1); });
document.getElementById("btn-3").addEventListener("click", function() { checkAnswer(this, 2); });
document.getElementById("btn-4").addEventListener("click", function() { checkAnswer(this, 2); });
document.getElementById("btn-5").addEventListener("click", function() { checkAnswer(this, 3); });
document.getElementById("btn-6").addEventListener("click", function() { checkAnswer(this, 3); });
document.getElementById("btn-7").addEventListener("click", function() { checkAnswer(this, 4); });
document.getElementById("btn-8").addEventListener("click", function() { checkAnswer(this, 4); });
document.getElementById("btn-9").addEventListener("click", function() { checkAnswer(this, 5); });
document.getElementById("btn-10").addEventListener("click", function() { checkAnswer(this, 5); });
document.getElementById("btn-11").addEventListener("click", function() { checkAnswer(this, 6); });
document.getElementById("btn-12").addEventListener("click", function() { checkAnswer(this, 6); });
document.getElementById("btn-13").addEventListener("click", function() { checkAnswer(this, 7); });
document.getElementById("btn-14").addEventListener("click", function() { checkAnswer(this, 7); });
document.getElementById("btn-15").addEventListener("click", function() { checkAnswer(this, 8); });
document.getElementById("btn-16").addEventListener("click", function() { checkAnswer(this, 8); });
document.getElementById("btn-17").addEventListener("click", function() { checkAnswer(this, 9); });
document.getElementById("btn-18").addEventListener("click", function() { checkAnswer(this, 9); });
document.getElementById("btn-19").addEventListener("click", function() { checkAnswer(this, 10); });
document.getElementById("btn-20").addEventListener("click", function() { checkAnswer(this, 10); });
