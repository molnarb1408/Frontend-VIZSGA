//ERROR duplicate function declaration: azonos mappán belül van a JS-el
//zárjuk be a js tabfület - watch be van állítva, akkor már nem dob ilyen hibát
// a tsconfig.json konfig megoldja

// 1. Tipus: Eljárás: visszatérési érték nélküli, paraméter nélküli
function printSalute():void {
    //document.write("Hello, TS!!!"); //Vizsgán előfordulhat, hogy ezt kell használni
    // lsd. Első JS óra document.write - Danger - Ne használjátok
    
    // ! Non-null assertion operator 
    // ? optional operator
    document.getElementById("print-salute")!.textContent = "Hello, TS!!!";
}

function printRectangleDetails():void {
    let a:number = getRectangleSide("Kérem adja meg az 'a' oldalt: ");
    let b:number = getRectangleSide("Kérem adja meg az 'b' oldalt: ");
    let result:string = "Kerület: "+getPerimeter(a,b) + ", Terület: "+getArea(a,b);
    document.getElementById("rectangle-details")!.textContent = result;
}

function printDiceRollResult():void {
    let result:string = "Kockadobás (6 oldalú) eredménye: "+getDiceRollResult();
    document.getElementById("dice-role-result")!.textContent = result;
}

function printDiceRollCustomResult():void {
    let result:string = "Kockadobás eredménye: "+getDiceRollCustom(getNumberByPromt("Kérem adja meg a kocka oldalait: "));
    document.getElementById("dice-role-custom-result")!.textContent = result;
}

// 2. Tipus: Eljárás: visszatérési érték nélküli, paraméterekkel
function squarePerimeterCalcAndPrint(a:number):void{
    let perimeter:number = 4*a;
    let result:string = "A négyzet kerülete: "+perimeter;
    document.getElementById("square-perimeter-result")!.textContent = result;
}

// 3. Tipus: Függvény (visszatérési értékkel, paraméter nélkül)
function getDiceRollResult():number {
    // Amíg nincs return, addig szintaktikai hiba
    return Math.floor(Math.random()*6)+1;
}

function getDiceRollCustom(numberOfSides:number):number {
    return Math.floor(Math.random()*numberOfSides)+1;
}

// 4. Tipus:  Függvény (visszatérési értékkel, paraméterrel)
function getRectangleSide(message: string):number{
    let side = Number(prompt(message));
    return side;
}

function getNumberByPromt(message: string):number{
    let side = Number(prompt(message));
    return side;
}

function getPerimeter(a:number, b:number):number {
    return (a+b)*2;    
}

function getArea(a:number, b:number):number {
    return a*b;
}

//Feladat: egyedi oldalszámú kockadobás eredményét jelenítsuk meg!

printSalute();
printRectangleDetails();
//getDiceRollResult(6); //szintaktikai hiba, mert nincs paramétere
printDiceRollResult()
squarePerimeterCalcAndPrint(5);
printDiceRollCustomResult();