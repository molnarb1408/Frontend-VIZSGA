function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
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
    var adatSor = table.insertRow(table.rows.length);
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
        FuggvenyVisszajelzoSor("PhÉrték teszt", 9, "lugos", PhErtek(9));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("PhÉrték teszt", 9, "lugos");
    }
}

function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("PhÉrték teszt", 7, "semleges", PhErtek(7));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("PhÉrték teszt", 7, "semleges");
    }
}

function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("PhÉrték teszt", 5.5, "savas", PhErtek(5.5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("PhÉrték teszt", 5.5, "savas");
    }
}

function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Prímek száma", [13, 7, 12, 15], 2, PrimekSzama([13, 7, 12, 15]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímek száma", [13, 7, 12, 15], 2);
    }
}

function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Prímek száma", [1, 5, 17, 29], 3, PrimekSzama([1, 5, 17, 29]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímek száma", [1, 5, 17, 29], 3);
    }
}

function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Prímek száma", [2, 3, 7, 11], 4, PrimekSzama([2, 3, 7, 11]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímek száma", [2, 3, 7, 11], 4);
    }
}

function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Prímek száma", [1, 2, 3, 14], 2, PrimekSzama([1, 2, 3, 14]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímek száma", [1, 2, 3, 14], 2);
    }
}

/*
MaganHangzokSzamaTeszt("Szeretem a programozást", 8);
        MaganHangzokSzamaTeszt("Géza kék az ég", 5);
        MaganHangzokSzamaTeszt("Répa, retek, mogyoró", 7);

*/
function Teszt08() {
    try {
        FuggvenyVisszajelzoSor("Magánhangzók száma", "Szeretem a programozást", 8, MaganHangzokSzama("Szeretem a programozást"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Magánhangzók száma", "Szeretem a programozást", 8);
    }
}


function Teszt09() {
    try {
        FuggvenyVisszajelzoSor("Magánhangzók száma", "Géza kék az ég", 5, MaganHangzokSzama("Géza kék az ég"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Magánhangzók száma", "Géza kék az ég", 5);
    }
}

function Teszt10() {
    try {
        FuggvenyVisszajelzoSor("Magánhangzók száma", "Répa, retek, mogyoró", 7, MaganHangzokSzama("Répa, retek, mogyoró"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Magánhangzók száma", "Répa, retek, mogyoró", 7);
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
    Teszt08();
    Teszt09();
    Teszt10();
}
TesztFuttato();