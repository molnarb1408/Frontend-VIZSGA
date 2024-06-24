//1. hibás megoldás fv és eljárás nélkül
// var number1 = prompt("Adja meg az első számot:"); //5
// var number2 = prompt("Adja meg a második számot:"); //10
// var sum = number1 + number2; //510
// console.log("A két szám összege: "+sum); //510, mert összefűzést csinált (szöveges adat)

// //2. megoldás fv és eljárás nélkül
// var number1 = Number(prompt("Adja meg az első számot:")); //5
// var number2 = Number(prompt("Adja meg a második számot:")); //10
// var sum = number1 + number2; //15
// console.log("A két szám összege: "+sum); //A két szám összege: 15

//3. megoldás fv és eljárás nélkül - legrövidebb megoldás, DE
// nem jól áttekinthető
// nem tesztelhető könnyen
// console.log("A két szám összege: "+Number(prompt("Adja meg az első számot:")) + Number(prompt("Adja meg a második számot:"))); 

//4. megoldás fv és eljárással
function add(number1, number2){
    return number1+number2; //szövegnél nem összeadja, hanem összefűzi
}

function getInputNumber(message){
    var number = Number(prompt(message));
    return number;
}

function printSumResultToConsole(num1, num2){
    console.log(add(num1,num2));
}
console.log("Összeg eredménye: ");
printSumResultToConsole(getInputNumber("Kérem adja az első számot: "),getInputNumber("Kérem adja a második számot: "));
