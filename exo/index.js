// Exercice 1
const addition = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Erreur : Veuillez rentrer un nombre";
    }
    return a + b;
}
let exo1 = addition(3, 4);
console.log(exo1);

// Exercice 2

function minuteToSeconde(minutes){
    return minutes * 60;
}
let exo2 = minuteToSeconde(10);
console.log(exo2);

// Exercice 3

const getMax = (a,b,c) => {
    let max =0;

    if (a > b){
        max =a;
    } else {
        max = b;
    }
    if (c > max){
        max = c;
    }
    return max;
}
let exo3 = getMax(3,6,9);
console.log(exo3);

// Exercice 4

function  resteDiv(a,b){
    return a%b;
}
let exo4 = resteDiv(2, 4);
console.log(exo4);


// Exercice 5

const reverseTab = (tab) => {
    let res = [];
    for(let i = tab.length -1; i > -1; i--){
        res.push(tab[i]);
    }
    return res;
}
let exo5 = reverseTab([1,2,3,4,5,6,7,8]);
console.log(exo5);

// Exercice 6

const nbrsPattes = (poulets, vaches, chevaux) => {
    return poulets*2 + (vaches + chevaux)*4;
}
let exo6 = nbrsPattes(2, 2, 2);
console.log(exo6);

// Exercice 7

function find(tab,val){
    for(let i = 0; i < tab.length; i++){
        if (tab[i] === val){
            return i;
        }
    }
    return -1;
}
let exo7 = find([2,7,2], 7 );
console.log(exo7);

// Exercice 8

function nbrExist(tab,val){
    for(let i = 0; i < tab.length; i++){
        if (tab[i] === val){
            return true;
        }
    }
    return false;
}
let exo8 = nbrExist([2,7,2], 7 );
console.log(exo7);

// Exercice 9

function sum(tab){
    let res =0;
    for(let i=0; i < tab.length; i++){
        res += tab[i];
    }
    return res;
}
let exo9 = sum([1,1,1]);
console.log(exo9);

// Exercice 10

function nbrPaire(nb){
    let tmb = [];
    for(let i = 1; i <= nb; i++){
        if (1%2 === 0){
            tmb.push(i);
        }
    }
    return tmb;
}

let exo10 = nbrPaire(6);
console.log(exo10);

// Exercice 11

const getcategory = (url) => {
    console.log(url.split("/"));
}
let exo11 = getcategory("https://cestmonsiteweb.com/html/");
console.log(exo11);