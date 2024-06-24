/*
JSON: JavaScript Object Notation.
JSON adatok tárolására és adatküldés leegyszerűsítésére használható.
JSON egyszerű szöveg, JavaScript object notation 
JSON könnyűsúlyú adattovábbítás
JSON önleíró, könnyű a megértée
JSON nyelvfüggetlen
JSON JavaScript szintaxixist követi, de egyszerű szöveg!
Legtöbb nyelvben létezik feldolgozó osztály, vagy metódus (parser), ami képes átalakítani.
Douglas Crockford hozta létre.
*/

/*
Szerver és kliens közötti adatküldést leegyszerűsíti, egységes adatszerkezet küldése.
Az adat csak egyszerű szöveg lehet!!! JSON csak egyszerű szöveg típus ezért konvertálnunk kell,
a JS objectunket JSON-ba és úgy küldjük el a szerver felé. A szervertől kapott választ pedig
vissza tudjuk alakítani JSON-ból JavaScript object-be. Ez egyszerű függvények hívásával történik:
JSON.stringify(myObj) -> stringgé alakítás
JSON.parse() -> stringből JS object létrehozása
Más nyelveknél (pld. PHP-> szintén létezik ilyen átalakítás json_encode(), json_decode())
*/

// Átalakítás 1 - Objektumból JSON létrehozása
let userObj = {"name": "John Doe", "age": 31}; 
let userJson = JSON.stringify(userObj); 
console.log("userObj: ");
console.log(userObj);
console.log("userJson: ");
console.log(userJson);

// Átalakítás 2 - JSON-ből JS object létrehozása
// fontos a szimpla aposztróf - string
let userJson2 = '{"name":"Jane Doe", "age":31}';
let userObj2 = JSON.parse(userJson2);
console.log("userObj2: ");
console.log(userObj2);
document.getElementById("demo").innerText = userObj2.name + ", életkor: "+userObj2.age;

// Adattárolásra is tökéletesen alkalmas a gyors átalakítás miatt
// .json kiterjesztésű fájlok -> programok beállítása is json composer, VSC stb.
// MIME type for JSON text is "application/json"
// JSON önleíró és hierarchikus, de XML-hez képest nincsenek lezárótagek
// gyorsabb, egyszerűbben olvasható, egyszerűbben parsolható

/*
Szabályok, különbségek JS object-hez képest:
    - Mindig kulcs érték párokban tárolodik az adat
    - Az adatokat vessző választja el egymástól
    - {} objecteket tartalmaz
    - [] tömböket
    - "" szükséges mindig a kulcsoknál, értékeknél (JS objectnél nem kötelező)
		{ "name":"John Doe" } --> JSON object
		{ name:"John Doe" } --> JS object
	- JS objectnél adattipus lehet function is!
*/

//Milyen tipusok vannak JSON esetében:
//string, number, object, array, boolean, null

//JSON nem lehet date, function, undefined
//JSON lehet viszont null

let personJson = '{"name":"John Doe","age":30, "isAdmin":true}';
let personObj = JSON.parse(personJson);
console.log(personObj.name + ", életkora: "+personObj.age+", admin: "+personObj.isAdmin);
console.log(personObj["age"]);

//tömbbe ágyazott objektumok
let carsObjArray = {
    "name": "John Doe",
    "age": 30,
    "cars": [
        {"name": "Ford", "models": ["Fiesta", "Focus", "Mustang"]}, 
        {"name": "BMW", "models": ["320", "X3", "X5"]},
        {"name": "Fiat", "models": ["500", "Panda"]},
    ]
};

//átalakítás JSON-be
let carsJSONArray = JSON.stringify(carsObjArray);
console.log(carsJSONArray);
console.log(carsObjArray);

var manufacturer, model, result = "";

//JSON Object bejárás
for (manufacturer in carsObjArray.cars) {
    result += "<h2>" + carsObjArray.cars[manufacturer].name + "</h2>";
    for (model in carsObjArray.cars[manufacturer].models) {
        result += carsObjArray.cars[manufacturer].models[model] + "<br>";
    }
}
document.getElementById("autoTulajNeve").innerHTML = carsObjArray.name;
document.getElementById("autok").innerHTML = result;

//google api
/*
van XML és json verzioja is, az API doksiban mindkettő bennevan
Calendar, map API GeoJson data -> szépen átalakíthatóak az adatok -> GoogleAPI leírás
{
  "markers": [
    {
      "name": "Rixos The Palm Dubai",
      "position": [25.1212, 55.1535],
    },
    {
      "name": "Shangri-La Hotel",
      "location": [25.2084, 55.2719]
    },
    {
      "name": "Grand Hyatt",
      "location": [25.2285, 55.3273]
    }
  ]
}
*/
/*
//Miért jobb a JSON az XML formátumnál?

- egyszerűbb a feldolgozás (parsolás)
- gyorsabb, mert az
	XML-nél 3 lépcsőben történik a feldolgozás: 
		1.	beolvassa az XML fájlt
		2.	végigmegy az XML DOM-on
		3.	lementi változókba az adatokat
	JSON estében, beolvassa a JSON stringet, parsolja
- képes tömböket kezelni
*/
