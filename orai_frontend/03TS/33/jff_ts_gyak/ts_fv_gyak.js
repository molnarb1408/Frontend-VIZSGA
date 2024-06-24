"use strict";
//console.log("Hello, TS!");
// Regexes megoldás - speciális karaktereknél is jól működik
//vizsgaltSzoveg.match(/[bcdfghjklmnpqrstvwxyz]/gi).length
//"bcdfghjklmnpqrstvwyz".split("")
// vizsgaltSzoveg[i] - ez is jó
function massalHangzokSzamaMegallapit(vizsgaltSzoveg) {
    let db = 0;
    const maganHangzok = ["e", "u", "i", "o", "a"];
    for (let i = 0; i < vizsgaltSzoveg.length; i++) {
        if (maganHangzok.indexOf(vizsgaltSzoveg.charAt(i).toLocaleLowerCase()) == -1) {
            db++;
        }
    }
    return db;
}
function szovegBeker() {
    let szoveg = prompt("Adjon meg egy szöveget: ");
    return szoveg;
}
// ! Non-null assertion operator 
// ? optional operator
function feladat01Megjelenit() {
    document.getElementById("feladat01").textContent =
        "Mássalhangzók darabszáma:" + massalHangzokSzamaMegallapit(szovegBeker());
}
function primSzamVizsgal(szam) {
    for (let i = 2; i < szam; i++) {
        if (szam % i == 0)
            return false;
    }
    return szam > 1;
}
function szamBeker() {
    let szam = Number(prompt("Kérem adjon meg egy számot (prímvizsgálat): "));
    return szam;
}
function feladat02Megjelenit() {
    let szam = szamBeker();
    let primE = false;
    let valasz;
    if (!isNaN(szam)) {
        primE = primSzamVizsgal(szam);
        if (primE) {
            valasz = "prímszám";
        }
        else {
            valasz = "nem prímszám";
        }
    }
    else {
        valasz = "hibás adatmegadás :(";
    }
    document.getElementById("feladat02").textContent = "Prímszám -e: " + valasz;
}
function tombParosParatlanVizsgal(tomb, szam) {
    let db = 0;
    if (szam === 1) {
        tomb.forEach(elem => {
            if (elem % 2 == 0) {
                db++;
            }
        });
    }
    else if (szam === 2) {
        tomb.forEach(elem => {
            if (elem % 2 == 1) {
                db++;
            }
        });
    }
    return db;
}
function feladat03Megjelenit() {
    let tomb = [44, 6, 7, 33, 8];
    let db = tombParosParatlanVizsgal(tomb, 1);
    // document.getElementById("feladat03")!.textContent = db; //szintaktikai hiba tipus miatt
    document.getElementById("feladat03").textContent = "Darabszám (páros/páratlan):" + db;
}
function ermeFeldobasGeneral(dobasokSzama) {
    let tomb = [];
    for (let i = 0; i < dobasokSzama; i++) {
        tomb.push(Math.floor(Math.random() * 2) + 1); //1 vagy 2
    }
    let tombStr = [];
    // ellőnőrzés: van -e adat a tömbben?
    //console.log(tomb);
    tomb.forEach(elem => {
        if (elem == 1) {
            tombStr.push("fej");
        }
        else {
            tombStr.push("írás");
        }
    });
    return tombStr;
}
function feladat04Megjelenit() {
    document.getElementById("feladat04").textContent = "" + ermeFeldobasGeneral(10);
}
function emailBeker() {
    let szoveg = prompt("Adjon meg egy emailcímet: ");
    return szoveg;
}
function emailCimGoogleEldont(email) {
    let pattern = /^[a-zA-Z0-9._]+\@gmail\.com$/;
    return pattern.test(email);
}
function feladat05Megjelenit() {
    let email = emailBeker();
    let valasz = "Nem gmail-es az email, lehet nem is emailcím :(";
    if (emailCimGoogleEldont(email)) {
        valasz = "A megadott email gmail-es :)";
    }
    document.getElementById("feladat05").textContent = valasz;
}
function hetnapjaKiir() {
    let maiNap = new Date().toLocaleDateString('hu-HU', { weekday: 'long' });
    document.getElementById("feladat06").textContent = maiNap;
}
