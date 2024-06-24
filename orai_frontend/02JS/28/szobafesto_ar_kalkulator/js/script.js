// 1. HTML elkészítése űrlappal
// 2. Eseménykezelés (gombra kattintás)
// 3. Adatok begyűjtése
// 4. Számítás (hibakezeléssel)
// 5. Lépés eredmény megjelenítése
// (6. Finomítás - hibakezelés javítása)

function szamol() {
    //console.log("Számol gombra kattintottál...");
    let hibaLeirast = "";
    let hiba = false;

    let szobaNm = Number(document.getElementById("szobaNm").value);
    //console.log(szobaNm);
    if (szobaNm == "" || isNaN(szobaNm) || szobaNm <= 0) {
        hibaLeirast += "A szoba méretét hibásan adta meg :( \n";
        hiba = true;
    }

    let festesTipusKivalasztott = Number(document.getElementById("festesTipus").value);
    const arSimaFal = 3500;
    const arKevesGelett = 4000;
    const arTeljesJavitas = 4500;
    let arKategoria;
    let fizetendoAr;

    //ellenőrzés festes tipusa
    console.log("Festes tipus értéke: " + festesTipusKivalasztott + ", tipusa: " + typeof (festesTipusKivalasztott));

    switch (festesTipusKivalasztott) {
        case 0: hibaLeirast += "Festés típusát kötelező megadni!!!";
            hiba = true;
            break;
        case 1: arKategoria = arSimaFal;
            break;
        case 2: arKategoria = arKevesGelett;
            break;
        case 3: arKategoria = arTeljesJavitas;
            break;
        default: hibaLeirast += "Hibás adatot adott meg!!!"; 
            hiba = false;
            break;
    }

    let regiUgyfel = document.getElementById("regiUgyfel").checked;
    let surgosMunka = document.getElementById("surgosMunka").checked; 

    let osztalyNev = "";
    let eredmenyObj = document.getElementById("eredmeny");
    eredmenyObj.classList.remove("alert-danger");
    eredmenyObj.classList.remove("alert-success");

    if (!hiba){
        fizetendoAr = szobaNm * arKategoria;
        if (regiUgyfel){
            fizetendoAr *=0.9; //ua. fizetendoAr = fizetendoAr * 0.9
        }
        if (surgosMunka){
            fizetendoAr *=1.2;
        }
        //console.log("Fizetendő ár: "+fizetendoAr);
        osztalyNev = "alert-success";
        eredmenyObj.textContent = "Fizetendő: "+fizetendoAr + " Ft";
    } else {
        osztalyNev = "alert-danger";
        //console.log(hibaLeirast);
        eredmenyObj.textContent = hibaLeirast;
    }
    eredmenyObj.classList.add(osztalyNev);
}

// HF: refaktorálás: 1. magyarról-angolra, fv-et szétdarabolása (tesztelhetőség miatt, CC miatt)
