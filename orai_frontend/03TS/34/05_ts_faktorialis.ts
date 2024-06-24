// Rekurzió: önmagát meghívó metódus
// Tömörebb lesz a kód, jobban átlátható, 
// néhány sorban megoldjuk a problémát, elegáns. 
// Minden rekurziv algoritmus megoldható ciklussal is. 
// Fontos része a kilépési pont.
// !5 = 1*2*3*4*5

function factorialForCalculate(n: number):number{
    let sum:number = 1;
    for (let i = 1; i <= n; i++){
        sum *= i; //operator rövidítés: ua. osszeg = osszeg *i
    }
    return sum;
}

function factorialRecursiveCalculate(n: number):number{
    if (n==0) return 1; // itt áll meg a rekurzív algoritmus
    else return factorialRecursiveCalculate(n-1)*n;
}

function printFactorialResult():void{
    const number:number = Number((document.getElementById("number") as HTMLInputElement).value);
    document.getElementById('factorialForCalculate')!.textContent = ""+factorialForCalculate(number);
    document.getElementById('factorialRecursiveCalculate')!.textContent = ""+factorialRecursiveCalculate(number);
}
