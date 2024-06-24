//1. megoldás fv és eljárás nélkül
// let base =Number(prompt("Kérem adja meg az alapot: "));
// let power =Number(prompt("Kérem adja meg a kitevőt: "));
// //let base = 10; //nem engedi felülírni, mert van már ilyen változó
// ///javasolt a let használata a var helyett a var veszélyei miatt
// let result = Math.pow(base, power); 
// console.log(result);
// alert(result);

//2. megoldás fv és eljárással
function getInput(message){
    var number = Number(prompt(message));
    return number;
}

function getPowResult(base, power){
    let result = Math.pow(base, power); 
    return result;
}

function printResultToAlert(){
    let base = getInput("Kérem adja meg az alapot: ");
    let power = getInput("Kérem adja meg az kitevőt: ");
    alert("Hatványozás eredménye: "+getPowResult(base,power)); 
}
printResultToAlert();