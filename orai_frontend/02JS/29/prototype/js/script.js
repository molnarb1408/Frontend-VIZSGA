// JS objektumok, osztályok és objektumpéldányok, konstruktor fogalma, this kulcsszó
// osztály -> ECMAScript 2015 óta használható  (ES6)
// syntactical sugar -> valójában prototype-os öröklést valósít meg
// objektumpéldányokon keresztül történik az öröklés
// Konstruktor: speciális metódus - akkor hívjuk meg, amikor létrejön az osztályból 
// az objektumpéldány
// Konstruktor: objektum példány adatainak feltöltésére szolgál

// CC: osztálynév nagybetűvel kezdődik és főnév
//osztály létrehozása Employee néven
class Employee {
    constructor(lastName, firstName, birthDate) {
        this.lastName = lastName; // this - maga az objektumpéldány
        this.firstName = firstName;// az objektumpéldány firstName tulajdonsága, amit paraméterként kap meg
        this.birthDate = birthDate;
    }

    // getters/setters: tulajdonságok lekérdezése/beállítása

    printFullName() {
        console.log(this.lastName + " " + this.firstName);
    }
    //ide további saját metódusok
}

// Objektumpéldány létrehozása a konstruktor hívással - construktor call
let employeeObj01 = new Employee("Teszt", "Elek", "1960-06-07");
console.log(employeeObj01.lastName);
console.log(employeeObj01.printFullName());

let employeeObj02 = new Employee("Teszt", "Elek"); //Legtöbb nyelvnél hiba 
console.log(employeeObj02); //Employee {lastName: 'Teszt', firstName: 'Elek', birthDate: undefined}

// sytanctical sugar, mert a fenti Employee-s példa megoldható sima fv-el
// ugy viselkedik, úgy működik, mintha osztály lenne
// háttérben a JS motor átalakítja a Employee class-t funtion Employee szerkezetté
function Person(lastName, firstName, birthDate) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.birthDate = birthDate;

    //fv. kifejezés a fv-en belül: 
    this.fullName = function () { return this.firstName + " - " + this.lastName };
}

// Konstruktor hívás, létrehozza az objektumpéldányt és beállítja az adatait

let personObj01 = new Person("Doe", "John", "1990-01-02");
document.getElementById("nev").textContent = personObj01.fullName();
document.getElementById("nev").textContent += ", vezetéknév:" + personObj01.lastName;
document.getElementById("nev").textContent += ", keresztnév:" + personObj01.firstName;
document.getElementById("nev").textContent += ", születési dátum:" + personObj01.birthDate;
console.log(personObj01);
console.log(personObj01.fullName());

// Az objektumban felülírtuk a fullName fv. kifejezést (összes más nyelben híbát dobna)
// Mit jelent a this kulcsszó?
// this-el hívatkozunk az adott objektum példányra (personObj01)
personObj01.fullName = function () {
    return this.firstName + ";" + this.lastName;
};
console.log(personObj01.fullName());

//Nincs Person osztály
let personObj02 = new Person("Doe", "Jane", "1992-01-01");
// létrehozunk egy új fv. kifejezést a personObj02-ben
personObj02.printAllData = function () {
    console.log(this.firstName + " " + this.lastName + ", született: " + this.birthDate);
}
personObj02.printAllData();//Jane Doe, született: 1992-01-01
//personObj01.printAllData(); //Uncaught TypeError: personObj01.printAllData is not a function

// A printAllData() fv. kifejezés personObj02-höz köthető, csak ott elérhető viselkedés

/*************** Öröklődés - Class szintakszis  ***********************/
// sytactical sugar - öröklödés
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + "hangot ad ki...");
    }
}
//extends: A Dog osztály az Animal osztályból származik, megkapja annak tulajdonságait (name) és
//viselkedésmódjait (speak())
//Lehetősége van felülírni és kiegészíteni az őst
class Dog extends Animal {
    constructor(name) {
        super(name); //super: ős konstruktorára hivatkozik: meghívja az ős konstruktorát és átadja a name paramétert
    }

    speak() {
        console.log(this.name + " ugat...");
    }
}

let dogObj = new Dog("Rex");
dogObj.speak(); //Rex ugat...

//Minden JS object prototype-ből örökli a tulajdonságait és metódusait
//Minden beépített JS konstruktor használja a prototipust

//obj ={}; ua., mint obj= new Object();
//Object.Prototype fv kerül meghívásra, ami létrehozza az új obj. példányt

//Beépített prototipusok: Array, Date, Function
// -> Mindhárom az Object.Prototype -ból örökli tulajdonságait és metódusait
//Array.prototype, Function.prototype, Number.prototype

//A prototipusok egyes metódusai felülírhatóak,
//pld. String.prototype.show() megjelenítése helyett alert, DE:
//Fontos: csak a saját prototipusaid módosítsd, ne a beépített JS-eket

var obj = {}; //létrejön egy üres objektum
obj;

