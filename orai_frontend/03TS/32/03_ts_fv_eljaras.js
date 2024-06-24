"use strict";
//ERROR duplicate function declaration: azonos mappán belül van a JS-el
//zárjuk be a js tabfület - watch be van állítva, akkor már nem dob ilyen hibát
// a tsconfig.json konfig megoldja
// 1. Tipus: Eljárás: visszatérési érték nélküli, paraméter nélküli
function printSalute() {
    //document.write("Hello, TS!!!"); //Vizsgán előfordulhat, hogy ezt kell használni
    // lsd. Első JS óra document.write - Danger - Ne használjátok
    // ! Non-null assertion operator 
    // ? optional operator
    document.getElementById("print-salute").textContent = "Hello, TS!!!";
}
function printRectangleDetails() {
    let a = getRectangleSide("Kérem adja meg az 'a' oldalt: ");
    let b = getRectangleSide("Kérem adja meg az 'b' oldalt: ");
    let result = "Kerület: " + getPerimeter(a, b) + ", Terület: " + getArea(a, b);
    document.getElementById("rectangle-details").textContent = result;
}
function printDiceRollResult() {
    let result = "Kockadobás (6 oldalú) eredménye: " + getDiceRollResult();
    document.getElementById("dice-role-result").textContent = result;
}
function printDiceRollCustomResult() {
    let result = "Kockadobás eredménye: " + getDiceRollCustom(getNumberByPromt("Kérem adja meg a kocka oldalait: "));
    document.getElementById("dice-role-custom-result").textContent = result;
}
// 2. Tipus: Eljárás: visszatérési érték nélküli, paraméterekkel
function squarePerimeterCalcAndPrint(a) {
    let perimeter = 4 * a;
    let result = "A négyzet kerülete: " + perimeter;
    document.getElementById("square-perimeter-result").textContent = result;
}
// 3. Tipus: Függvény (visszatérési értékkel, paraméter nélkül)
function getDiceRollResult() {
    // Amíg nincs return, addig szintaktikai hiba
    return Math.floor(Math.random() * 6) + 1;
}
function getDiceRollCustom(numberOfSides) {
    return Math.floor(Math.random() * numberOfSides) + 1;
}
// 4. Tipus:  Függvény (visszatérési értékkel, paraméterrel)
function getRectangleSide(message) {
    let side = Number(prompt(message));
    return side;
}
function getNumberByPromt(message) {
    let side = Number(prompt(message));
    return side;
}
function getPerimeter(a, b) {
    return (a + b) * 2;
}
function getArea(a, b) {
    return a * b;
}
//Feladat: egyedi oldalszámú kockadobás eredményét jelenítsuk meg!
printSalute();
printRectangleDetails();
//getDiceRollResult(6); //szintaktikai hiba, mert nincs paramétere
printDiceRollResult();
squarePerimeterCalcAndPrint(5);
printDiceRollCustomResult();
