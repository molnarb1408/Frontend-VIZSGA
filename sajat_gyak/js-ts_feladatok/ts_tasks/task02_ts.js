"use strict";
// 2. Feladat: Készítsünk függvényt, amelynek bemenő paramétere egy dátum, visszatérése egy logikai típus. 
// Vizsgálja meg, hogy hétvégére esik –e!
function isWeekend(date) {
    const day = parseInt(prompt("Írjon be egy számot ami reprezentálja a hétnapjait (1-hétfő, 2-kedd, 3-szerda, 4-csütörtök, 5-péntek, 6-szombat, 7-vasárnap"), 10);
    if (day < 1 || day > 7) {
        alert("Nem megfelelő számot adott!");
        return false;
    }
    return day === 6 || day === 7;
}
function displayAlert() {
    const day = isWeekend(new Date());
    if (day) {
        alert("Hétvége");
    }
    else {
        alert("Nem hétvége");
    }
}
