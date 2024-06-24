// 1. megoldás: fv és eljárás nélkül
// var a = prompt("Kérem adja meg a téglalap egyik oldalát: ");
// //var a = 10; //engedi és felülírja (erősen típusos nyelveknél vagy let kulcsszóval nem engedi)
// var b = prompt("Kérem adja meg a téglalap másik oldalát: ");

// // 1. lépés: Ellenőrizzük, hogy sikeres -e a változó létrehozása és értékadása
// console.log("a oldal értéke: "+a); //szöveges adat fekete szín a konzolon
// console.log("b oldal értéke: "+b);//szöveges adat fekete szín a konzolon

// // 2. lépés: Típusellenőrzés - typeof() megadja egy változó tipusát
// console.log(typeof(a)); //string
// console.log("b oldal változó tipusa: "+typeof(b));//string

// //tipusátalakítás Number() vagy parseInt() különbség később
// var a = parseInt(a);
// var b = Number(b);
// console.log("Tipusátalakítás után változótipusok: ");
// console.log(typeof(a)); //number
// console.log("b oldal változó tipusa (átalakítás után): "+typeof(b));//number

// var area = a*b;
// var perimeter = 2*(a+b);
// console.log("Kerület: "+perimeter +", terület: "+area);

function getInput(message){
    var number = Number(prompt(message));
    return number;
}

function getPerimeter(a,b){
    return (a+b)*2;
}

function getArea(a,b){
    return a*b;
}

function printResultsToConsole(){
    var aInputMessage = "Kérem adja meg a téglalap első oldalát: ";
    var bInputMessage = "Kérem adja meg a téglalap másik oldalát: ";
    var a = getInput(aInputMessage);
    var b = getInput(bInputMessage);
    console.log("Kerület:"+getPerimeter(a,b));
    console.log("Terület:"+getArea(a,b));
}
printResultsToConsole();
