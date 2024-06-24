////////////////////////////////////////////////////////////////////////
/////////////////////////// 1. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputProductPriceTask01() {
    let productPrice = document.getElementById("productPrice").value;
    return productPrice;
}

function getUserInputTaxTask01() {
    let tax = document.getElementById("tax").value;
    return tax;
}

function calculateGrossProductPriceTask01() {
    let productPrice = getUserInputProductPriceTask01();
    let tax = getUserInputTaxTask01();
    let grossPrice = productPrice * (1 + (tax / 100));
    return Math.floor(grossPrice);
}

function checkIfEmptyTask1() {
    let productPrice = getUserInputProductPriceTask01();
    let tax = getUserInputTaxTask01();
    if (productPrice == "" || tax == "") {
        document.getElementById("pTextBox").innerHTML = "";
        alert("A termék ára és az adó százaléka kötelező megadni!");
    }
}

function Task01() {
    let grossPrice = calculateGrossProductPriceTask01();
    document.getElementById("pTextBox").innerHTML = "A termék brutto ára: " + grossPrice + " Ft";
    checkIfEmptyTask1()
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 2. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputNumberCheckTask02() {
    let numberCheck = document.getElementById("numberCheck").value;
    return numberCheck;
}

// Ezt nagyon fájdalmas volt kitalálni, erre lehet jobb megoldás???

function isPrimeNumberCheckTask02(numberCheck) {
    if (numberCheck > 1) {
        if (numberCheck == 2) {
            return isPrimeNumber = `${numberCheck} az prím szám (a egyetlen páros prímszám!)`;
        } else {
            if (numberCheck == 3) {
                return isPrimeNumber = `${numberCheck} az prím szám (az első páratlan prímszám!)`;
            } else {
                let sqrtnum = Math.floor(Math.sqrt(numberCheck));
                let isPrimeNumber = numberCheck != 1;
                for (var i = 2; i < sqrtnum + 1; i++) {
                    if (numberCheck % i == 0) {
                        return isPrimeNumber = `${numberCheck} az NEM prím szám`;
                    } else {
                        return isPrimeNumber = `${numberCheck} az prím szám`;
                    }
                }
            }
        }
    } else {
        return isPrimeNumber = `${numberCheck} az NEM prím szám (1 vagy annál kisebb számok nem lehetnek prímszámok!)`;
    }
}

function checkIfEmptyTask2() {
    let numberCheck = getUserInputNumberCheckTask02();
    if (numberCheck == "") {
        document.getElementById("pTextBox").innerHTML = "";
        alert("Nem adtál meg számot!")
    }
}

function Task02() {
    let numberCheck = getUserInputNumberCheckTask02();
    let isPrimeNumber = isPrimeNumberCheckTask02(numberCheck);
    document.getElementById("pTextBox").innerHTML = "A megadott szám: " + isPrimeNumber;
    checkIfEmptyTask2();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 3. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputPalindromeCheckTask3() {
    let palindromeCheck = document.getElementById("palindromeCheck").value;
    return palindromeCheck;
}

function formStrTask03() {
    let palindromeCheck = getUserInputPalindromeCheckTask3();
    let originalTxt = palindromeCheck;
    let formedTxt = palindromeCheck.replace(/\s+/g, '').toLowerCase();
    let txtContainer = [originalTxt, formedTxt];
    return txtContainer;
}

function isPalindromeCheckTask03() {
    let txtContainer = formStrTask03();
    let originalTxt = txtContainer[0];
    let isPalindrome = txtContainer[1].split("").reverse().join("");
    if (txtContainer[1] == isPalindrome) {
        return isPalindrome = `"${originalTxt}" a(z) palindrom szöveg`;
    } else {
        return isPalindrome = `"${originalTxt}" a(z) NEM palindrom szöveg`;
    }
}

function checkIfEmptyTask3() {
    let palindromeCheck = getUserInputPalindromeCheckTask3();
    if (palindromeCheck == "") {
        document.getElementById("pTextBox").innerHTML = "";
        alert("A szövegbox nem lehet üres!");
    }
}

function Task03() {
    let isPalindrome = isPalindromeCheckTask03();
    document.getElementById("pTextBox").innerHTML = "A megadott szöveg: " + isPalindrome;
    checkIfEmptyTask3();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 4. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputTask04() {
    let randomPasswordLength = parseInt(document.getElementById("randomPasswordLength").value, 10);
    return randomPasswordLength;
}

function randomPasswordLengthValidatingTask04() {
    let randomPasswordLength = getUserInputTask04();
    return randomPasswordLength >= 1 && randomPasswordLength <= 99;
}

function generateRandomPasswordTask04() {
    let randomPasswordLength = getUserInputTask04();
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomPassword = "";
    for (let i = 0, n = charset.length; i < randomPasswordLength; ++i) {
        randomPassword += charset.charAt(Math.floor(Math.random() * n));
    }
    return randomPassword;
}

function displaySolutionTask04() {
    let randomPasswordLength = getUserInputTask04();
    if (randomPasswordLengthValidatingTask04()) {
        let randomPassword = generateRandomPasswordTask04();
        document.getElementById("pTextBox").innerHTML = `A megadott hosszúság alapján: "${randomPasswordLength}", a generált jelszó: "${randomPassword}"`;
    } else {
        document.getElementById("pTextBox").innerHTML = `Nem lehet a mező üres, 0 vagy a tartományon kívüli, adj meg egy számot 1-99-ig!`;
        alert(`Nem lehet a mező üres, 0 vagy a tartományon kívüli, adj meg egy számot 1-99-ig!`);
    }
}

function Task04() {
    displaySolutionTask04();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 5. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputNumbersTask05() {
    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = Number(document.getElementById("secondNumber").value);
    return [firstNumber, secondNumber];
}

function calculateIfNumbersDivisibleTask05() {
    let [firstNumber, secondNumber] = getUserInputNumbersTask05();
    let firstDivisibleBySecond = firstNumber % secondNumber === 0;
    let secondDivisibleByFirst = secondNumber % firstNumber === 0;
    return firstDivisibleBySecond || secondDivisibleByFirst;
}
function checkIfEmptyTask5() {
    let [firstNumber, secondNumber] = getUserInputNumbersTask05();
    if (firstNumber === 0 || secondNumber === 0) {
        alert('A számok nem lehetnek nullák! Kérjük, adjon meg érvényes számokat.');
        document.getElementById("pTextBox").innerHTML = "";
    }
    return [firstNumber, secondNumber];
}

function displaySolutionTask05() {
    let [firstNumber, secondNumber] = getUserInputNumbersTask05();
    let divisible = calculateIfNumbersDivisibleTask05();
    let message;
    if (divisible) {
        message = `A megadott számok: "${firstNumber}" és "${secondNumber}" oszthatók egymással maradék nélkül!`;
    } else {
        message = `A megadott számok: "${firstNumber}" és "${secondNumber}" NEM oszthatók egymással maradék nélkül!`;
    }
    document.getElementById("pTextBox").innerHTML = message;
}

function Task05() {
    displaySolutionTask05();
    checkIfEmptyTask5();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 6. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function generateWinningNumbersTask06() {
    let min = 1;
    let max = 90;
    let count = 5;
    let winningNumbers = [];

    while (winningNumbers.length < count) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!winningNumbers.includes(randomNumber)) {
            winningNumbers.push(randomNumber);
        }
    }
    winningNumbers.sort(function (a, b) {
        return a - b;
    });

    return winningNumbers;
}

function Task06() {
    let winningNumbers = generateWinningNumbersTask06();
    document.getElementById("pTextBox").innerHTML = `A nyerőszámok: ${winningNumbers.join(", ")}`;
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 7. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function generateLottoForYearTask07() {
    let weeksInYear = 52;
    let min = 1;
    let max = 90;
    let count = 6;

    let lottoNumbersForYear = [];

    for (let week = 1; week <= weeksInYear; week++) {
        let winningNumbers = [];
        while (winningNumbers.length < count) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!winningNumbers.includes(randomNumber)) {
                winningNumbers.push(randomNumber);
            }
        }
        winningNumbers.sort((a, b) => a - b);

        lottoNumbersForYear.push(winningNumbers);
    }

    return lottoNumbersForYear;
}

function Task07() {
    let lottoNumbersForYear = generateLottoForYearTask07();
    let resultDisplay = document.getElementById("pTextBox");
    let message = "A lehetséges hatoslottó számai egy évre:<br>\n";
    lottoNumbersForYear.forEach((numbers, week) => {
        message += `Hét ${week + 1 + " "}: ${numbers.join(", ")}<br>\n`;
    });
    resultDisplay.innerHTML = message;
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 8. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputTask08() {
    let inputTextFromBox = document.getElementById("inputText").value;
    return inputTextFromBox;
}

function calculateVowelPercentageTask08() {
    const vowels = "aeiouAEIOU";
    let inputTextFromBox = getUserInputTask08();
    let vowelCount = 0;
    let letterCount = 0;

    for (let char of inputTextFromBox) {
        if (/[a-zA-Z]/.test(char)) {
            letterCount++;
            if (vowels.includes(char)) {
                vowelCount++;
            }
        }
    }

    let percentage = (vowelCount / letterCount) * 100;
    return percentage.toFixed(2);
}

function checkIfEmptyTask8() {
    let userInput = getUserInputTask08();
    if (userInput === "") {
        document.getElementById("pTextBox").innerHTML = ``;
        alert("Kérjük, adjon meg érvényes adatokat!");
    }
}

function Task08() {
    let percentage = calculateVowelPercentageTask08();
    document.getElementById("pTextBox").innerHTML = `A szöveg ${percentage}% magánhangzót tartalmaz.`;
    checkIfEmptyTask8();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 9. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputTask09() {
    let legA = document.getElementById("legA").value;
    let legB = document.getElementById("legB").value;
    return { legA: legA, legB: legB };
}

function pythagoreanTheoremTask09() {
    let triangleHypotenuse = getUserInputTask09();
    let result = Math.hypot(triangleHypotenuse.legA, triangleHypotenuse.legB)
    return result;
}

function checkIfEmptyTask9() {
    let userInput = getUserInputTask09();
    if (userInput.legA === "" || userInput.legB === "") {
        document.getElementById("pTextBox").innerHTML = ``;
        alert("Kérjük, adjon meg érvényes adatokat!");
    }
}

function Task09() {
    let result = pythagoreanTheoremTask09();
    document.getElementById("pTextBox").innerHTML = `(c): Átfogó értéke: ${result}`;
    checkIfEmptyTask9();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 10. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputTask10() {
    let consumption = Number(document.getElementById("consumption").value);
    let fuelPrice = Number(document.getElementById("fuelPrice").value);
    let distance = Number(document.getElementById("distance").value);
    return { consumption: consumption, fuelPrice: fuelPrice, distance: distance };
}

function calculateFuelConsumptionTask10() {
    let userInput = getUserInputTask10();
    let result = userInput.consumption * userInput.fuelPrice * (userInput.distance / 100);
    return result;
}

function checkIfEmptyTask10() {
    let userInput = getUserInputTask10();
    if (userInput.consumption === 0 || userInput.fuelPrice === 0 || userInput.distance === 0) {
        document.getElementById("pTextBox").innerHTML = ``;
        alert("Kérjük, adjon meg érvényes adatokat!");
    }
}

function Task10() {
    let result = calculateFuelConsumptionTask10();
    document.getElementById("pTextBox").innerHTML = `Az utiköltség: ${result} Ft`;
    checkIfEmptyTask10()
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 11. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputTask11() {
    let exchangeRate = Number(document.getElementById("exchangeRate").value);
    let amount = Number(document.getElementById("amount").value);
    return { exchangeRate: exchangeRate, amount: amount };
}

function calculateExchangeRateTask11() {
    let eurToFt = getUserInputTask11();
    let result = eurToFt.exchangeRate * eurToFt.amount;
    return result;
}

function checkIfEmptyTask11() {
    let userInput = getUserInputTask11();
    if (userInput.exchangeRate === 0 || userInput.amount === 0) {
        document.getElementById("pTextBox").innerHTML = ``;
        alert("Kérjük, adjon meg érvényes adatokat!");
    }
}

function Task11() {
    let result = calculateExchangeRateTask11();
    document.getElementById("pTextBox").innerHTML = `${result} Ft az átváltott euró`;
    checkIfEmptyTask11();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 12. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputTask12() {
    let sideLength = Number(document.getElementById("sideLength").value);
    return sideLength;
}

function calculateSquareVolumeTask12() {
    let sideLength = getUserInputTask12();
    let resultVolume = sideLength * sideLength * sideLength;
    return resultVolume.toFixed(2);
}

function calculateSquareAreaTask12() {
    let sideLength = getUserInputTask12();
    let resultArea = 6 * (sideLength * sideLength);
    return resultArea.toFixed(2);
}

function checkIfEmptyTask12() {
    let sideLength = getUserInputTask12();
    if (sideLength === 0) {
        document.getElementById("pTextBox").innerHTML = ``;
        alert("A kocka sugarát meg kell adni!")
    }
}

function Task12() {
    let resultVolume = calculateSquareVolumeTask12();
    let resultArea = calculateSquareAreaTask12();
    document.getElementById("pTextBox").innerHTML = `A kocka térfogata: ${resultVolume} cm³, A kocka felszíne: ${resultArea} cm²`;
    checkIfEmptyTask12();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 13. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputTask13() {
    let radius = Number(document.getElementById("coneRadius").value);
    let height = Number(document.getElementById("coneHeight").value);
    return { radius: radius, height: height };
}

function calculateConeVolumeTask13() {
    let cone = getUserInputTask13();
    let resultVolume = (Math.PI * Math.pow(cone.radius, 2) * cone.height) / 3;
    return resultVolume.toFixed(2);
}

function calculateConeAreaTask13() {
    let cone = getUserInputTask13();
    let resultArea = (Math.PI * cone.radius * Math.sqrt(Math.pow(cone.radius, 2) + Math.pow(cone.height, 2)) + (Math.PI * (Math.pow(cone.radius, 2))));
    return resultArea.toFixed(2);
}

function checkIfEmptyTask13() {
    let userInput = getUserInputTask13();
    if (userInput.radius === 0 || userInput.height === 0) {
        document.getElementById("pTextBox").innerHTML = ``;
        alert("Kérjük, adjon meg érvényes adatokat!");
    }
}

function Task13() {
    let resultVolume = calculateConeVolumeTask13();
    let resultArea = calculateConeAreaTask13();
    document.getElementById("pTextBox").innerHTML = `Térfogat (V): ${resultVolume} cm³, Felszín (A): ${resultArea} cm²`;
    checkIfEmptyTask13();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 14. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputTask14() {
    let lowerBound = Number(document.getElementById("lowerBound").value);
    let upperBound = Number(document.getElementById("upperBound").value);
    return { lowerBound: lowerBound, upperBound: upperBound };
}

function generateRandomNumber5to20Task04() {
    let randomNumber = Math.floor(Math.random() * 16) + 5;
    return randomNumber;
}

function fillArrayTask14() { // ez a "tombFeltolt", csak nem igy neveztem el mert angolul igyekszem csinálni
    let array = [];
    let userInput = getUserInputTask14();
    let randomNumber = generateRandomNumber5to20Task04();
    for (let i = 0; i < randomNumber; i++) {
        array.push(Math.floor(Math.random() * (userInput.upperBound - userInput.lowerBound + 1)) + userInput.lowerBound);
    }
    return array;
}

function checkIfEmptyTask14() {
    let userInput = getUserInputTask14();
    if (userInput.lowerBound === 0 || userInput.upperBound === 0) {
        document.getElementById("pTextBox").innerHTML = ``;
        alert("Kérjük, adjon meg érvényes adatokat!");
    }
}

function Task14() {
    array = fillArrayTask14();
    document.getElementById("pTextBox").innerHTML = `Tömb feltöltve : ${array}`;
    checkIfEmptyTask14();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 15. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputsTask15() {
    let weight = Number(document.getElementById('personWeight').value);
    let height = Number(document.getElementById('personHeight').value);
    let index = {
        weight: weight,
        height: height
    }

    return index;
}

function isUserInputNotEmptyTask15() {
    let index = getUserInputsTask15();
    if (index.weight !== 0) {
        if (index.height !== 0) {
            return true;
        } else {
            alert('Hiányzó adatok!');
            return false;
        }
    } else {
        alert('Hiányzó adatok!');
        return false;
    }
}

function calculateBMITask15() {
    let index = getUserInputsTask15();
    let bmi = (index.weight / (index.height * index.height)) * 10000;

    return Number(bmi.toFixed(2));
}

function checkBMIResultTask15() {
    let bmi = calculateBMITask15();
    let resultTxt = "";
    if (bmi < 16) {
        resultTxt = "Súlyos soványság";
    } else if (bmi < 16.99) {
        resultTxt = "Mérsékelt soványság";
    } else if (bmi < 18.49) {
        resultTxt = "Enyhe soványság";
    } else if (bmi < 24.99) {
        resultTxt = "Normál testsúly";
    } else if (bmi < 29.99) {
        resultTxt = "Túlsúlyos";
    } else if (bmi < 34.99) {
        resultTxt = "I. fokú elhízás";
    } else if (bmi < 39.99) {
        resultTxt = "II. fokú elhízás";
    } else {
        resultTxt = "III. fokú (súlyos) elhízás";
    }

    return resultTxt;
}

function Task15() {
    let bmi = calculateBMITask15();
    let resultTxt = checkBMIResultTask15();
    if (isUserInputNotEmptyTask15()) {
        document.getElementById('pTextBox').innerHTML = bmi + " " + resultTxt;
    } else {
        document.getElementById('pTextBox').innerHTML = "";
    }
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 16. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputsTask16() {
    let sleepHours = document.getElementById('sleepHours').value;

    return sleepHours;
}

function checkIfEmptyTask16() {
    let sleepHours = getUserInputsTask16();
    if (sleepHours === "" || sleepHours < 0) {
        document.getElementById("pTextBox").innerHTML = ``;
        alert("Kérjük, adjon meg érvényes adatokat!");
    }
}

function checkSleepHoursTask16() {
    let sleepHours = getUserInputsTask16();
    let resultTxt = "";
    if (sleepHours <= 6) {
        resultTxt = "Kevés alvás";
    } else if (sleepHours <= 9) {
        resultTxt = "Átlagos alvás";
    } else if (sleepHours <= 12) {
        resultTxt = "Sok alvás";
    } else if (sleepHours <= 24) {
        resultTxt = "Nagyon sok alvás";
    } else if (sleepHours > 24) {
        resultTxt = "Lehetetlenül sok alvás";
    }
    return resultTxt;
}


function Task16() {
    resultTxt = checkSleepHoursTask16();
    document.getElementById("pTextBox").innerHTML = `${resultTxt}`;
    checkIfEmptyTask16();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 17. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputTask17() {
    let numberA = Number(document.getElementById("numberA").value);
    let numberB = Number(document.getElementById("numberB").value);
    let numberC = Number(document.getElementById("numberC").value);
    return { numberA: numberA, numberB: numberB, numberC: numberC };
}

function checkIfEmptyTask17() {
    let userInput = getUserInputTask17();
    if (userInput.numberA !== 0) {
        if (userInput.numberB !== 0) {
            if (userInput.numberC !== 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function calculateDiscriminantTask17() {
    let userInput = getUserInputTask17();
    let a = userInput.numberA;
    let b = userInput.numberB;
    let c = userInput.numberC;
    let discriminant = (b * b) - (4 * a * c);

    return { discriminant: discriminant, a: a, b: b, c: c };
}

function calculateQuadraticEquationX1X2Task17() {
    let values = calculateDiscriminantTask17();
    if (values.discriminant > 0) {
        let x1 = (-values.b + Math.sqrt(values.discriminant)) / (2 * values.a);
        let x2 = (-values.b - Math.sqrt(values.discriminant)) / (2 * values.a);

        document.getElementById("pTextBox").innerHTML = `x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;

    } else {
        document.getElementById("pTextBox").innerHTML = ``;
        alert("A gyök alatti érték nem nagyobb mint 0 így nem érvényesül a megoldó képlet, adj meg másik számokat!")
    }
}

function Task17() {
    if (checkIfEmptyTask17()) {
        calculateQuadraticEquationX1X2Task17();
    } else {
        document.getElementById("pTextBox").innerHTML = ``;
        alert("Kérjük, adjon meg érvényes adatokat!");
    }
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 18. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function coinFlipTask18() {
    let array = [];
    let count = 3;

    while (array.length < count) {
        let randomNumber = Math.floor(Math.random() * 2);
        if (randomNumber === 0) {
            randomNumber = "Fej";
            array.push(randomNumber);
        } else if (randomNumber === 1) {
            randomNumber = "Írás";
            array.push(randomNumber);
        }
    }
    return array;
}

function Task18() {
    let array = coinFlipTask18();
    document.getElementById("pTextBox").innerHTML = `A feldőbás ereménye: ${array.join(", ")}`;
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 19. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputTask19() {
    let dailyRevenue = Number(document.getElementById("dailyRevenue").value);
    return dailyRevenue;
}

function checkIfInputCorrectTask19() {
    let dailyRevenue = getUserInputTask19();
    if (dailyRevenue > 0) {
        return true;
    } else {
        return false;
    }
}

function calculateDailyRevenuePercentCutTask19() {
    let dailyRevenue = getUserInputTask19();
    let dailyRevenuePercentCut = dailyRevenue * 0.05;

    return dailyRevenuePercentCut.toFixed(0);
}


function Task19() {
    if (checkIfInputCorrectTask19()) {
        dailyRevenuePercentCut = calculateDailyRevenuePercentCutTask19();
        document.getElementById("pTextBox").innerHTML = `A jutalom: ${dailyRevenuePercentCut} Ft`;
    } else {
        document.getElementById("pTextBox").innerHTML = ``;
        alert("Kérjük, adjon meg érvényes adatokat!");

    }
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 20. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function getUserInputTask20() {
    let birthPlace = document.getElementById("birthPlace").value;
    return birthPlace;
}

function checkIfInputEmptyTask20() {
    let birthPlace = getUserInputTask20();
    if (birthPlace !== "") {
        return true;
    } else {
        return false;
    }
}

function checkIfCapitalCityTask20() {
    let birthPlace = getUserInputTask20();
    if (birthPlace.toLowerCase() === "budapest") {
        return true;
    } else {
        return false;
    }
}

function Task20() {
    if (checkIfInputEmptyTask20()) {
        if (checkIfCapitalCityTask20()) {
            document.getElementById("pTextBox").innerHTML = `Ön fővárosi!!`;
        } else {
            document.getElementById("pTextBox").innerHTML = `Sajnos ön "vidéki" azaz csak egy "Pangea-i" mert hát van Budapest meg Pangea!`;
        }
    } else {
        document.getElementById("pTextBox").innerHTML = ``;
        alert("Kérjük, adjon meg érvényes adatokat!");
    }
}