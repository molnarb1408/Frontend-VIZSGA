// Fibonacci számsorozat: 
// 1 1 2 3 5 8 13 21 34 55...
// Az akutális elem a 3.elemtől az előtte lévő két elemnek az összege

function fiboForCalculate(n:number):number{
    if (n==1) return 1;
    if (n==2) return 1;

    let f1 = 1;
    let f2 = 1;
    let f3 = 0;
    for (let i = 3; i <=n; i++){
        f3 = f1+f2;
        f1 = f2;
        f2 = f3;
    }
    return f3;
}

function fiboRecursiveCalculate(n:number):number{
    if (n<=2) return 1;
    else return fiboRecursiveCalculate(n-1)+fiboRecursiveCalculate(n-2);
}
// console.log(fiboCiklussalSzamol(8));
// console.log(fiboRekurzivSzamol(8));
// hannoi tornyai
// valós példák frontend-en: adatszerkezetek bejárása
// fa bejárás (hierarchikus felépítésú adatnál )
// gráf bejárás 
// mappa bejárások 
// weboldalon menupontok kezelése
// breadCrumb - kenyérmorzsa (Jancsi és Juliska):
// termékek->PC és alkatrészészek -> Asztali PC -> atx-es felépítésű PC
