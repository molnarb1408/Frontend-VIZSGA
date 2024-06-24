// Önálló feladatok: 
// Az adatbekérés és eredménymegjelenítés módja tetszőleges. Fv és/vagy eljárás segítségével oldjuk meg!
// Gombra való kattintáskor jelenjen meg egy-egy feladat megoldása!
// Feladat01: Kérjük be az alapot és kitevőt, majd írjuk ki a hatványértékét Math.pow(alap, kitevő)
// Feladat02: Kérjünk be két számot, majd írjuk ki a négyzetösszegüket!
// Feladat03: Kérjünk be egy számot, majd írjuk ki a gyökét!
// Feladat04: Kérjük be egy termék nettó árát és áfakulcsát, majd írjuk ki a bruttó árát!
// Feladat05: Döntsük el egy háromszög 3 oldala alapján, hogy szerkeszthető -e vagy nem!
// Feladat06: Kérjünk be 3 számot, írjuk ki az átlagukat! 2 féleképpen tömbben és annélkül!
// Feladat07: Írjuk ki egy kockadobás eredményét (hagyományos hatoldalú)!
// Feladat08: Kérjük be a véletlen szám alsó és felső határát, majd a megfelelő tartományban
// generáljunk ki 1 db véletlen számot!
// Feladat09: Egy 20 elemű tömböt töltsünk fel véletlen számokkal 1-100 között! Írjuk ki a 
// ki a tömb elemeit a HTML-re és a konzolra is!
// Feladat10: A felhasználótól kérjük be 5 számot, majd tároljuk le egy tömbbe és jelenítsük meg a 
// a konzolon és a HTML kimeneten is!

function getNumberFromPrompt(text) {
    let number = Number(prompt(text));
    return number;
}

function parseNumberFromForm(formId) {
    let number = Number(document.getElementById(formId).value);
    return number;
}

function calcPower() {
    let base = getNumberFromPrompt("Kérem adja meg az alapot: ");
    let power = getNumberFromPrompt("Kérem adja meg a kitevőt: ");
    let result = Math.pow(base, power);
    alert("A(z) alap:" + base + ", kitevő: " + power + ", hatványa: " + result);
}

function getPowerSum() {
    let number1 = getNumberFromPrompt("Kérem adja meg az első számot: ");
    let number2 = getNumberFromPrompt("Kérem adja meg a második számot: ");
    let sum = Math.pow(number1, 2) + Math.pow(number2, 2);
    return sum;
}

function alertPowerSumResult() {
    let result = getPowerSum();
    alert("A két szám négyzetösszege: " + result);
}

function printToConsolePowerSumResult() {
    console.log("A két szám négyzetösszege: " + getPowerSum());
}

function calcSquare(number) {
    return Math.sqrt(number);
}

function alertSquareResult() {
    let result = calcSquare(getNumberFromPrompt());
    alert("A megadott szám gyöke: " + result);
}

function calcGrossPrice() {
    let netPrice = Number(document.getElementById("netPrice").value);
    let tax = +document.getElementById("tax").value;//+ jel unary operator (Number)
    let grossPrice = netPrice + (netPrice * tax / 100);
    return grossPrice;
}

function printGrossPrice() {
    document.getElementById("resultGrossPrice").innerHTML = calcGrossPrice() + " Ft";
    printNetPriceToConsole();
}

function isTriangleEditable() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    // if (a + b > c && a + c > b && b + c > a) {
    //     return true;
    // } else {
    //     return false;
    // }
    let result = false;
    if (a + b > c && a + c > b && b + c > a) {
        result = true;
    }
    return result;
}

function printIsTriangleEditable() {
    let result = "";
    let color = "";
    if (isTriangleEditable()) {
        result = "Szerkeszthető!!!";
        color = "green";
    } else {
        result = "Nem szerkeszthető!!!";
        color = "red";
    }
    document.getElementById("resultIsTriangleEditable").innerHTML = result;
    document.getElementById("resultIsTriangleEditable").style.color = color;
    // alert div - bootstrappel
}

function calcAvg() {
    let number1 = getNumberFromPrompt("Kérem adja meg az első számot: ");
    let number2 = getNumberFromPrompt("Kérem adja meg az második számot: ");
    let number3 = getNumberFromPrompt("Kérem adja meg az harmadik számot: ");
    let avg = (number1 + number2 + number3) / 3;
    return avg;
}

function fillArray() {
    let array = [];
    let arraySize = 3;
    for (let i = 0; i < arraySize; i++) {
        array[i] = getNumberFromPrompt("Kérem adja meg a(z) " + arraySize + "/" + (i + 1) + " számot: ");
    }
    return array;
}

