//string literál
console.log("Teszt szöveg");

//string változó (JS ben nincs char tipus)
var testTxt="Teszt szöveg";

let firstTxt = 'single-quoted';
let secondTxt = "double-quoted";

let backticks = `backticks`; //altg+7
//kifejezést is írhatunk bele, $ azt jelenti, hogy következik egy kifejezés
// $ nem jQuery, nem PHP
function sum(a, b) {
    return a + b;
}
console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
    * John
    * Pete
    * Mary
    `;
    console.log(guestList);

//speciális karakterek
// \b backspace
// \n new line
// \t tabulator (általában 3 vagy 4 szóköz)

// A \-jel eszképelésre is használható: a simpla '-nál ne az alapértelmezett működést csinálja
console.log("I\'m programmer!");

//string hosszának lekérdezése
console.log( "tesztszoveg".length ); // 11

//karakterekhez való hozzáférés 
let str = "Hello";

// az első karakter
console.log( str[0] ); // H
console.log( str.charAt(0) ); // H
// az utolsó karakter
console.log( str[str.length - 1] ); // o

//nem lehet felülírni a karaktereket a stringben!!!
//immutable, read-only, csak olvasható 
let strRewrite = 'teszt';
strRewrite[0] = 'h'; // nem hajtja végre (nem ír hibát)
console.log( strRewrite[0] ); // nem mukodik, maradt t betű az első

//karakter csere új változóval 2-est 3-asra cserélem
//első előfordulás     
var strRewrite2 = 'teszt2_2';
console.log(strRewrite2.replace("2","3")); //teszt3 (csak a kiírásra cseréli ki)
strRewrite2= strRewrite2.replace("2","3"); //teszt3_2 -ra felülírja 
//nincsen replaceAll()

console.log(strRewrite2);
//vagy felveszek egy új változót

//kisbetű/nagybetűs alakít
let txtTest="szövEG";
console.log(txtTest.toUpperCase()); //SZÖVEG
console.log(txtTest.toLowerCase()); //szöveg

//részstring-képzés: substring(kezdet,hossz)
console.log(txtTest.substring(0,2)); //sz

//keresés szövegben -> str.indexOf
let str2 = 'Widget with id';

// 0, mert 'Widget' az elején található
console.log( str2.indexOf('Widget') ); 
// -1, nincs benne, kisbetű-nagybetű számít (case-sensitive)
console.log( str2.indexOf('widget') ); 

// 1, "id" az 1-es pozicion található (..idget with id)
console.log( str2.indexOf("id") ); 

let str3 = 'Widget with id';
//2. előfordulása
console.log( str3.indexOf('id', 2) ) // 12

//Ha minden előfordulás érdekel minket, 
//ciklusban is futtathatjuk az indexOf fv-t.
// Minden új híváskor az elozo egyezés után kerül meghívásra:
let str5 = 'As sly as a fox, as strong as an ox';

let target2 = 'as'; // keressük meg ezt az értéket

let pos = 0;
while (true) {
    let foundPos = str5.indexOf(target2, pos);
if (foundPos == -1) break;
    console.log( `Megtaláltuk ezen az indexen  ${foundPos}` );
    pos = foundPos + 1; // a keresést folytatja a következő pozición
}
//Az első helyen nem találja, mert nagybetű!!! Case-sensitive!

//ua. rövidebben
let str6 = "As sly as a fox, as strong as an ox";
let target3 = "as";

let pos2 = -1;
while ((pos2 = str6.indexOf(target3, pos2 + 1)) != -1) {
    console.log( pos2 );
}

//includes tartalmazza -e
console.log( "Widget with id".includes("Widget") ); // true
console.log( "Hello".includes("Bye") ); // false

console.log( "Midget".includes("id") ); // true
// false, a harmadik poziciótól nincsen "id"
console.log( "Midget".includes("id", 3) ); 

//starts, ends with
// true, "Widget" igy kezdodik "Wid"
console.log( "Widget".startsWith("Wid") ); 
// true, "Widget" igy vegzodik "get"
console.log( "Widget".endsWith("get") );   

//levágás
let str7 = "stringify";
// 'strin', részstring 0-tól 5-ig (nem tartalmazza a 5)
console.log( str7.slice(0, 5) ); 
// 's', 0-tól 1-ig, nem tartalmazza az 1-et, igy csak az 0. karakter
console.log( str7.slice(0, 1) ); 

//ha nincs megadva 2. paraméter, akkor a végéig megy
let str8 = "stringify";
console.log( str8.slice(2) ); // ringify, a második poziciótól a végéig    

//jobbrol kezdve
let str9 = "stringify";
// jobbról a 4. pozicioval kezdodik, jobbrol az elsőig
console.log( str9.slice(-4, -1) ); // gif

//stringek osszehasonlitasa
console.log( 'a' > 'Z' ); // true
console.log( 'Österreich' > 'Zealand' ); // true

/*
    Minden string UTF-16 kódolásban van. 
    Minden karakternek megvan a megfelelő kódja. 
    Vannak speciális metódusok amelyekkel, ide-oda alakíthatók.
*/

// kisbetű-nagybetűnek különböző a kódja
console.log( "z".codePointAt(0) ); // 122
console.log( "Z".codePointAt(0) ); // 90

// 90 és 5a hexadecimálisan
console.log( '\u005a' ); // Z

//Összehasonlítás helyesen
console.log( 'alma'.localeCompare('körte') ); // -1, nem azonos (nagyobb) 
console.log( 'körte'.localeCompare('alma') ); // 1, nem azonos (kisebb)
console.log( 'teszt'.localeCompare('teszt') ); //0, azonos

// var txt = 'alma';
// var txt2 = 'körte';

// if (txt.localeCompare(txt2) < 0) {

// } else if (txt.localeCompare(txt2) > 0){

// } else {
//     //== azonos a két szöveg
// }
