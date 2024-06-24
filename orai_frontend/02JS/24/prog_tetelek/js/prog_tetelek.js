/***************************************************************************/
/*************** Programozási tételek *************************************/
/*************************************************************************/

let numbers = [5, 9, 13, 10, 13, 11, 1, 4];

let numbersTxt = "";

//function arrayElementPrint(value, index, array){
function getArrayValue(value) {
    numbersTxt = numbersTxt + " " + value;
}

numbers.forEach(getArrayValue); //callback fv. 
//Callback fv. olyan fv., ami meghív egy másik fv - A folyamatot a hívó fél szabályozza
document.getElementById("arrayElements").innerHTML += numbersTxt;


/********************* Összegzés **********************************/
// Összegzés tétele: egy halmaz (tömb) elemei értékének az összeggével tér vissza.
// Feladatok: Határozzuk meg a heti össz. bevételt, van volt az összes eladott termék...
function sum() {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function sumPrint() {
    let sumObj = document.getElementById("sum");
    sumObj.innerHTML = "";
    sumObj.innerHTML = "Összegzés tétele:";
    sumObj.innerHTML += sum();
}

function sumPrintAlert() {
    alert("Összeg: " + sum());
}

//sumPrint(); //onPageLoad esemény - oldalbetöltödés

/**************************** Megszámlálás tétele  ******************************/
// A halmazon (tömb) belül megszámoljuk az adott tulajdonságú elemeket.
// Adott tulajdonság: páros/páratlan, érték alatt/felett/egyenlő
// Vagy: hány alkalommal szerepel benne 1 karakter
// Feladatokban kulcsszó: db, számoljuk meg vmit

function countEven() {
    let counter = 0;
    numbers.forEach(number => {
        if (number % 2 == 0) {
            counter++;
        }
    });
    return counter;
}

function countPrint(){
    let countObj= document.getElementById("countPrint");
    countObj.innerHTML = "";
    countObj.innerHTML = "Megszámlálás tétele: ";
    countObj.innerHTML += countEven();
}

/**************************** Minimum kiválasztás tétele  ******************************/
// A halmazon (tömbön) belül keressük a legkisebb értékű elemet.
// Példákban: Mennyi volt a legkisebb bevétel, ki a legalacsonyabb stb.
function minSelect(){
    let min = numbers[0];
    numbers.forEach(number => {
        if (number<min){
            min = number;
        }
    });
    return min;
}

function minPrint(){
    let minObj= document.getElementById("min");
    minObj.innerHTML = "";
    minObj.innerHTML = "Minimum kiválasztás: ";
    minObj.innerHTML += minSelect();
}

/**************************** Maximum kiválasztás tétele  ******************************/
// A halmazon (tömbön) belül keressük a legnagyobb értékű elemet.
// Példákban: Mennyi volt a legnagyobb bevétel, ki a legmagasabb stb.
// A legnagyobb indexét is keressünk.
// Mi történik, akkor ha azonosan magas érték szerepel a tömbben?

// 1. Mi a legnagyobb érték a tömbben? 13
// 2. Melyik index(eken) található a legnagyobb érték?

function maxSelect(){
    let max = numbers[0];
    numbers.forEach(number => {
        if (number>max){
            max = number;
        }
    });
    return max;
}

function maxPrint(){
    let maxObj= document.getElementById("max");
    maxObj.innerHTML = "";
    maxObj.innerHTML = "Maximum kiválasztás: ";
    maxObj.innerHTML += maxSelect();
}

//foreach-el is megoldható, mert lekérdezhető az index
function maxValueIndexDefine(){
    let maxIndexes = [];
    let max = maxSelect(); //13
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == max) {
            maxIndexes.push(i);
        }
    }
    return maxIndexes;
}

function maxIndexPrint(){
    let maxIndexes = maxValueIndexDefine();
    //console.log(maxIndexes);
    let result = "";
    maxIndexes.forEach(index =>{
        result += " " + index;
    });
    document.getElementById("maxIndex").innerHTML = "Index: "+result;
}

/********************************** Eldöntés tétele - while() *****************************/
// Számsorozaton belül keressük az adott tulajdonságú elemet.
// Csak az a feladata, hogy eldöntse van -e ilyen elem vagy nincs - boolean-nal, 
// logikai tipussal tér vissza
// is kezdetű metódus logikaival tér vissza

function isArrayContainsPrint(){
   // console.log(isArrayContainsFor(9));
   document.getElementById("decide").innerHTML = isArrayContainsWhile(99);
}

// Megoldás for ciklussal: nem hatékony, főleg ha már az elején megtalálja a keresett értéket
// Megoldása lehet a break, de jobb megoldás a while használata
function isArrayContainsFor(searchValue){
    let isArrayContains = false;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == searchValue) {
            isArrayContains = true;
            //break;
        }
    }
    return isArrayContains;
}
//let numbers = [5, 9, 13, 10, 13, 11, 1, 4];
// Helyes megoldás: while ciklussal: nincsenek benne felesleges futások
// Addig fusson a ciklus, amíg a tömb végéig nem érek, vagy meg nem találom a keresett elemet
function isArrayContainsWhile(searchValue){
    let result = false;
    let i = 0;
    while (i<numbers.length && numbers[i] != searchValue) {
        i++;
    }
    if (i<numbers.length){
        result = true;
    }
    return result;
}

//További tételek: kiválasztás, kiválogatás, metszet, unió stb. 





