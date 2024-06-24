"use strict";
//console.log("Hello, TS Class...");
// TS-es OOP próbál hasonlítani a C#-ra. 
// Class (osztály): összetett adattípus, ami egy lenyomat (blueprint). Egy elvont tipus, 
// ami összegyűjti egy adott dolog jellemzőit és viselkedésmódjait.
// Az adatok között legyen valamilyen összetartó tényező (kohézió)
// Jellemzők: mezők (field)
// Viselkedés mód: metódus (fv, eljárás)
// FONTOS jellemzők (CC):
// Osztályokneve: főnév (Helyes User, hibás: Users, hibás UserLogin)
// Osztály neve: nagybetűvel kezdődik (camelCase)
// Saját típus létrehozását teszti lehetővé - <T> type Array<number> Array<User>
// Kódújrahasznosításnak legfontosabb eszköze.
// 1 fájl 1 class
// Az osztály felépítésének sorrendje konvenció szerint kötött:
// (mezők, konstruktor, getter/setter/saját metódus)
// TypeScript láthatóságok beállítása modifier (módosítók) segítségével történik.
// public: minden osztály, interface, modul alapértelmezett láthatósága
// - mindenki látja és módosíthatja az adott tulajdonságot(mező), vagy függvényt/eljárást
// private: csak az adott osztályon belül érhetjük, ahol létrehoztuk.
// protected: az adott oszályon belül, ahol létrehoztuk és a származtatott osztályon belül
// érhető el.
class User {
    //2. rész: Konstruktor: inicializálja az oszályból példányosított objektum adatait (kezdőértéket kap az objektum)
    // Komplex logikát ne tartalmazzon (elágazás, ciklus), mert hiba esetén nem jön létre az objektumpéldány
    // Konstruktor deklaráció
    constructor(name, salary, email) {
        this.name = name; //this - az objektumpéldányra utal
        this.salary = salary;
        this.email = email;
    }
    // Konstruktor túlterhelés nincs a TS-ben :(
    // Más szintakszissal, de azonos beállításokkal és paraméterekkel C# és Java-ban is lefutna
    // Konstruktor túlterhelés a polimofizmus(többalakúság) alapja nincsen JS-ben és TS-ben
    // constructor(name:string, salary:number){
    //     this.name = name;
    //     this.salary = salary;
    // }
    //Megoldás (félmegoldás -trükk): opcionális paraméter ?
    //3. rész getters/setters (getter lekérdez, setter beállít)
    // OOP szabályai alapján gettereket engedélyezzük, a settereket meg kell fontolni, hogy engedélyezzük -e
    // java-s szintakszis
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    // // C#-os szintakszis
    // 
    //private _name:string;
    // public get name():string {
    //     return this._name;
    // }
    //4. rész: saját metódusok
    sayHi() {
        console.log(`Hello, a nevem: ${this.name}`);
    }
    printDetailsToConsole() {
        console.log(`User: ${this.name} , ${this.email}, ${this.salary}`);
    }
} // User Class lezárója
// Példányosítás: osztályból objektum létrehozása
// Konstruktor hívás (Constructor call)
let userObj1 = new User("John Doe", 500000, "johndoe@gmail.com");
//let userObj1 = new User("John Doe", "johndoe@gmail.com"); //hibát dob hiányzó adat miatt
//let userObj1 = new User(500000,"John Doe", "johndoe@gmail.com"); //rossz sorrend (hibás tipust kapott)
userObj1.sayHi();
userObj1.printDetailsToConsole();
//polimorfizmus - trükkek - opcionális paramétrerrel
let userObj4 = new User("Teszt Elek", 950000); //engedi, mert opcionális az email
console.log(userObj4.getEmail()); //Mivel tér vissza? undefined
userObj4.setEmail("tesztelek@gmail.com");
console.log(userObj4.getEmail());
console.log(userObj4.printDetailsToConsole());
//C#, java konstruktor túlterhelés (PHP-ban sem és JS (TS)-ben sem működik):
// user(String name, int salary,String email){
//     this.name = name;
//     this.salary = salary;
//     this.email = email;
// }
// user(String name, int salary){
//     this.name = name;
//     this.salary = salary;
// }
let userObj2 = new User("Jane Doe", 700000, "janedoe@gmail.com");
//Feladat01: Melyik user keres jobban és mennyivel?
if (userObj1.getSalary() > userObj2.getSalary()) {
    console.log(`Jobban keres: ${userObj1.getName()}, ennyivel: ${userObj1.getSalary() - userObj2.getSalary()} Ft`);
}
else if (userObj2.getSalary() > userObj1.getSalary()) {
    console.log(`Jobban keres: ${userObj2.getName()}, ennyivel: ${userObj2.getSalary() - userObj1.getSalary()} Ft`);
}
else {
    console.log(`Azonos a két fizetés ${userObj1.getSalary()} Ft`);
}
let userObj3 = new User("Jonnie Doe", 800000, "jonniedoe@gmail.com");
//let userArray = Array<User>();
let userArray = [];
userArray.push(userObj1);
userArray.push(userObj2);
userArray.push(userObj3);
//userArray.push("teszt"); //szintaktikai hiba
console.log(userArray);
//Feladat02: Írjuk ki azokat a user-eket, akik 600.000 felett keresnek: 
console.log("600.000 feletti keresettel: ");
userArray.forEach(element => {
    if (element.getSalary() > 600000) {
        console.log(`${element.getName()} , ${element.getSalary()} Ft`);
    }
});
// if (userObj1 instanceof User){
//     //példánya -e a User, abból jött e létre
// }
// Class.each = function (fn) {
//     var i = 0, 
//         l = this.instances.length;
//     for (; i < l; i++) {
//         if (fn(this.instances[i], i) === false) { break; }
//     }
// };
// Class.each(function (instance, i) {
//     // Minden objektumpéldányon elvégzünk egy vagy több műveletet
// });
