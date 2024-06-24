let numbers = [9, 5, 13, 10, 13, 11, 1, 4];

// Feladat: első két szám cseréje
// numbers[0] --> 9 érték
// numbers[1] --> 5 érték
// Legyen a kimenet: [5,9,13,10,13,11,1,4];

// numbers[0] = numbers[1]; // 5-ös az első helyre került, sajnos a 9 elveszett
// numbers[1] = numbers[0]; // 5-öst másolja vissza a 2. helyre is

//Megoldása: átmeneti (temporális) változó bevezetése
let txt = "";

function concatArrayElements(value) {
    txt = txt + " " + value;
}

numbers.forEach(concatArrayElements);
document.getElementById("arrayElements").innerHTML += txt;

var counter = 0;
function arraySort() {
    for (let i = 0; i < numbers.length - 1; i++)
        for (let j = i+1; j < numbers.length; j++) {
            //csere alg. 
            if (numbers[i] > numbers[j]){
                counter++;
                let temp = numbers[j];
                numbers[j] = numbers[i];
                numbers[i] = temp;
            }
        }
}

function printSortedArrayElements() {
    arraySort();
    console.log(numbers);
    console.log(counter); //13 csere - nem hatékony alg.
    txt = "Rendezett tömb elemei: ";
    numbers.forEach(concatArrayElements);
    document.getElementById("arraySorted").innerHTML = txt;
}

// Rendező alg. összehasonlítás
// Milyen hatékonysági szempontok vannak?
// Gyorsaság - mennyi idő alatt valósítja meg? 
// Hány db. összehasonlítással oldja meg?
// Hány cserét valósít meg.
// Memóriahasználat és erőforrás használat
// Egyszerű cseres -> Buborék -> Gyors rendezés
// Projektfeladat: Rendező alg. összehasonlítás (min. 1 millios elemszám)
//https://anim.ide.sk/rendezesi_algoritmusok_1.php

