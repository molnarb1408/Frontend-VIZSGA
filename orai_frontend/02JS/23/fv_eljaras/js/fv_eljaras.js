// Metódus vs függvény vs eljárás vs tagmetódus
// OOP metódus: osztályon belüli kódrészlet, ami megvalósít egy viselkedést
// Függvény: nem kapcsolódik osztályhoz, önmagában álló műveletvégzésre szolgáló kódrészlet

// Prog. nyelvektől függ, hogy hogyan hivatkozunk egy kódblokkra
// Eljárás - PASCAL: BEGIN - END 
// Függvény - van visszatérési értéke (van return)
// Eljárás - nem tér vissza értékkel (JS nincs return - void (TS-ben van void))
// Az OOP-s nyelveknél metódusnak/tagmetódusnak hívják.

// Metódus fogalma: egy olyan elkülönített kódrészlet, amely segítségével 
// kiküszöbölhető a kódismétlés: egyszer létrehozom (deklaráció) 
// és többször meg tudom hívni (call).
// Egy névvel tudok hivatkozni rá, lehet visszatérése és lehetnek 
// bemenő paraméterei. 

// CC elnevezés szabályok - metódus, függvény, eljárás:
// 1. kisbetűvel kezdjük (kivétel: TypeScript - C#-s szintakszishoz igazítva - naggyal)
// 2. camelCase - összeszetett szónál nagybetű az első betű - getAllProducts()
// 3. fejezze ki azt, amit csinál (ugyanaz mint a változónál, az kifejezi, amit tárol)
// 4. mindig műveletet végez, ezért mindig ige: pld. productList(), productFilter()
// 5. Lehetőség szerint minél kevesebb bemenő paramétert tartalmazzon
//    Ha 4 vagy 5 vagy mégtöbb paramétere van, akkor obj-ben letároljuk a paramétereket
// 6. Egy függvény/ejárás/metódus 1 dolgot csinál (későbbi tesztelhetőség miatt is fontos)
// 7. Max. 20-30 sor legyen, de minél rövidebb, lehetőség szerint pár sor (JS programozók legkevésbé ezt tartják be)

// eljárás hívás - call - tetszőleges számszor meghívható, akár 100X
// pageOnLoad - oldalbetöltödés
salutePrint();

// eljárás létrehozása - deklaráció
// eljárás: nincs visszatérési értéke, nincs return
// 1X szerepeljen ilyen néven
function salutePrint(){
    alert("Üdvözöllek az oldalon...");
}

//azonos néven hozok létre eljárást, hibát nem ír (java, C#-ban hiba, TS-ben is hibás)
//sorrend számít, felülírja az előző, azonos nevű deklarációt
function salutePrint(){
    alert("Üdvözöllek az oldalon!!!");
}

//pageOnLoad - ugyanúgy az oldalbetöltéskor meghívja
salutePrint();

// fv/eljárás részei: törzse, neve és lehetnek paramtérei
// function name(param1, param2, param3){
//     fv/eljárás törzse
// }

//bad practice - rossz megoldás (talán nem akkora hiba)
// function salutePrint(){
//     let name = prompt("Kérem adja meg a nevét: ");
//     alert("Üdvözöllek "+name +" az oldalon!!!");
// }

//best practice - a bekérést rakjuk egy külön fv.be
//Feladat: Készítsünk fv-t, ami bekéri a felhasználó teljes nevét és visszatér vele!
// function getNamePrompt(){
//     let name = prompt("Kérem adja meg a nevét: ");
//     return name;
// }

function getNamePrompt(){
    return prompt("Kérem adja meg a nevét: ");
}

// function, method chain - láncolat fv. hív meg másik fv-t (2 elemű láncolat)
function salutePrint(){
    let name = getNamePrompt();
    alert("Üdvözöllek "+name +" oldalon :)");
}

function salutePrint(name){
    alert("Üdvözöllek "+name +" oldalon, szuper, hogy itt vagy :)");
}

salutePrint("Gipsz Jakab"); //pageOnLoad
salutePrint(getNamePrompt());

// Override - felülírás: a paraméterek számától függetlenül felüldefiniálja a korábban létrehozott
// azonos nevű fv-t vagy eljárást (JS csinálja így, java-ban és c# működik a túlterhelés)
// JS egy fv-t vagy eljárást 1 néven hozzunk létre, mert nincs túlterhelés!!!
//Metódus, fv. eljárás szignatúra: erősen típusos nyelvekben: név+bemenő paraméterek típussal
// JS név alapján (utolsót futtatja)