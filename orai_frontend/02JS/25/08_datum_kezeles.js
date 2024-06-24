/*
- JS-ben a dátumokat Date object-el kezeljük
- Nincs külön date és datetime, az object mindkettőt tartalmazza
- A hónapok 0-tól kerülnek számozásra, január 0-as
- Hibás dátummegadás esetén automatikus javítást végez
- Ha a dátumot számmá konvertáljuk, akkor időbélyeget kapunk
- Date.now() legegyszerűbb módja az aktuális időbélyeg előállításának 
*/

// constructor syntax - konstruktor szintakszis (now néven jön létre a változó)
// példányosítás
let now = new Date();
console.log(now); // aktuális idő kiírása

let date = new Date("2018-04-30");
console.log(date); // Mon Apr 30 2018 ...
console.log("Aktuális év: "+date.getFullYear()); //2018
//getYear-t ne használjuk deprecated (elavult), hibás működés

let today = new Date();
console.log(today.getDay()); //1-7 közötti szám: nap sorszáma
console.log(today.getMonth()); //0-tól hónap Január 0
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getTime()); //mp-ek száma 1970.01.01 éjféltol
//beállításhoz setMonth(), setHours(), setMinutes() stb.
//átalaíktás stringgé- toString()
//parse() 1970.01.01 éjfél ota eltelt idő ezredmásodpercekben -> szám

//hibás dátum esetén megpróbálja helyrehozni
let date2 = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(date2); // ...01 Feb 2013

//Ha a dátumot számmá konvertáljuk, akkor időbélyeget kapunk
let dateInt = new Date();
alert(+dateInt); // időbélyeg másodpercekben, ugyanaz mint a date.getTime()

//Időkülönbség mérése
let start = new Date(); // számláló indít
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}
let end = new Date(); // számláló leállít
alert( `Ennyi idő ${end - start} ms` );

//aktuális időbélyeg
var aktualisIdo = Date.now();
console.log("Aktuális idő: "+aktualisIdo +" ms");

//Átalakítás szövegből - időbélyeggé - Date.parse
let datumParse = Date.parse('2018-05-07');
console.log(datumParse); //időbélyeg

//Átalakítás szövegből - Date object -be 
let dateObject = new Date('2018-10-15'); 
console.log(dateObject.getDay());//hétfő 1

//Hány éves vagy?
let dateOfBirth = new Date('1998-02-08');

function calculateAge(birthday){
    const millis = Date.now() - Date.parse(birthday);
    return new Date(millis).getFullYear() - 1970;
}
console.log("Ennyi éves vagy: "+ calculateAge(dateOfBirth));

//valós dátum object -e?
var isDate= function(input){
    var result = false;
    if (Object.prototype.toString.call(input)==="[object Date]"){
        result = true;
    }
    return result;
};
console.log(isDate('2018-02-33')); //false
let date3 = new Date(2016, 1, 2);
console.log(isDate(date3)); //true
console.log(isDate("1998-01-01")); //false, mert aposztrofók között string