//az üres objektum metódusokkal jön létre, melyeket felülírhatóak
/*	__proto__:
            constructor: ƒ Object()
            hasOwnProperty: ƒ hasOwnProperty()
            isPrototypeOf: ƒ isPrototypeOf()
            propertyIsEnumerable: ƒ propertyIsEnumerable()
            toLocaleString: ƒ toLocaleString()
            toString: ƒ toString()
            valueOf: ƒ valueOf()
            __defineGetter__: ƒ __defineGetter__()
            __defineSetter__: ƒ __defineSetter__()
            __lookupGetter__: ƒ __lookupGetter__()
            __lookupSetter__: ƒ __lookupSetter__()
            get __proto__: ƒ __proto__()
            set __proto__: ƒ __proto__()
            	
*/
obj.toString = function () {
    alert("teszt");
};
obj.toString(); //teszt
obj.toString("szöveg");	//teszt	
// NEM szerencsés a prototype-os működést felülírni ilyen szinten

/******************** Öröklés Prototype -al *****************/
//az Object.Prototype van az öröklés csúcsán
//például user -> ből szükséges admin és guest is, de csak egyszer
//szeretném definiálni a tulajdonságait, metódusait
//egy - egy objektumpéldánynak lehetnek saját tulajdonságai, metódusai is
//ami csak rá jellemző

//a javascript objektumoknak van egy speciális, rejtett tulajdonsága 
// [[Prototype]] -> lehet null vagy mutathat másik obj. példányra, ezt az obj. példányt hívjuk prototipusnak

//  [[Prototype]] rejtett, de beállítható __proto__ -val (nem ua. mint a setter/getter)

let animal = {
    isHungry: true, //amikor létrejön az objektumpéldány az animal-ből, akkor éhes lesz
};

let rabbit = {
    jumps: true,
};

// (ős (root, parent)-animal, gyermek(child) - rabbit)
rabbit.__proto__ = animal; // rabbit az animal-ból származik 
console.log("rabbit.isHungry: " + rabbit.isHungry); //true, mert megörökli az ős objektumból (animal-ból)
console.log("rabbit.jumps: " + rabbit.jumps); //true, a saját tulajdonsága, kiegészíti az ős objektum tulajdonságait

let animal2 = {
    isHungry: true,
    walk() {
        console.log("Ős - animal2 obj: Állat sétál...");
    }
};

let rabbit2 = {
    isHungry: false,
    jumps: true,
    __proto__: animal2, //átveszi az animal2-nek a metódusait is
}

rabbit2.walk(); //animal2 obj: Állat sétál...
console.log("Rabbit2 éhes -e: " + rabbit2.isHungry); //false, mert az ősben is van isHungry, azt felülírja

// JS MAGIC - objektumok örökölnek egymástól tulajdonságokat(kulcs-érték) és viselkedés formákat (method)
// öröklődési lánc (prototype chain) akármilyen hosszú lehet objektumokból (NEM CLASS)
// animal-> rabbit -> whiteRabbit

/******************************* írás/olvasás szabályai ****************************/
let animal3 = {
    isHungry: true,
    walk() {
        console.log("Animal sétál");
    }
};

let rabbit3 = {
    __proto__: animal3,
}

rabbit3.walk = function () {
    console.log("Nyuszi sétál...");
}
//Felülrja az ősben lévő azonos nevű metódust
rabbit3.walk(); //Nyuszi sétál...

/**************************** getter/setter **************************************/
// set: beállítás
// get: lekérdezés

let user4 = {
    firstName: 'John',
    lastName: 'Doe',

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");

    },
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let admin4 = {
    __proto__: user4,
    isAdmin: true,
}

console.log(admin4.fullName); //John Doe - getter-t hívja meg, mert lekérdezés
admin4.fullName = 'Jane Doe';
console.log(admin4.fullName); //Jane Doe

//this hivatkozás esetén az objekten belül melyikre hivatkozom?
//az object-re magára, vagy a prototipusára?
//válasz: this MINGIG AZ ADOTT OBJECT-RE VONATKOZIK, AHOL HASZNÁLOM

// JS NEM OOP nyelv!!! Objektum alapú.
// JS-ben létezik class és extends, mint a java-ban, de ez csak syntactical sugar
// Az objektumok egymástól örökölnek tulajdonságokat és viselkedéseket.
// Miért nem OOP nyelv?
// Nem tudja ugyanazt, mint a java és c#

// Feladat: Hozzunk létre egy Vechicle nevű (Jármű) osztályt egy rendszám és sebesség tulajdonsággal
// Származtassunk belőle egy Car (autó) osztályt, aminek legyen gyártó tulajdonsága is.
// Mindkettőben legyen egy-egy printAllData() fv., ami azt csinálja, ami a neve.
// Az autóban legyen egy gyorsítás, lassítás fv (elég a kiirást megvalósítani)
// Objektumok létrehozásával teszteljük a működést!

class Vechicle {
    constructor(plateNumber, speed) {
        this.plateNumber = plateNumber;
        this.speed = speed;
    }

    printAllData() {
        console.log("Rendszám: " + this.plateNumber + "Sebesség: " + this.speed);
    }
}

class Car extends Vechicle {
    constructor(plateNumber, speed, manufacturer) {
        super(plateNumber, speed);
        this.manufacturer = manufacturer;
    }

    printAllData() {
        console.log("Rendszám: " + this.plateNumber + " - Sebesség: " + this.speed + " - Gyártó: " + this.manufacturer);
    }

    accelerate() {
        console.log("Gyorsít...");
    }

    slowDown() {
        console.log("Lassít...");
    }
}

let carObj = new Car("RZT345", 400, "Tesla");
carObj.printAllData();
carObj.accelerate();
carObj.slowDown();

//HF prototype-os szintakszissal.