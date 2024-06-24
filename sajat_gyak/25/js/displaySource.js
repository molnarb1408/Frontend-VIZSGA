//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// OBJECT ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let taskObj = {
    0: {
        name: "Függvény, eljárás feladatok",
        description: "Függvények, eljárások segítségével oldjuk meg a következő feladatokat! <br> A függvények/eljárások meghívására használjuk a gombok onclick eseményét! <br> Az eredményt a HTML kimeneten, felugró ablakban vagy a console-on jelenítsük meg a feladatleírás szerint (ha nincs meghatározva, akkor tetszőleges). <br> A megjelenítéshez használjunk Bootstrap - et!",
        image: ""
    },
    1: {
        name: "1. Feladat",
        description: "Készítsünk függvényt, amelynek első bemenő paramétere egy egész szám, a termék ára, második paramétere az ÁFA értéke.<br> A függvény térjen vissza a termék bruttó árával!<br> Az eredményt a felugró ablakban jelenítsük meg!",
        image: ""
    },
    2: {
        name: "2. Feladat",
        description: "Készítsünk metódust, ami egy számról eldönti, hogy prím szám –e?<br> Eredményt a felugró ablakban jelenítsük meg!",
        image: ""
    },
    3: {
        name: "3. Feladat",
        description: "Készítsünk metódust, ami egy szövegről eldönti, hogy palindrome –e?<br> (Pld. Rád rohan a hordár.). Az eredményt a HTML kimeneten jelenítsük meg!<br>",
        image: ""
    },
    4: {
        name: "4. Feladat",
        description: "Készítsünk függvényt/eljárást, amelynek bemenő paramétere megadja, hogy milyen hosszú jelszót szeretnénk, és visszatér a generált jelszóval! <br> A jelszó kizárólag az angol ABC betűit és számokat tartalmazhatja, és a kis- és nagybetűk vegyesen szerepelnek véletlenszerűen!",
        image: ""
    },
    5: {
        name: "5. Feladat",
        description: "Két számról döntsük el, hogy osztói-e egymásnak maradék nélkül!",
        image: ""
    },
    6: {
        name: "6. Feladat",
        description: "Készítsünk ötöslottó alkalmazást, generáljunk le 5 darab lehetséges nyerőszámot!<br> Egy héten egy számot csak egyszer húzhatnak ki! Az eredményt a HTML kimeneten jelenítsük meg!",
        image: ""
    },
    7: {
        name: "7. Feladat",
        description: "Készítünk alkalmazást, amely egy teljes év lehetséges hatoslottó számait legenerálja!<br> Egy héten egy számot csak egyszer húzhatnak ki! Az eredményt a HTML kimeneten jelenítsük meg!",
        image: ""
    },
    8: {
        name: "8. Feladat",
        description: "Készítsünk alkalmazást, amely egy szövegről elárulja, a karakterek hány százaléka magánhangzó!<br> A speciális karaktereket ne vegyük figyelembe a számításkor!",
        image: ""
    },
    9: {
        name: "9. Feladat",
        description: "Pitagorasz tétel: kérjünk be a derékszögű háromszög 2 befogóját, majd írjuk ki az átfogó értékét!",
        image: ""
    },
    10: {
        name: "10. Feladat",
        description: "Programunk kérje be egy autó fogyasztását (literben 100 km-en), a benzin literenkénti árát és a megteendő út hosszát, majd számítsa ki az útiköltséget!",
        image: ""
    },
    11: {
        name: "11. Feladat",
        description: "Programunk kérje be az Euró árfolyamát (1 € hány Ft-ot ér), majd azt, hogy hány eurót akarunk átváltani Ft-ba, majd írja ki, hogy hány Ft az átváltott euró.",
        image: ""
    },
    12: {
        name: "12. Feladat",
        description: "Hozzunk létre alkalmazást, amely kiszámolja a kocka felszínét és térfogatát!",
        image: ""
    },
    13: {
        name: "13. Feladat",
        description: "Olvassuk be egy egyenes körkúp sugarát és magasságát, majd számoljuk ki belőle a térfogatát és a felszínét!",
        image: "img/13.png"
    },
    14: {
        name: "14. Feladat",
        description: "Készítsünk függvényt tombFeltolt() néven, amely feltölt véletlen számokkal egy tömböt a felhasználótól érkező és véletlenszerű bemenő paraméterekkel.<br> Az első paraméter legyen az elemszám (hány darab elem legyen a tömbben), amely véletlenül lesz generálva 5 és 20 között.<br> A második paraméter legyen a véletlen számok alsó határa, a harmadik pedig a felső határa, melyeket a felhasználó ad meg.<br> A függvény visszatérése egy tömb adatszerkezet legyen!",
        image: ""
    },
    15: {
        name: "15. Feladat",
        description: "Kérjük be a felhasználó tömegét kg-ban és magasságát cm-ben, majd számítsuk ki és írjuk a képernyőre a felhasználó testtömeg-indexét a következő képlet alapján:<br> Testtömeg-index = tömeg / (magasság^2), ahol a tömeg kg-ban, a magasság pedig méterben van megadva.",
        image: "img/15.png"
    },
    16: {
        name: "16. Feladat",
        description: "Olvassuk be, hogy a felhasználó átlagosan hány órát alszik naponta (egész számként), és jellemezzük az alvásidejét a következő módon:<br> 0-6 óráig kevés,<br> 7-9 óráig átlagos,<br> 10-12 óráig sok,<br> 13-24 óráig nagyon sok!",
        image: ""
    },
    17: {
        name: "17. Feladat",
        description: "Készítsünk egy másodfokú egyenlet megoldó alkalmazást!<br> Kérjük be a, b és c értékét, majd számoljuk ki x1-et és x2-t, ahol:<br> ax^2 + bx + c = 0.",
        image: "img/17.png"
    },
    18: {
        name: "18. Feladat",
        description: "Írjuk ki 3 db pénzfeldobás eredményét (fej vagy írás véletlenszerűen, szövegesen jelenjen meg)!",
        image: ""
    },
    19: {
        name: "19. Feladat",
        description: "Egy pénztáros a napi bevételének 5%-át megkapja jutalomként. Kérd be a napi bevételt, és írd a képernyőre, hogy mennyi a jutalom!<br> A jutalmat kerekítsd egész értékre!",
        image: ""
    },
    20: {
        name: "20. Feladat",
        description: "Kérjük be a felhasználó születési helyét, majd döntsük el, hogy vidéken vagy a fővárosban született!",
        image: ""
    }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// FÜGGVÉNYEK ///////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function displayTask(taskNumber) {
    let task = taskObj[taskNumber]; 
    document.getElementById("displayTaskName").innerHTML = task.name;
    document.getElementById("displayTask").innerHTML = task.description;
    let img = changeImg();
    img.src = task.image;
}

function changeImg() {
    let img = document.getElementById("image");
    img.src = "";
    return img;
}

function handleTaskButtonClick(event) {
    let taskNumber = parseInt(event.target.id.replace("buttonTask", ""));

    displayTask(taskNumber);
}

function setDefault() {
    document.getElementById("displayTaskSolution").innerHTML = "Feladatok helye!";
}

function attachButtonEventListeners() {
    for (let i = 0; i <= 20; i++) {
        let button = document.getElementById(`buttonTask${i}`);
        if (button) {
            button.addEventListener("click", handleTaskButtonClick);
        }
    }
}

document.addEventListener("DOMContentLoaded", attachButtonEventListeners);