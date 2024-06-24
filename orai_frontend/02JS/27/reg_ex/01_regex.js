
/*
Reguláris kifejezések használatának 2 módja van:
1. RegExp objektumok beépített metódusai
2. String objektumok metódusai képesek kezelni a 
    reguláris kifejezéseket.
*/

/***** RegExp módosítok*****/
/*
    i --> caseSensitive egyezés (kisbetű-nagybetű különböző)
    g --> global: nem csak az első egyezést keresi
    m --> többsoros egyezést keres
*/

/****Speciális karakterek, minták (pattern) */
/* 
    \ --> ez jelzi, hogy speciális karakter következik
    ^ --> a bemenet elején lévő egyezés: /^A/ Alma bemenetre TRUE, BARACK-ra FALSE
    $ --> a bemenet végé lévő egyezés: /e$/ körte bemenetre TRUE, szilva-ra FALSE
    . --> egy bármilyen karakter: /b.ka/ kifejezésnek megfelel a béka és bika szó is
    * --> 0 vagy több alkalommal fordul elő:
         A bo.*ka kifejezésnek már megfelel a boka és boróka is, ugyanaz mint a {0,}
    + --> egy vagy több alkalommal fordul elő:
         /bo.+ka/ kifejezésnek megfelel a boróka, a boka viszont nem.
    ? --> 0 vagy egy alkalommal fordul elő
        /vasal.?/ kifejezés igaz a vasal és a vasaló szavakra is.
    [karakterek] --> /b[éa]ka/ megfelel a béka és baka szónak is, a bikának nem.
        megadható tartomány is: [0-9] bármely számjegy, [a-zA-Z] bármely kis vagy nagybetű
    [^karakterek] --> a felsorolt karakterek egyike sem lehet benne
        /^b[éa]ka/ nem felel meg a béka és baka, de megfelel a bika
    (x) --> kifejezések csoportosítása
    x(?=y) -->
    x(?!y) --> /\d+(?!\.)/ csak olyan számra igaz, amit nem követ decimális pont
        141 - TRUE, 3.14 FALSE
    x|y --> vagy művelet /green|red/ - "green apple" , "red apple" ->TRUE
    {n} --> pontosan n-szer tartalmazza a megadott kifejezést
        /a{2}/ "candy" FALSE, "caandy" TRUE
    {n,} --> legalább n-szer tartalmazza a megadott kifejezést
        /a{2,}/ illeszkedik az "aa" -ra és a az "aaa" stringekre, de nem a "a" stringre
    {n,m} --> {2,5} legalább 2 legfeljebb 5 előfordulás, {0,10} legfeljebb 10 előfordulás

    \d --> digitális számmal való egyezés, ua. mint a [0-9]
    \D --> nem digitális számmal való egyezés, ua. mint a [^0-9]
    \n --> új sor
    \s --> egyszerű whitespace-el való egyezés: tab, space, új sor
    \S --> egyezés minden karakterrel ami nem whitespace
    \t --> tabulator
    \w --> alfanumerikus karakterekkel való egyezés, beleértve az aláhúzást is
        ua. mint a [A-Za-z0-9_]
    */

//1. Keresés
var str1 = "Teszt szöveg";
var kereses1 = str1.search(/Szöveg/);
console.log(kereses1); //-1 nincs benne
var kereses2 = str1.search(/Szöveg/i);
console.log(kereses2); //6 //6. indextől, caseSensitive

//2. Csere
var str2 = "Lorem Ipsum Dolor set amet!";
var eredmeny2 = str2.replace(/Set/i, "sit");
console.log(eredmeny2);

//3. Egyezés - Match
var str3 = "Lorem Ipsum Dolor set amet!";
var eredmeny3 = str3.match(/Dolor/); 
console.log(eredmeny3);//Object
console.log(eredmeny3.index); //12
console.log(eredmeny3.input); //Lorem Ipsum Dolor set amet!

//4. Teszt - test() - T/F
//Tartalmaz -e az "a" betűt?
var pattern = /a/;
console.log(pattern.test("alma")); //true
console.log(pattern.test("körte")); //false

//pontosan 4 darab a-h közötti karakter
var pattern2 = /[a-h]{4}/; 
console.log(pattern2.test("alma")); //false
console.log(pattern2.test("abba")); //true

//5. Exec() - megkeresi a mintára illeszkedő szöveget
//ha illeszkedik rá, akkor a object-el tér vissza (első egyezés)

console.log(/eper/.exec("Termesztett eper...földi eper")); //object
console.log(/eper/.exec("Termesztett eper...földi eper").input); //Termesztett eper...
console.log(/eper/.exec("Termesztett eper...földi eper").index); //12

var szoveg = "A lot about JavaScript at https://javascript.info";
var regex = /JAVA(SCRIPT)/ig;
var matchOne = regex.exec(szoveg);
console.log(matchOne);
console.log( matchOne[0] ); // JavaScript
console.log( matchOne[1] ); // Script
console.log( matchOne.index ); // 12 az egyezés indexe
console.log( matchOne.input ); // a szoveg tartalma
console.log( regex.lastIndex ); //22

//2. egyezés
// Look for the second match
let matchTwo = regex.exec(szoveg); // regex.lastIndex (22) -től folytatja a keresést
console.log(matchTwo);
console.log( matchTwo[0] ); // javascript
console.log( matchTwo[1] ); // script
console.log( matchTwo.index ); // 34 az egyezés indexe
console.log( matchTwo.input ); //  a szoveg tartalma

//6. y flag - csak a megadott helyen keresse az egyezést
let str = "Kedvencem a JavaScript!";
let regex6 = /javascript/iy;
console.log( regex6.lastIndex ); // 0 (alapértelmezett)
console.log( str.match(regex6) ); // null, nem található a 0-as indexen
regex6.lastIndex = 12;
console.log( str.match(regex6) ); //object-el tér vissza