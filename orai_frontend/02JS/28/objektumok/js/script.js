//Object -> összetett adatstruktúra tárolására alkalmas
//property (tulajdonság): key-value párból áll (kulcs érték pár),

//Object létrehozása 1. módszer -> Object Constuctor Syntax
let user = new Object();

//Object létrehozása 2. módszer -> Object Literal Syntax
let user2 = {}; //fv, eljárás method() array[]
let user3 = {
    name : "John", //kulcs (key): name, érték (value): John
    age:30, //kulcs (key): age, érték (value): 30
};
// az utolsó kulcs-értékpárnál is érdemes kirakni a vesszőt,
// elfogadja annélkül is, de amikor hozzáadunk,
// vagy elveszünk elemet zavart okozhat
console.log(user3);

// Változón belül tárolt értékek elérése 1. módszere: dot notation (ponttal való megadás)
console.log(user3.name); //John
console.log(user3.age);//30

// Kulcs-értékpár hozzáadása (meglévő objektumhoz)
user3.isAdmin = true;
console.log(user3.isAdmin); //true

// Bármelyik kulcs törölhető
delete user3.age;
console.log(user3);//{name: 'John', isAdmin: true}
console.log(user3.age);//undefined

// Többszavas kulcs(lehetőség szerint ne használjuk)
let user4 = {
    name: 'Jane',
    age: 28,
    "postal address": 1111, // dupla aposztróffal
};
console.log(user4);

//console.log(user4.postal address);// hibás szintakszis
//console.log(user4."postal address");// hibás szintakszis, ha több szavas a kulcs

// Megoldás:
// Változón belül tárolt értékek elérése 1. módszere: square bracket notation (szögletes zárójelezés)
// Objektumon belüli értéke lekérdezése -getter/get
console.log(user4["postal address"]); //1111

// setter / set: objektumon belüli érték beállítása
user4["postal address"] = 1221;
console.log(user4); 

delete user4["postal address"];
console.log(user4);

// Mikor melyik módszert használjuk? Dot notation VS square bracket notation
// Szögletes zárójeles formánál a kulcs futási időben is megkaphatja az értéket
// pont-os verziónál ez nem működik.
// A szögletes formával sokkal több lehetőségünk van, ha összetettebb feladatot kell
// megoldanunk, akkor használjuk ezt a formát!

//Meglévő kulcs mögötti érték lekérdezése a felhasználótól érkező adattal.
// undefined-dal tér vissza, ha olyan kulcsra hivatkozunk, ami nincs.

let user5 = {
    fullName: "John Doe",
    age: 30,
    jobTitle:"JS programmer",
};

let key = prompt("John Doe melyik adatára kiváncsi? (fullName, age, jobTitle", "fullName");
console.log(user5[key]); //csak a szögletes zárójel működik
console.log(user5.key); //undefined, mert futási idő előtt megnézi van -e olyan kulcs, hogy key

// számított tulajdonság -> computed property - csak a szögletes zárójel használható a kulcsnál
let gyumolcs = prompt("Adj meg egy gyümölcsnevet", "alma");
let kosar = {
    [gyumolcs]: 5,
}
console.log("kosar.alma "+kosar.alma); //5, ha almát adtam meg
console.log("kosar['alma'] "+kosar["alma"]);//5, ha almát adtam meg
console.log("kosar[gyumolcs] "+kosar[gyumolcs]); //5
console.log("kosar.gyumolcs "+kosar.gyumolcs); //keres egy gyumolcs nevű kulcsot, ami nincs, undefined lesz

// Összetett művelet is végezhető a szögletes zárójelben
// (ékezeteket ne használjunk kulcsban, de működik azzal is)
let zoldseg = 'paprika';
let huto = {
    [zoldseg + 'Friss']:3,
}

console.log(huto);
console.log(huto.paprikaFriss); //3

// JS MAGIC: foglalt szó is lehet kulcs: érdekesség
let obj = {
    for:1,
    let: 2,
    return: true,
};

console.log(obj.let); //2
console.log(obj.return); //true

// Életszerű példa - Object használatra: fv, ami object típussal tér vissza
function makeUser(name, age){
    return {
        name:name,
        age:age,
    };
}

let userNew = makeUser("John", 30); //létrejön egy userNew object tipus (kulcs értékpárokkal)
console.log(userNew.name); //John

//elöző rövidített változata
function makeUser2(name, age){
    return {
        name, //ua. mintha name:name
        age, //ua mintha age:age
    };
}
//mindkét kód ua., feltölti a user objektumot adatokkal

// Ellenőrzés -> létezik -e valamilyen nevű kulcs
let felhasznalo = {
    teljesNev: "Teszt Elek",
    eletKor:33,
}
console.log(felhasznalo.userId === undefined); //true - nincs ilyen kulcs
console.log(felhasznalo.eletKor === undefined); //false

