
/*
toString() - metódus: tömbre alkalmazva vesszővel elválasztott 
    formában írja ki a tömb elemeit.
*/
var fruits = ["Körte", "Szilva", "Alma", "Cseresznye"];
document.getElementById("toString").innerHTML = fruits.toString();

//1. Hozzáadás másképpen - a tömb méretének tulajdonságával
fruits[fruits.length] = "Barack";  
document.getElementById("addToArray").innerHTML = fruits.toString();

//2. splice(hová, hány elemet töröljek, mit szúrjak be): több elem hozzáadása a tömbhöz
fruits.splice(2, 0, "Narancs", "Citrom"); //2. elem után tegye, ne töröljün elemet, elemek neve
document.getElementById("spliceAdd").innerHTML = fruits.toString();

//3. splice() törlésre is használható pop/shift helyett- splice(pozició, hányelem)
fruits.splice(0, 1); //Az első pozición lévő elem törlése
document.getElementById("spliceDel").innerHTML = fruits.toString();

//4. concat() - tömbök összefűzése
var girls = ["Éva", "Erika"];
var boys = ["Tamás", "Tibor", "Jenő"];
var children = girls.concat(boys);
document.getElementById("concatMerge").innerHTML = children.toString();

//5. Egyszerre 3 tömb összefűzése
var names1 = ["István", "Zoltán"];
var names2 = ["Ibolya", "Olga", "Piroska"];
var names3 = ["Béla", "Róbert"];
var namesConcat = names1.concat(names2,names3); //visszatérése mindig tömb
document.getElementById("concatMerge3Arr").innerHTML = namesConcat.toString();

//6. összefűzés értékekkel
var array1 = ["János", "Péter"];
var array2 = array1.concat(["Viola", "Léna", "Katalin"]); 
document.getElementById("concatMergeValues").innerHTML = array2.toString();

//7. Tömbök szétvágása, darabolása - 1 paraméterrel
var colors1 = ["Kék", "Piros", "Zöld", "Barna", "Fekete"];
var colors2 = colors1.slice(3); //3. indextől levágja és a colors2-be helyezi (eredeti tömb megmarad)
document.getElementById("sliceOneParameter").innerHTML = colors2.toString();

//8. Tömbök szétvágása, darabolása - 2 paraméterrel
var lastName = ["Kovács", "Szabó", "Lakatos", "Király", "Tóth"];
var lastNameNew = lastName.slice(1, 3); //kezdő index, és végindex (nem tartalmazza - exclusive)
document.getElementById("sliceTwoParameter").innerHTML = lastNameNew.toString();

//9. Tartalmazás vizsgálat - include()
var userNames = ["tesztElek", "gipszJakab"];
var searchUserName = "tesztElek2";
if (userNames.includes(searchUserName)){
    console.log("Van ilyen a felhasználónevek között...");
} else {
    console.log("Nincs ilyen a felhasználónevek között...");
}
