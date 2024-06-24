/*************** Függvény ismétlés ********************/

// fv. deklaráció - function declaration
// lehet akár több return (elágazásnál, nem ajánlott)
// Fontos szabály: one function one action - egy fv. egy dolgot csinál
function sum(a, b) {
    // let osszeg = a+b;
    return a + b;
}

// fv. hívás - function call
console.log(sum(1, 3));//4

/************** Függvény kifejezések *********************/
// Fv. változóba másolunk
// Létrehozunk egy printSalute nevű változót, ami fv. lesz és fv.-ként viselkedik
// (több szempontból, de nem minden szempontból)

//printSalute(); // Cannot access 'printSalute' before initialization, változóként működik

printSaluteFunction(); //mindegy a sorrend, mert fv/eljárás

let printSalute = function () {
    console.log("Function expression(fv. kifejezés): Üdvözöllek!!!");
}

function printSaluteFunction() {
    console.log("Function (fv.): Üdvözöllek :)");
}

printSaluteFunction();
printSalute(); // itt már meghívható, mert a fv kifejezés létrehozása után szerepel

// Összefoglalva: a fv és fvkif. a JS motor különféleképpen dolgozza fel. 
// A fvKif., akkor jön létre, amikor a kódban odaér (sorrendiség), ezért csak utána hívható meg
// Fv. a teljes scripten belül bárhol elérhető.


// best practice - welcome fv kif. előre létrehozzuk (nem kap értéket)
// az elágazáson belül kap csak értéket
let age = Number(prompt("Kérem adja meg az életkorát: "));
let welcome; //fv. kif. lesz
if (age < 18) {
    welcome = function () {
        alert("Szia...");
    }
} else {
    welcome = function () {
        alert("Üdvözlöm...");
    }
}
welcome();
// 10 sor helyett 1 sorban: ternary operator, question mark operator ? (short if) - javasolt forma
// kétirányú elágazást valósít meg
let welcome2 = (age<18) ? function(){console.log("welcome2: Szia...")} : function() {console.log("welcome2: Üdvözlöm")};
welcome2(); // FONTOS a sorrend

// Fv. kifejezés mikor előnyős: 
// pld. call back függvények - függvény hív meg függvényt

/**************** Arrow function ***********************/
// Hasonló, mint a fvKif. csak még egyszerűbb a felépítése

//fvKif.
let sumTwoNumbers = function(a,b){
    return a+b;
}
console.log("Function expresssion (fv kifejezés):"+sumTwoNumbers(2,3));//5

// Arrow function - rövidebb form (a két működése ua. )
let sumTwoNumbers2 = (a,b) => a+b;
console.log("Arrow function: "+sumTwoNumbers2(2,3)); //5