// speciális operátorral 'in' is leellenőrhető
console.log("teljesNev" in felhasznalo);  //true
console.log("eletkor" in felhasznalo); //false - kisbetű/nagybetű különböző

// JS MAGIC
let proba = {
    test: undefined,
};

console.log(proba.test); //undefined
console.log(proba.teszt); //undefined
// undefined tér vissza, ha a kulcs alapján megtalálja az értéket
// undefined tér vissza, ha nincsen ilyen kulcs

//megoldás megjelenítjük a teljes objectet
console.log(proba);
if (proba.test === undefined) {
    console.log("proba.test === undefined: true"); //ide megy bele
} else {
    console.log("proba.test === undefined: false");
}

if (proba.teszt === undefined) {
    console.log("proba.teszt === undefined: true"); //ide megy bele
} else {
    console.log("proba.teszt === undefined: false");
}

//Hogyan működik a for..in loop, milyen sorrendben jeleníti meg a kulcsokat?
//Warning!!! JS MAGIC --> speciális sorrend: számoknál növekvő sorrend
//stringeknél a létrehozás dátuma

// Object bejárása ciklussal - for..in loop
for (let kulcs in felhasznalo) {
    console.log("Kulcs: "+kulcs + " - "+"érték: "+felhasznalo[kulcs]);
}

let elohivoSzamok = {
    "49":"Németország",
    "41":"Svájc",
    "44":"Nagy Britannia",
}

//41 Svájc, 44 Nagy Britannia, 49 Németország
for (let kulcs in elohivoSzamok) {
    console.log("Kulcs: "+kulcs + " - "+"érték: "+elohivoSzamok[kulcs]);
}

//Miért így írja ki??? Mert egész típussá alakítja a JS engine!
//Alakítás folyamata: átalakítja numberré és vissza:
//ha ugyanaz, akkor egész tipus marad, egyébként string!

let elohivoSzamok2 = {
    "+49":"Németország",
    "+41":"Svájc",
    "+44":"Nagy Britannia",
}

// +49 Németország +41 Svájc +44 Nagy Britannia
for (let kulcs in elohivoSzamok2) {
    console.log("Kulcs: "+kulcs + " - "+"érték: "+elohivoSzamok2[kulcs]);
}
//String(49) //TS-ben működik

// Objektum másolása
let product1 = {name: "Logitech mouse - MX performance"};
let product2 = product1;
console.log(product2.name); //Logitech mouse - MX performance
product2.stockAmount = 5;
console.log(product1.stockAmount); //5
product1.stockAmount = 3;
console.log(product2.stockAmount); //3
console.log(product1);
console.log(product2);
// Az objektum nem duplázódik meg, hanem ugyanarra a referenciacímre mutat
// Referencia tipusú változóknál (ilyen a tömb is)
//arr2 = arr1;

// const object
const userConst = {
    name: "John",
}
userConst.name = "Jane";
console.log(userConst.name); //Jane - engedi

const meal = "töltöttkáposzta";
//const meal = "bejgli"; szintaktikai hiba

userConst.age = 30; //engedi
console.log(userConst);

// userConst = {
//     name: "Jonnie",
//     age: 8,
// }

console.log(userConst); //Uncaught TypeError: Assignment to constant variable.

let cars = [
    {
        manufacturer:"Volvo",
        year:2016
    },
    {
        manufacturer:"Saab",
        year:2001
    },
    {
        manufacturer:"BMW",
        year:2010, 
    },
];

console.log(cars[0].manufacturer); //Volvo
console.log(cars[2].year); //2010 

// Objektum tömb bejárása for ciklussal - márka és gyártási év kiírása
for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    console.log(element);
    console.log(element.manufacturer + " # "+element.year);
}

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i].manufacturer + ";"+cars[i].year);
}

//Objektum tömb bejárása for..in szerkezettel
for (const key in cars) {
    console.log(cars[key]);
}

function diplayCars(){
    let result = "";
    for (let key in cars) {
        result+=cars[key].manufacturer + " - "+cars[key].year + "<br>";
    }
    document.getElementById("demo").innerHTML = result;
}

diplayCars(); //pageOnLoad: meghívásra kerül az oldal betöltésekor

function mySortByYear(){
    cars.sort(function(a,b){return a.year - b.year});
    diplayCars();
}

function mySortByManufacturer(){
    cars.sort(function(a,b){
        var x = a.manufacturer.toLocaleLowerCase();
        var y = b.manufacturer.toLocaleLowerCase();
        if (x<y) {return -1;}
        if (x>y) {return 1;}
        return 0;
    });
    diplayCars();
}
