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
 console.log(isEven(5)); // false
-------------------------------------------------------------------------
 /*let a = 5;
 function test() {
    let a = 10;
    console.log(a); // 10
 }
    test();
    console.log(a); // 5 */

    /*
---------------------------------------------------------------------------------

let djur = "hund";   // Variabeldeklaration
djur = "katt";    // Variabeluppdatering

djur = "hund" + "katt"; // Variabeluppdatering
console.log(djur);
----------------------------------------------------------------------------------
let summa = 2000;
console.log("Summan är: " + summa + "kr");
let dricks = 0.15; // 15% dricks
let sumDricks =summa * dricks;
console.log("Dricks är: " + sumDricks + "kr");
let total = summa + sumDricks;
console.log("Totalsumma är: " + total + "kr");
---------------------------------------------------------------------------------

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

--------------------------------------------------------------------------------
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
---------------------------------------------------------------------------------
const num1= prompt("Välj första numret");
console.log("Första numret är: " + num1);
const num2= prompt("Välj andra numret");
console.log("Andra numret är: " + num2);

add(num1, num2);
--------------------------------------------------------------------------------
let a = 10;
let b = 20;

if (a >= b) {
    console.log("a är större än eller lika med b");
} else {
    console.log("a är mindre än b");
}
-------------------------------------------------------------------------
let c = "apple";
let d = "banana";

if (c === d) {
    console.log("c är lika med d");
} else {
    console.log("c är inte lika med d");
}
-------------------------------------------------------------------------
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
-------------------------------------------------------------------------
const heigth = prompt("skriv in din längd?");

if (heigth >= 150) {
    console.log(true);
} else {
    console.log(false);
}
-------------------------------------------------------------------------
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
-------------------------------------------------------------------------
function countLength(text) {
    return text.length;
}
 let minString = "Hej Joanna";
 console.log("Strängen är: " + minString);
console.log("Längden på strängen är: " + countLength(minString));
--------------------------------------------------------------------------
function countLength(text) {
    return text.length;
}
 let text= "Hej Joanna"; 
 console.log("Strängen är: " + text); 
console.log("Längden på strängen är: " + countLength(text));

function datum(text) {
    return text.substring(0, 4);
}

let year = "2023-10-01";
console.log("Datumet är: " + datum(year));

const number = prompt("Skriv in ett nummer för att beräkna: ");
const operator = prompt("Ange en operator: +, -, *, /");
const number2 = prompt("Skriv in ett till nummer för att beräkna: ");
console.log("Första numret är: " + number);
console.log("Operatorn är: " + operator);
console.log("Andra numret är: " + number2); 
-----------------------------------------------------------------------------
function addera(a, b) {
    return a + b;
}
function subtrahera(a, b) {
    return a - b;
}
function multiplicera(a, b) {
    return a * b;
}
function dividera(a, b) {
    if (b === 0) {
        return "Kan inte dividera med noll";
    }
    return a / b;
}

function berakna(tal1, tal2, operator) {
    if(typeof tal1 !== "number" || typeof tal2 !== "number") {
        return "Båda talen måste vara nummer";
    }
    switch (operator) {
        case "+":
            return addera(tal1, tal2);
        case "-":
            return subtrahera(tal1, tal2);
        case "*":
            return multiplicera(tal1, tal2);
        case "/":
            return dividera(tal1, tal2);
        default:
            return "Ogiltig operator. Använd '+', '-', '*', eller '/'"
    }
}

console.log("Resultatet är: " + berakna(Number(number), Number(number2), operator));
---------------------------------------------------------------------------
 function selectComputerWeapon() {
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    if (randomNumber === 0) {
        computerChoice = "sten";
    } else if (randomNumber === 1) {
        computerChoice = "sax";
    } else {
        computerChoice = "påse";
    }
 }
----------------------------------------------------------------------------
 document.getElementById("myButton").addEventListener("click", function() {
        document.getElementById("message").innerText = "nytt spel!";
    });
// Funktion som slumpar datorns val
function slumpaDatorVal() {
    let val = ["sten", "sax", "påse"];
    let index = Math.floor(Math.random() * val.length);
    return val[index];
}

// Spelare 1 väljer
let spelare1 = prompt("Spelare 1, välj sten, sax eller påse:").toLowerCase();
console.log("Spelare 1 valde: " + spelare1);

// Datorn gör sitt val
let dator = slumpaDatorVal();
console.log("Datorn valde: " + dator);

if (spelare1 === dator) {
    console.log("Det blev oavgjort!");
} else if ((spelare1 === "sten" && dator === "sax") ||
           (spelare1 === "sax" && dator === "påse") ||
           (spelare1 === "påse" && dator === "sten")) {
    console.log("Spelare 1 vinner!");
} else if ((dator === "sten" && spelare1 === "sax") ||
           (dator === "sax" && spelare1 === "påse") ||
           (dator === "påse" && spelare1 === "sten")) {
    console.log("Datorn vinner!");
} else {
    console.log("Ogiltigt val! Välj mellan sten, sax eller påse.");
}
function avgörVinnare(spelare1, dator) {
    if (spelare1 === dator) {
let resultat = avgörVinnare(spelare1, dator);
    }
document.getElementById("message").innerText = 
        "Du valde: " + spelarensVal + "\n" +
        "Datorn valde: " + datornsVal + "\n" +
        "Resultat: " + resultat;
----------------------------------------------------------------------------
        
 // Rock, Paper, Scissors Game

/**
 * Prompt for user
 * set variabel to userChoice
 * Select random
 * set variabel to computerChoice
 * Determine winner
 * Display result
 
function determineWinner() {

 if (userChoice === "sten") {
    if (computerChoice === "sten") {
        console.log("Oavgjort!");
    } else if (computerChoice === "sax") {
        console.log("Du vinner!");
    } else if (computerChoice === "påse") {
        console.log("Datorn vinner!");
    }
 } else if (userChoice === "sax") {
    if (computerChoice === "sax") {
        console.log("Oavgjort!");
    } else if (computerChoice === "påse") {
        console.log("Du vinner!");
    }   else if (computerChoice === "sten") {
        console.log("Datorn vinner!");
    }
 } else if (userChoice === "påse") {
    if (computerChoice === "påse") {
        console.log("Oavgjort!");
    } else if (computerChoice === "sten") {
        console.log("Du vinner!");
    } else if (computerChoice === "sax") {
        console.log("Datorn vinner!");
    }
 }

}

const userChoice = prompt("Välj sten, sax eller påse:").toLowerCase();

  function selectComputerWeapon() {
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    if (randomNumber === 0) {
        computerChoice = "sten";
    } else if (randomNumber === 1) {
        computerChoice = "sax";
    } else {
        computerChoice = "påse";
    }
 }

 function selectComputerWeapon() {
    const randomNumber = Math.floor(Math.random() * 3);
   
    if (randomNumber === 0) {
        return "sten";
    } else if (randomNumber === 1) {
        return "sax";
    } else {
        return "påse";
    }
 }

 let computerChoice = selectComputerWeapon();

console.log("Du valde: " + userChoice);
console.log("Datorn valde: " + computerChoice);

determineWinner()*/

let todos = [];
const buttonElem = document.querySelector("add-todo-button"); //söker i webbsidan
console.log(buttonElem);

buttonElem.addEventListener("click", () => {

    const todo = prompt ("Vad vill du göra");

    todos.push(todo);

    console.log(todos);
});