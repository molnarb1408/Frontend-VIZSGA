// 1. Feladat: Hozzunk létre függvényt,  amely bemenő paramétere egy tömb, 
// visszatérése pedig egy egész szám, ennyi prímszám található a tömbben.

function getUserPromptForArray(){
    let userInput = prompt("Add meg a tömb méretét!");
    let array = [];
    for (let i = 0; i < userInput; i++) {
        array.push(prompt("Add meg a tömb elemeit!"));
    }
    return array;
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function countPrimeNumbersInArray() {
    let array = getUserPromptForArray();
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            count++;
        }
    }
    return count;
}

function displayPrimeNumberCount () {
    let count = countPrimeNumbersInArray();
    alert("A tömbben " + count + " prímszám található.");
}

displayPrimeNumberCount();