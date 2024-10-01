//Európai unió csatlakozói feladat tesztje

//Vizsgált objektum:
const europaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
];


function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    //Teszt paraméterek megadása és megjelenítése
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`
    if (elvartEredmeny == fuggvenyhivas) {
        visszajelzesMezo.innerHTML = `Success`;
    }
    else {
        visszajelzesMezo.innerHTML = `Fail`;
    }
}

//Hibás referencia érték esetén lefutó függvény
function HibasFuggvenyFuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
}

function Teszt01() {
    try {
        FuggvenyVisszajelzoSor("EU csatlakozás", "Objektum", 10, Csatlakozott2004(europaiUnio));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("EU csatlakozás", "Objektum", 10);
    }
}


function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Víz halmazállapot", -20, "szilard", VizHalmazallapot(-20));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Víz halmazállapot", -20, "szilard");
    }
}
function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Víz halmazállapot", 42, "folyekony", VizHalmazallapot(42));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Víz halmazállapot", 42, "folyekony");
    }
}
function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Víz halmazállapot", 120, "legnemu", VizHalmazallapot(120));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Víz halmazállapot", 120, "legnemu");
    }
}


function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Téglalap kerület", "3 és 5", 16, TeglalapKerulet(3, 5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Téglalap kerület", "3 és 5", 16);
    }
}
function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Téglalap kerület", "10 és 12", 44, TeglalapKerulet(10, 12));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Téglalap kerület", "10 és 12", 44);
    }
}
function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Téglalap kerület", "2 és 5", 14, TeglalapKerulet(2, 5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Téglalap kerület", "2 és 5", 14);
    }
}
function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt04();
    Teszt05();
    Teszt06();
    Teszt07();
}
TesztFuttato();