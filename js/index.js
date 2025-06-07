/*const namn = ["Anna", "Joanna", "Sandra", "Karin", "Lina"];

namn.forEach(namn => 
    console.log(namn));


namn.forEach(function(namn) {
    console.log(namn);
});*/

/*function isEven(num) {
    return num % 2 === 0;
}
 console.log(isEven(4)); // true
 console.log(isEven(5)); // false*/

 /*let a = 5;
 function test() {
    let a = 10;
    console.log(a); // 10
 }
    test();
    console.log(a); // 5 */

    document.getElementById("myButton").addEventListener("click", function() {
        document.getElementById("message").innerText = "du klickade!";
    });

/*
let djur = "hund";   // Variabeldeklaration
djur = "katt";    // Variabeluppdatering

djur = "hund" + "katt"; // Variabeluppdatering
console.log(djur);

let summa = 2000;
console.log("Summan är: " + summa + "kr");
let dricks = 0.15; // 15% dricks
let sumDricks =summa * dricks;
console.log("Dricks är: " + sumDricks + "kr");
let total = summa + sumDricks;
console.log("Totalsumma är: " + total + "kr");


let myName = "Joanna";
let myAge = 39;
let myCity = "Stockholm";

console.log("Mitt namn är " + myName + ", jag är " + myAge + " år gammal " + "och jag bor i " + myCity);

if (myName == "Joanna") {
    console.log("du heter Joanna!")
} else {
    console.log("du heter inte Joanna!")
}

if (myAge >= 18) {
    console.log ("Du är myndig");
} else if (myAge < 18) {
    console.log("Du är inte myndig");
}


 //Function och scope ()

function myFunction() {}
const myFunction = function() {};

function myFunction(param1, param2) {
    console.log(param1 + param2);
}

myFunction("Hej ", "Joanna");
myFunction("Hej ", "Anna");*/

/*function add(num1, num2) {
    console.log("Add");
    let sum= Number(num1) + Number(num2);

    console.log("Summan är: " + sum);
}

const num1= prompt("Välj första numret");
console.log("Första numret är: " + num1);
const num2= prompt("Välj andra numret");
console.log("Andra numret är: " + num2);

add(num1, num2);*/

/*let a = 10;
let b = 20;

if (a >= b) {
    console.log("a är större än eller lika med b");
} else {
    console.log("a är mindre än b");
}

let c = "apple";
let d = "banana";

if (c === d) {
    console.log("c är lika med d");
} else {
    console.log("c är inte lika med d");
}

const number = prompt("skriv in din ålder?");
const number2 = prompt("Skrin in den andras ålder?");

if (number > number2) {
    console.log(number);
} else if (number < number2) {
    console.log(number2);
} else 
{
    console.log("De är lika gamla");
}

if (number % 2 === 0) {
    console.log("Numret är jämnt");
} else {
    console.log("Numret är udda");
}

const heigth = prompt("skriv in din längd?");

if (heigth >= 150) {
    console.log(true);
} else {
    console.log(false);
}

let heigth = prompt("Skriv in din längd i cm?");
let weigth = prompt("Skriv in din vikt i kg?");

const bmi = weigth / ((heigth / 100) ** 2);

let roundedBmi = Math.round(bmi);
console.log("Ditt BMI är: " + roundedBmi);

if (roundedBmi < 18.5) {
    console.log("Du är underviktig");
} else if (roundedBmi >= 18.5 && roundedBmi < 25) {
    console.log("Du har normalvikt");
} else if (roundedBmi >= 25 && roundedBmi < 30) {
    console.log("Du är överviktig");
} else if (roundedBmi >= 30) {
    console.log("Du är fetma");
} else {
    console.log("Ogiltigt BMI");
}

function countLength(text) {
    return text.length;
}
 let minString = "Hej Joanna";
 console.log("Strängen är: " + minString);
console.log("Längden på strängen är: " + countLength(minString));*/

function countLength(text) {
    return text.length;
}
 let text= "Hej Joanna"; 
 console.log("Strängen är: " + text); 
console.log("Längden på strängen är: " + countLength(text));