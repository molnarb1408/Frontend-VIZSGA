// a Lexikai zárvány (closure) lehetővé teszi, hogy hozzáférjünk a fv-en
// kivüli változókhoz azután is, hogy a függvénykörnyezet már lefutott.

// módosító nélkül csak változónév: mindenhol elérhető ->global
// blokkon belüli létrehozásnál var a blokkon belül érhető el
// let -nél többször nem engedi
// const-nál sem(állandó az értéke)
// BEST PRACTICE - használjunk let-et

function printUserData(){
    var userName = "johndoe";
    console.log(userName);
}

printUserData(); //johndoe
//console.log(userName); //Uncaught ReferenceError: userName is not defined

// closure - lexikai zárvány
function printUserData2(){
    var email = 'johndoe@example.com';
    return function printEmail() {
        console.log(email);
    }
}

//console.log(email); Uncaught ReferenceError: email is not defined
var email = printUserData2(); 
email(); //johndoe@example.com - hozzáférek az email változó értékéhez

//a printEmail nevű fv visszaad egy fv-t, ezt letároljuk a email 
//nevű változóba
//Így hozzáférünk a email változó értékéhez, annak ellenére,
//hogy a printUserData2 fv már előtte lefutott
//hasznos linkek:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
//http://weblabor.hu/cikkek/javascript-fuggvenyek
