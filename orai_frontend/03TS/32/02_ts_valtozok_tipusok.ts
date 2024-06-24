// Tipusmegadás szintakszisa TS-ben
// hatáskör valtozónév :tipus = érték
// hatáskör lehet: const, var, let 

// A var működáse más, mint a TS-ben, tipusbiztonság
var number = 5; // JS szintakszis, JS változó - dinamikusan kapja a tipus
console.log("number változó értéke: "+number);
//var number = "öt"; // JS-ben lefut, TS-ben hibát dob: Variable 'number' must be of type 'number', but here has type 'string
var number = 6;
console.log("number változó értéke: " + number);

/*************** Boolean tipus: logikai ******************************/
var active:boolean = false; //csak true vagy false értéket vehet fel
//var status:boolean = 0; //szintaktiai hiba
active = true;
console.log("active változó értéke: "+active);

/**************** Number tipus: szám (egész és tört is) *******************/
var numberInput:number = 5;
var numberFraction:number = 5.5;
console.log("numberInput: "+numberInput);
console.log("numberFraction"+numberFraction);

// ECMAScript 2015 - óta hexa (16-os számrendszer), oktális (nyolcas), bináris (kettes szr.)
let hex:number = 0xf00d;
let binary:number = 0b1010;

/*************** String tipus: szöveg ****************************/
let text:string ="TypeScript is awesome!!!";
console.log(text);

// template string
let fullName:string = `John Doe`; //altgr+7
let age:number = 33;
let textFullNameAndAge = `Hello, a nevem: ${fullName}, életkorom: ${age}`;
console.log(textFullNameAndAge);

/*********** Array tipus: Tömb  ****************************/
let numberArray1:number[] = [1,53,87];
let numberArray2:Array<number> = [85,99,6,7];
console.log(numberArray1);
console.log(numberArray2);

//let errorArray:number[] = [1,"53",87]; //szintaktikai hiba
let fruits:string[] = ["barack", "szilva","körte"];
console.log(fruits);
//let fruitsErrorArray:string[] =[1,"barack"]; //szintaktikai hiba

/*************** Tuple tipus *************************************/
// Fix méretű tömb, összetett adattipus (különböző adattipusok tárolására)
let productDetails:[string,number,boolean];
productDetails = ["FTZ-92831",3,true];
//productDetails = ["FTZ-92831","3",true]; // szintaktikai hiba
console.log(productDetails);

let appDeatails:readonly [number, boolean,string] = [1.0,true, "Test App"];
//appDeatails.push(2.0,false,"Test App2"); //hiba, mert csak olvasható a tömb
console.log(appDeatails);

/*********** Enum tipus  *****************************/
// C#- ból került át a nyelvi környezetbe
// Nem változik az adat, előre meghatározott értékeknél
// Pld. TermékKategóriák 1 PC, 2 Notebook, 3 Periféria
// Pld. Értékelő alkalmazás 1-5: 1: elégtelen, 2: elégséges stb.
// Pld. Napok 1- hétfő, 2-kedd, vagy hónapoknál 1-január, 2-február

enum Color {
    Red,
    Green,
    Blue,
}

let colorSelected:Color = Color.Green;
console.log(colorSelected); //1

enum Color2 {
    Red = 1,
    Green = 2,
    Blue = 3,
}

let colorSelected2:Color2 = Color2.Green;
console.log(colorSelected2); //2

let colorName:string = Color2[2];
console.log(colorName); //Green

/********************* Speciális tipusok: *******************************/
// :unknown: ismeretlen: programozás közben, az adott pont, ahol tartunk, nem tudjuk, 
// hogy mi legyen a tipusa a változónak. Addig nem engedi használni, amíg nem adtuk meg
// a tipusát vagy az értékét. Pld. fv-ekben nem engedi használni.
let unknownType:unknown;
//console.log(unknownType2); //Reference Error
console.log(unknownType); //undefined
unknownType = 4; //number
unknownType = "inkább legyen szöveg";//string
console.log(unknownType + ":"+typeof(unknownType)); //string

