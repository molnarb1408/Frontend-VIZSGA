"use strict";
// Feladat: Készítsünk függvényt, amelynek bemenő paramétere egy egész szám, melyik lottószámokat generálja ki: 
// 5-ös, 6-os vagy 7-es (skandi). Térjen vissza 1 lehetséges hét számaival (szám tömb)!
function promptUserInputLotteryType() {
    let lotteryType = Number(prompt("Adja meg a lottótípust (5, 6, 7): "));
    return lotteryType;
}
function generateLotteryNumbers(numOfNumbers) {
    let lotteryType = promptUserInputLotteryType();
    const numbers = [];
    switch (lotteryType) {
        case 5:
            let randomNumber5 = new Set(Array.from({ length: 5 }, () => Math.floor(Math.random() * 90) + 1));
            while (randomNumber5.size < 5) {
                randomNumber5.add(Math.floor(Math.random() * 90) + 1);
            }
            let winningNumbers5 = Array.from(randomNumber5);
            alert(winningNumbers5);
            break;
        case 6:
            let randomNumber6 = new Set(Array.from({ length: 6 }, () => Math.floor(Math.random() * 45) + 1));
            while (randomNumber6.size < 6) {
                randomNumber6.add(Math.floor(Math.random() * 45) + 1);
            }
            let winningNumbers6 = Array.from(randomNumber6);
            alert(winningNumbers6);
            break;
        case 7:
            let randomNumber7 = new Set(Array.from({ length: 7 }, () => Math.floor(Math.random() * 35) + 1));
            while (randomNumber7.size < 7) {
                randomNumber7.add(Math.floor(Math.random() * 35) + 1);
            }
            let winningNumbers7 = Array.from(randomNumber7);
            alert(winningNumbers7);
            break;
        default:
            alert("Nem megfelelő számok 5, 6, vagy 7. lehet csak.");
            return;
    }
}
