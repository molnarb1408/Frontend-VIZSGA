"use strict";
// A TypeScriptben a generikusok lehetővé teszik,
// hogy általános, típussal paraméterezett osztályokat,
// függvényeket vagy interfészeket hozzunk létre.
// Segítségükkel kódot írhatunk, amely általánosan működik többféle 
// típusra, anélkül, hogy szorosan kötnénk a konkrét típusokhoz.
// A Queue osztály egy generikus típust (T) használ. 
// Az osztály egy egyszerű sor adatszerkezetet valósít meg.
// Az enqueue metódus hozzáad egy elemet a sorhoz, 
// a dequeue metódus pedig eltávolítja és visszaadja a sor első elemét.
//  Az isEmpty metódus ellenőrzi, hogy a sor üres-e.
// Létrehozunk két különböző típusú sor objektumot: numberQueue és 
// stringQueue. A numberQueue típusa number, míg a stringQueue típusa szöveg.
// Hozzáadunk elemeket a sorokhoz, majd a dequeue metódus segítségével
// kiürítjük a sorokat és kiírjuk az elemeket a konzolra.
// A generikusokat használva általános adatszerkezeteket hozhatunk létre,
// amelyek különböző típusokat 
// tudnak kezelni. Így nem kell külön-külön implementálni az adatszerkezetet
// minden típusra, hanem egyetlen osztályban általánosan használható 
// megoldást készíthetünk.
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const numberQueue = new Queue();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);
while (!numberQueue.isEmpty()) {
    const number = numberQueue.dequeue();
    console.log(number);
}
const stringQueue = new Queue();
stringQueue.enqueue("Hello");
stringQueue.enqueue("World");
while (!stringQueue.isEmpty()) {
    const string = stringQueue.dequeue();
    console.log(string);
}
function printPair(pair) {
    console.log(`First: ${pair.first}, Second: ${pair.second}`);
}
const numberPair = {
    first: 42,
    second: "John Doe"
};
const stringPair = {
    first: "johndoe",
    second: true
};
printPair(numberPair);
printPair(stringPair);
/**************************************************************/
// A mergeArrays függvény két tömböt összefűz és egyetlen 
// tömbként adja vissza.
// A generikus típusparaméter (T) lehetővé teszi, 
// hogy a függvény bármilyen típusú tömböt össze tudjon fűzni.
// Létrehozunk két tömböt: numbers és strings.
// A numbers tömb két számot tartalmaz, míg a strings tömb két szöveget
// tartalmaz. Mindkét tömböt átadjuk a mergeArrays függvénynek, 
// és az eredményt a konzolra írjuk.
// A generikusok segítségével olyan függvényeket írhatunk,
// amelyek általánosan működnek különböző típusokkal.
// Ez növeli a kód újrafelhasználhatóságát és csökkenti a 
// redundáns kódmennyiséget.
//... szintakszis - Spread syntax tömbök, szöveg kiterjesztésére való
// veszi az elemeket a tömbből (iterable elemeken alkalmazható)
function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}
const numbers = mergeArrays([1, 2, 3], [4, 5, 6]);
console.log(numbers); // [1, 2, 3, 4, 5, 6]
const strings = mergeArrays(["hello", "world"], ["John", "Doe"]);
console.log(strings); //['hello', 'world', 'John', 'Doe']
// Életszerű példa: CRUD-os (CREATE, READ, UPDATE, DELETE) műveletek adattáblákon
// product adattábla: CRUD (backend), Megjelenítés - Táblázatos megjelenítés   
// user adattábla: CRUD (backend), Megjelenítés - Táblázatos megjelenítés