// :any: bármilyen tipust felvehet (hasonló, mint JS változó felvétel)
// TS tipusbiztonságát, lényegét veszíti el a TS
// Fontoljuk meg a használatát TS-ben!!! 
var userAge:any = "harminc";
userAge = 30;
console.log(userAge +", tipusa: "+typeof(userAge)); //number

// :void: any ellentéte: eljárás-oknál a visszatérési érték nélkül
let unused:void = undefined; //undefined vagy null lehet csak az értéke
//unused = 5; //szintaktikai hiba

// Null és undefined
let gameLevel:undefined = undefined;
let gameLevelText:null = null;

// :never 
//Never : mindegyik tipusnak altipusa: sosem jön létre
// function error(message: string): never {
//     throw new Error(message);
// }

/************** Object tipus ******************************/
let car: {manufacturer:string, model:string, year:number} ={
    manufacturer : "Toyota",
    model: "Corolla",
    year:2009,
}
console.log(car);
console.log(car.manufacturer);
//car.miles = 1000; // TS-ben hibát dob, mert nincs ilyen kulcs (JS-ben létrehozza 1000 értékkel)

// ! Non-null assertion operator 
// ? optional operator

// opcionális property (tulajdonság) 
let car2: {manufacturer:string, model:string, year:number, miles?:number} ={
    manufacturer : "Honda",
    model: "Civic",
    year:2010,
}
//car2.miles = "2000"; //hibát dob a tipus miatt
car2.miles = 2000;
console.log(car2);

/**************** Type Inference  ***************************/
// A Type Inference (Típuskövetkeztetés) a TypeScript egyik fontos 
// funkciója, amely lehetővé teszi a változó típusának meghatározását
//  a változó értékéből,
//   ha a típust nem határozták meg explicit módon.

// Amikor egy változó definiálódik TypeScript-ben, 
// a típusát lehet megadni a változó értékének típusa szerint.
//  Ha nem adunk meg típust, a TypeScript a változó értékéből 
//  következteti a típust. Azaz, amikor a változóhoz értéket rendelünk,
//   a TypeScript az értékből kiolvassa a típust, és automatikusan
//    hozzárendeli a változóhoz.
let message = "Hello, TypeScript!"; //string

/**************** Type assertions  ***************************/
// A Type assertions (Típuskényszerítés) a TypeScript egyik funkciója,
//  amely lehetővé teszi a fejlesztők számára, hogy kifejezzék
//   a típusbiztonságukat, és megmondják a TypeScriptnek, 
//   hogy egy adott változó vagy érték milyen típusú legyen.

// A Type assertion lényegében azt jelenti, hogy a fejlesztő 
// megmondja a TypeScriptnek, hogy bízik abban, hogy az adott 
// változó vagy érték típusa megegyezik az általa megadott típussal.
//  A TypeScript ezt a típusellenőrzés során figyelembe veszi, 
//  de nem végez további típusellenőrzést.

// A Type assertion kétféleképpen lehet megvalósítva TypeScript-ben:
// 1. A "as" kulcsszóval:
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
console.log(strLength);
// Ebben az esetben a fejlesztő a "as" kulcsszóval 
// jelzi a TypeScriptnek, hogy a someValue változó típusa string. 

//2. A "<>" szimbólumokkal:
let someValue2: any = "Hello, TypeScript!";
let strLength2: number = (<string>someValue2).length;
console.log(strLength2);

let someValue3: any = "321";
let strLength3: number = (<string>someValue3).length;
console.log(strLength3); //3
console.log(strLength3);
// A Type assertion hasznos lehet, amikor a TypeScript nem tudja 
// pontosan meghatározni a változó típusát, vagy amikor 
// a fejlesztő biztos abban, hogy a változó típusa megegyezik 
// a megadott típussal, de ezt a TypeScript nem tudja 
// automatikusan ellenőrizni. Használata a fejlesztő felelőssége.