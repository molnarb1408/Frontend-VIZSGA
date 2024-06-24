// Két fajtája van: implicit vagy explicit.
// Az implicit és explicit módon való kivételkezelés 
// között a fő különbség az, hogy hogyan és mikor történik a kivétel kezelése a kódban.

// 1. Implicit kivételkezelés: Az implicit kivételkezelés azt jelenti,
// hogy a kivételkezelés automatikusan történik a program végrehajtása során.
// TypeScript képes felismerni és jelezni a hibákat pld. a típusok alapján
// Ez általában az adott nyelv vagy környezet beépített mechanizmusának eredménye.
//  Például, ha egy függvény visszatérhet egy számmal vagy egy hibával,
// akkor a TypeScript figyelmeztetni fog, ha nem kezeljük le a hiba esetét. 
// A TS fordító ellenőrzi a tipusokat, referenciákat, változó hivatkozásokat, tehát
// ha hibás a kódban egy metódushívás paramétere, akkor le sem fordul, ezért erre 
// nehezebb példakódot létrehozni TS-ben.

class CustomError {
    constructor(public message: string){};
}

// Union tipusú visszatérés: több visszatérési tipus (number vagy CustomError)
function divide (a: number, b: number):number | CustomError {
    if (b==0){
        return new CustomError("Nullával nem osztunk!!!");
    }
    return a/b;
}

let divident = 10; //osztandó
let divider = 2; //osztó
const result = divide(divident, divider);
console.log(result); 
// létrejön a CustomError osztályból egy obj, ilyen üzenettel: Nullával nem osztunk!!!
//console.log(result+1);// a result kétféle lehet: vagy szám (itt működne a +1), de lehet lehet szöveg is

if (result instanceof CustomError) {
    console.log(result.message); //Hibaüzenet kiírása
} else {
    console.log(result+1); //számítás elvégzése
}

//const result2 = divide(divident, "öt"); //Tipuseltérési hiba

// 2. módszer:Explicit kivételkezelés: Az explicit kivételkezelés azt jelenti,
// hogy a kódban a programozó adja meg, hogy milyen kivételt dobjon. 
// Ezt használjuk gyakrabban.

function divideExplicit(a:number, b:number):number {
    if (b===0){
        throw new Error("Nullával nem osztunk :("); //kivétel dobása
    }
    return a/b;
}

try {
    //Ide rakjuk azokat a kódokat, amelyek hibát dobhatnak
    const result = divideExplicit(10,0);
    console.log(result);
} catch (error:any) {
    console.log('Hiba történt: '+error.message);
}

function calculateSquareRoot(num: number): number {
    if (num < 0) {
        throw new Error("A negatív számnak nincs valós gyöke");
    }
    return Math.sqrt(num);
}

try {
    const number = -9;
    const result = calculateSquareRoot(number);
    console.log(`A(z) ${number} négyzetgyöke: ${result}`);
} catch (error:any) {
    console.log('Hiba történt: ', error.message);
}
// Itt folytatódik 
// Mi a különbség a try-catch és a sima elágazás között?
// if (number < 0) {
//     console.log("A negatív számnak nincs valós gyöke");
// } else {
//     console.log(`A(z) ${number} négyzetgyöke: ${result}`);
// }
// itt folytatódik

// try-catch-nél teljes egészében leválasztja a üzleti logikáról (business logic)
// a hibakezelést
// if (isNaN(number)){
//     if (number <= 0){
//         let result = number * number;
//     } else if () {
//     }
// }

// A TypeScript és a JavaScript beépített hibakivétel objektumai közé tartoznak az alábbiak:

// Error: Az alapvető hibakivétel osztály, amelyből más specifikusabb hibakivétel
//  osztályok is származhatnak. Általában egyedi hibakivétel osztályokat hoznak létre
//   az Error osztályból, hogy specifikusabb információkat vagy funkcionalitást adjanak hozzá.

// TypeError: Hibakivétel, amelyet típusellenőrzési hibák esetén dobunk.
// Például, ha egy változónak nem megfelelő típusú értéket próbálunk hozzárendelni.

// SyntaxError: Hibakivétel, amelyet szintaktikai hibák esetén dobunk. 
// Például, ha érvénytelenül írtunk le egy függvényhívást vagy változódeklarációt.

// RangeError: Hibakivétel, amelyet értéktartomány túllépése vagy érvénytelen argumentumok 
// esetén dobunk. Például, ha egy függvényhez érvénytelen paramétert adunk át.

// ReferenceError: Hibakivétel, amelyet referencia hibák esetén dobunk. 
// Például, ha egy nem létező változóra vagy objektumra hivatkozunk.

function sayHi(name: string): void {
    if (typeof name !== 'string') {
        //explicit
        throw new TypeError("A bemenő paraméternek szövegnek kell lennie.");
    }
    console.log('Üdvözöllek, ' + name + "!");
}
try {
    sayHi('John Doe');
    // sayHi(55);
} catch (error:any) {
    console.log('Hiba történt: ', error.message);
}

// --------------------------------------------------------------//
let num = 358.429;
console.log("num.toFixed() : " + num.toFixed()); //358
console.log("num.toFixed() : " + num.toFixed(2)); //358.42

// implicit 
try {
    const numberArray = [1, 2, 3];
    console.log(typeof (numberArray[5])); //undefined
    console.log(numberArray[5].toFixed(2));// toFixed() - number tipusra mukodik
    console.log("Ezt már nem írja ki :) ");
} catch (error: any) {
    if (error instanceof ReferenceError) {
        console.log("Hiba történt: Nem létező változó vagy tulajdonság :( ");
    } else if (error instanceof RangeError) {
        console.log("Hiba történt: Tartományon kivüli érték (vagy hossz) :( ");
    } else if (error instanceof TypeError) {
        console.log("Hiba történt: Nem megfelelő tipus vagy hozzáférés :( ");
    } else {
        console.log("Hiba történt: ", error.message);
    }
}

// explicit, implicit
// parseInt vs. Number
try {
    const value = '123n';
    const parseValue = parseInt(value); //123
    const numberValue = Number(value); //NaN
    // parseValue nem megy be ide (érték 123), numberValue-nál sem meg be ide, mert nem jut el idáig (implicit)
    if (isNaN(numberValue)) { 
        throw new TypeError("(throw new): Az átalakítás sikertelen :( "); //explicit kezelés
    }
    console.log("Az érték: "+parseValue);
} catch (error: any) {
    if (error instanceof TypeError) {
        console.log("(catch) Hiba történt: Nem sikerült a konverzió :( ");
    } else if (error instanceof ReferenceError) {
        console.log("(catch) Hiba történt: Nem létező változó vagy tulajdonság :( ");
    } else {
        console.log("(catch) Ismeretlen hiba történt: ", error.message);
    }
}

// Más nyelvekben (pld. java)
// DBConnect() - kötelező try blokkba elhelyezni