function calcAvgArray() {
    let array = fillArray();
    let sum = 0;
    array.forEach(
        number => sum += number
    );
    return sum / array.length;
}

function alertAvgResult() {
    alert("A számok átlaga: " + calcAvgArray());
}

function printToConsoleAvgResult() {
    console.log("A számok átlaga: " + calcAvg());
}

function generateAndAlertDiceRole() {
    let result = Math.floor((Math.random() * 6) + 1);
    alert("A dobás eredménye: " + result);
}

function generateRandomNumber() {
    //általános képlet véletlen szám generálásra
    //Math.floor(Math.random()*(max-min)+min)
    let min = getNumberFromPrompt("Kérem adja meg az alsó határt: ");
    let max = getNumberFromPrompt("Kérem adja meg a felső határt: ");
    let result = Math.floor(Math.random() * (max - min) + min);
    return result;
}

function alertRandomNumber() {
    alert("A generált véletlen szám: " + generateRandomNumber());
}

function fillArrayRandomNumber() {
    let array = [];
    let arraySize = 20;
    let min = 1;
    let max = 100;
    for (let i = 0; i < arraySize; i++) {
        array[i] = Math.floor(Math.random() * (max - min) + min);
    }
    return array;
}

function printRandomArrayToUnorderedList() {
    let ul = document.createElement('ul'); //létrehozza a ul taget a htmlben
    ul.setAttribute('style', 'padding:0;margin:0;');
    ul.setAttribute('id', 'randomUnorderedList');
    let containerRandomNumberList = document.getElementById("containerRandomNumberList");

    let array = fillArrayRandomNumber();
    let li;
    // number neve lehet bármi, temporális (átmeneti változó)
    array.forEach(number => {
        li = document.createElement('li'); //létrehozza a li taget a htmlben
        li.innerHTML = number + " "; // hozzárakja a li szöveges tartalmához a számot, ahol tartunk 
        li.setAttribute('style', 'display:inline'); //egymás mellé jelenítse meg a számokat
        ul.appendChild(li); //li hozzáadása az ul-hez (az ul már megvan, csak nem látható)
    });
    containerRandomNumberList.appendChild(ul); //ul hozzáadása a containerRandomNumberList div-hez (id)
}

function printArrayToConsole(arr) {
    arr.forEach(number => {
        console.log(number);
    });
}

function fillArrayByUserFromPrompt() {
    let array = [];
    let arraySize = 5;
    for (let i = 0; i < arraySize; i++) {
        array[i] = getNumberFromPrompt("Kérem adja meg a(z) " + arraySize + "/" + (i + 1) + " számot: ");
    }
    return array;
}

function printFillArrayByUser() {
    let array = fillArrayByUserFromPrompt();
    let result10 = document.getElementById("result10").innerHTML = array.toString();//22,55,77,88,99
}

function createInputFields(numInputs) {
    var container = document.getElementById('inputContainer');

    // Töröljük az esetleges korábbi tartalmakat
    container.innerHTML = '';

    // Fieldset létrehozása
    let fieldset = document.createElement('fieldset');
    let legend = document.createElement('legend');
    legend.textContent = "Beviteli mezők";
    fieldset.appendChild(legend);

    for (var i = 1; i <= numInputs; i++) {
        // Label létrehozása
        var label = document.createElement('label');
        label.textContent = i + '. szám: ';

        // Input mező létrehozása
        var input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('id', 'input' + i);
        input.setAttribute('style', 'display:block;');

        // Label és Input hozzáadása a fieldsethez
        fieldset.appendChild(label);
        fieldset.appendChild(input);
    }

    // Számok megjelenítése gomb létrehozása
    var displayButton = document.createElement('button');
    displayButton.setAttribute('type', 'button');
    displayButton.setAttribute('style', 'margin-top:5px');
    displayButton.textContent = 'Számok megjelenít';
    displayButton.onclick = function() {
        displayNumbers10(); 
    };
    fieldset.appendChild(displayButton);

    container.appendChild(fieldset);
}

function getNumbersFromForm() {
    var container = document.getElementById('inputContainer');
    var inputs = container.querySelectorAll('input[type="number"]');
    var numbers = [];
    console.log(inputs);
    inputs.forEach(function(input) {
        numbers.push(Number(input.value) || 0);
    });
    console.log(numbers);
    return numbers;
}

function displayNumbers10() {
    var resultElement = document.getElementById('formResult10');
    let numbers = getNumbersFromForm();
    resultElement.textContent = 'Beviteli mezők értékei: ' + numbers.join(', ');
}
