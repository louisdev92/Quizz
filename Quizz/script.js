let correctAnswers = 0;  // Compteur des bonnes réponses

// Tableau des bonnes réponses
const correctAnswersArray = [
    false,  // Question 1: Faux
    true,  // Question 2: Vrai
    true, // Question 3: Vrai
    false,  // Question 4: Faux
    true, // Question 5: Vrai
    false,  // Question 6: false
    true, // Question 7: Vrai
    true,  // Question 8: Vrai
    true,  // Question 9: Vrai
    false,   // Question 10: Faux
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
        // Animer les confettis
        launchConfetti();
        // Afficher le résultat après l'animation
        setTimeout(displayResult, 1500);  // Attendre la fin de l'animation des confettis avant d'afficher le résultat
    }
}

// Afficher le résultat final
function displayResult() {
    const finalResult = document.getElementById("final-result");
    finalResult.textContent = `Vous avez répondu correctement à ${correctAnswers} question(s) sur ${correctAnswersArray.length}.`;
    finalResult.style.display = "block"; // Afficher le message final
}

// Lancer l'animation de confettis
function launchConfetti() {
    // Animation de confettis
    confetti({
        particleCount: 200,
        spread: 60,
        origin: { y: 0.6 }
    });
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


document.getElementById("restart-btn").addEventListener("click", function() {
    location.reload();  // Recharger la page pour recommencer le quiz
});
function displayResult() {
    const finalResult = document.getElementById("final-result");
    const percentage = (correctAnswers / correctAnswersArray.length) * 100;

    let message = '';
    if (percentage === 100) {
        message = "Excellent ! Vous êtes un expert ! 🎉";
    } else if (percentage >= 80) {
        message = "Très bien joué ! 😊";
    } else if (percentage >= 50) {
        message = "Pas mal, mais il reste encore à apprendre !";
    } else {
        message = "Tu peux faire mieux, persévère ! 💪";
    }

    finalResult.textContent = `Vous avez répondu correctement à ${correctAnswers} question(s) sur ${correctAnswersArray.length} (${percentage.toFixed(2)}%). ${message}`;
    finalResult.style.display = "block";
}
document.getElementById("night-mode-toggle").addEventListener("click", function() {
    // Bascule entre mode nuit et mode jour
    document.body.classList.toggle("night-mode");

    // Changer le texte du bouton selon l'état actuel
    if (document.body.classList.contains("night-mode")) {
        this.textContent = "Mode Jour";  // Lorsque nous sommes en mode nuit, le bouton doit dire "Mode Jour"
    } else {
        this.textContent = "Mode Nuit";  // Lorsque nous sommes en mode jour, le bouton doit dire "Mode Nuit"
    }
});
