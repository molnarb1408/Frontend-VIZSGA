/***********************************************************/
//1. Array.forEach() -> minden elem a tömbben (callback fv.)
/*********************************************************/

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunctionForEach);
document.getElementById("forEach").innerHTML = txt;

function myFunctionForEach(value, index, array) {
    txt = txt + value + " index: "+ index+ " tömb értékei: "+array+"<br>"; 
}

var txt2="";
numbers.forEach(myFunctionForEach2);
//utolsó két paraméter elhagyásával
function myFunctionForEach2(value) {
    txt2 = txt2 + value +"<br>"; 
}
document.getElementById("forEach2").innerHTML = txt2;

/***********************************************************/
//2. Array.map() -> callback fv., új tömböt hoz létre, a tömb minden 
//elemére meghívja a fv-t. Értékek nélkül nem lehet meghívni,
//nem változtatja meg az eredeti tömb értékét
/*********************************************************/

//megszorozza 2-vel a tömb minden elemét
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunctionMap);

//Megjegyzés: utolsó 2 paraméter elhagyható
function myFunctionMap(value, index, array) {
    return value * 2;
}
document.getElementById("arrayMap").innerHTML = numbers2;

/***********************************************************/
//3. Array.filter() -> szűrés, létrehoz egy új tömböt, ha 
//átmegy a szűrön
/*********************************************************/

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunctionFilter);

function myFunctionFilter(value) {
    return value > 18;
}
document.getElementById("arrayFilter").innerHTML = over18; //45,25

/***********************************************************/
//4. Array.reduce() -> balról jobbra haladva létrehoz egy 
//új értéket
/*********************************************************/

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunctionReduce);

function myFunctionReduce(total, value, index, array) {
    return total + value;
}
document.getElementById("arrayReduce").innerHTML = sum; //99

/***********************************************************/
//5. Array.reduceRight() -> ua. mint az array.reduce csak jobbról balra
/*********************************************************/

/***********************************************************/
//6. Array.every() -> megvizsgálja a tömb minden elemét (hogy igaz -e minden elemre egy állítás)
/*********************************************************/
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunctionEvery);

function myFunctionEvery(value, index, array) {
    return value > 18;
}
//false-al tér vissza, mert nincs minden eleme 18 fölött
document.getElementById("arrayEvery").innerHTML = allOver18;  //false

/***********************************************************/
//7. Array.some() -> megvizsgálja a tömb minden elemét (van -e olyan eleme, amire igaz egy állítás)
/*********************************************************/
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.some(myFunctionSome);

function myFunctionSome(value, index, array) {
    return value > 18;
}
//true-val tér vissza, mert van olyan eleme, ami 18 felett van
document.getElementById("arraySome").innerHTML = allOver18;  //true

/***********************************************************/
//8. Array.indexOf() -> melyik indexen található a tömbben (első előfordulása)
// indexOf(searchElement: string, fromIndex) (utolsó paraméter nélkül is meg lehet hívni)
// -1 ha nincs benne
/*********************************************************/
var fruits = ["Apple", "Orange", "Apple", "Mango", "Orange"];
var index = fruits.indexOf("Orange");
document.getElementById("arrayIndexOf").innerHTML = index; //1

/***********************************************************/
//9. Array.arrayLastIndexOf() -> ua. mint az előző (csak utolsó előfordulása) 
/*********************************************************/
var index = fruits.lastIndexOf("Apple");
document.getElementById("arrayLastIndexOf").innerHTML = index; //2

/***********************************************************/
//10. Array.find() -> megkeresi egy értéknek az első előfordulását a tömbben 
/*********************************************************/
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunctionFind);

function myFunctionFind(value, index, array) {
    return value > 18;
}
document.getElementById("arrayFind").innerHTML = first; //25

/***********************************************************/
//11. Array.findIndex() -> megkeresi az első előfordulás indexét
/*********************************************************/
var numbers = [4, 9, 16, 25, 29];
var firstIndex = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
document.getElementById("arrayFindIndex").innerHTML = firstIndex; //3