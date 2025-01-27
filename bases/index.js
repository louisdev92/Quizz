// **** Les Variables ****

let maVariable;
let monAutreVar = "Hello"; // Correction : ajout de l'assignation correcte
monAutreVar = "Hello World";
console.log(monAutreVar);

// var à EVITER - INTERDIT !!
// var prenom; // Eviter d'utiliser var

const prenom = "olivier"; // Correction : type incorrect (const ne nécessite pas de type explicite)

// **** La Concaténation ****
let chaine = "je suis une chaine de caracteres"; // Correction : type incorrect

let nouvellechaine = "Chaine précédente : " + chaine + ".";
console.log(nouvellechaine);

let autreconcatenation = `Chaine précédente : ${chaine}, `; // Correction : utilisation de la syntaxe d'interpolation de chaîne
console.log(autreconcatenation);

// **** Les types de donnees ****
let vraiFaux = false; // Correction : type incorrect (boolean)

let tab = ["Hello", false, 34, "World"]; // Correction : type incorrect
console.log(tab);
console.log(tab[2]);

// Object avec des {}
let objet = { // Correction : type incorrect
    prenom: "olivier",
    age: 38,
    ville: "issoudun"
};
console.log(objet);
console.log(objet.ville);

// **** Les Operateurs *****
console.log(4 + 5); // - * /
// exposant
console.log(4 ** 5);

// Les Operateurs d'affection
let total = 0; // Correction : type incorrect
console.log(total);

total = total + 1;
total++;

console.log(total); // 2

total += 5; // - / *
console.log(total); // 7

// **** Les structures de contrôle (conditions) *****
let x = 3; // Correction : type incorrect
let y = 3; // Correction : type incorrect

if (x > y) {
    console.log("X est plus grand que Y");
} else if (y > x) {
    console.log("Y est plus grand que X");
} else {
    console.log("Ils sont égaux");
}

let bool = false; // Correction : type incorrect
if (bool) {
    console.log("bool est vrai");
} else {
    console.log("bool est faux");
}

if (!bool) {
    console.log("bool est faux mais l'inverse est vrai");
}

// == teste l'égalité de valeur
if (x == y) {
    console.log("X et Y sont égaux");
} else {
    console.log("X et Y ne sont pas égaux en valeur et en type");
}

// Ou //
// Et &&
x = 4;
y = 5;
if (x < y || x > 5) {
    console.log("X remplit une condition");
}

if (x < y && x > 3) {
    console.log("X remplit toutes les conditions");
}

// **** Les structures itératives (boucles) ****
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Insertion de données dans un tableau
tab = [];
for (let i = 0; i < 10; i++) {
    tab.push(i * 2);
}
console.log(tab);

// Lecture de données dans le tableau
for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
}

// **** Les Fonctions ****
// fonction classique
function maFonction(){
    console.log("j'execute ma fonction");
}
maFonction();

// Fonction fléchée
const addition = (a, b) => {
    console.log(a + b);
}
addition(a:2, b:6);

const addReturn = (a,b) => {
    return a + b;
}
let res = addReturn(a: 2, b: 6);
console.log(res);

let message = prompt("Quel est votre avis ?");
console.log(message)

let autreMessage = confirm("Etes-vous d'accord ?");