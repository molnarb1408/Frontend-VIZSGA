
//1. Rendezi a tömb elemeit
var fruits = ["Ananász", "Körte", "Szilva", "Narancs"];
fruits.sort();        // Rendezi a tömb elemeit
document.getElementById("sort").innerHTML = fruits.toString();

//2. Megfordítja a sorrendet (rendezést nem csinál!!!)
fruits.reverse(); 
document.getElementById("reverse").innerHTML = fruits.toString(); 

//3. Számok rendezése: compare függvénnyel
var points = [40, 100, 1, 5, 25, 10];
//működése: compare fv.-t hívja meg: 40-ből kivonja a 100-at=-60 (negatív szám), megcseréli
points.sort(function(a, b){return a - b}); 
document.getElementById("compareFunction").innerHTML = points.toString();

//4. Számok rendezése: compare függvénnyel- csökkenő sorrendben
points.sort(function(a, b){return b - a});
document.getElementById("compareFunctionDesc").innerHTML = points.toString();

//5. Tömb elemeinek véletlen rendezése
points.sort(function(a, b){return 0.5 - Math.random()});
document.getElementById("sortRandom").innerHTML = points.toString();

//6. legkisebb/legnagyobb érték meghatározása
//Megoldás lehet: rendezni és a 0-as indexen lévő elem lesz a legkisebb/legnagyobb
// vagy: Math.max, Math.min() fv.-ek

var testArray = [1, 2, 3];
console.log(Math.max(1, 2, 3));  // -> 3
console.log(Math.max(testArray)); // NaN

var points = [40, 100, 1, 5, 25, 10];
document.getElementById("maxArray").innerHTML = myArrayMax(points);
document.getElementById("minArray").innerHTML = myArrayMin(points);

function myArrayMax(arr) {
    //első paramétere this, de nem kell átadnunk Math fv-ek esetében (static)
    //2. paramétere a tömb
    return Math.max.apply(null, arr);
}
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}