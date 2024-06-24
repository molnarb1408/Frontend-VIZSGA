
// NEM tesztelhető könnyen - unittest-et, egységtesztet erre nehezen lehet készíteni
function szamol(){
    
    //1. lépés: eseménykezelés ellenőrzése
    //alert("Számol");
    //console.log("számol gombra kattintottunk...");

    //2. lépés: adatok begyűjtése az űrlapról
    let rendSzam = document.getElementById("rendSzam").value;
    let fogyasztas = Number(document.getElementById("fogyasztas").value);
    let uzemAnyagTipusok = document.getElementById("uzemanyagTipus");
    //console.log(uzemAnyagTipusok);
    let i = uzemAnyagTipusok.selectedIndex; 
    //console.log("Kiválasztott üzemanyag indexe: "+i);
    let uzemAnyagTipusKivalasztott = uzemAnyagTipusok.options[i].text;
    //let uzemAnyagTipusKivalasztottValue = uzemAnyagTipusok.options[i].value;
    // console.log(uzemAnyagTipusKivalasztott);
    let szallithatoSzemelyekSzama = Number(document.getElementById("szallithatoSzemelyekSzama").value);
    let motorTerfogat = Number(document.getElementById("motorTerfogat").value);
    let gyartasiEv = Number(document.getElementById("gyartasiEv").value);
    let hosszKm = Number(document.getElementById("hosszKm").value);
    let uzemAnyagAr = Number(document.getElementById("uzemAnyagAr").value);

    let adat = "A megadott adatok: \n Rendszám: "+rendSzam +"\n Fogyasztás: "+fogyasztas + "\n Üzemanyagtípus: "+uzemAnyagTipusKivalasztott + "\n Szállítható személyek száma:"+szallithatoSzemelyekSzama +"\n Motortérfogat: "+motorTerfogat +"\n Gyártási év: "+gyartasiEv + "\n Útvonal hossza: "+hosszKm + "\n Üzemanyagár: "+uzemAnyagAr + "Ft";
    alert(adat);

    let eredmeny = "";
    let osztalyNev = "";
    let eredmenyObj = document.getElementById("eredmeny");

    if (rendSzam !="" && fogyasztas !="" && gyartasiEv!="" && hosszKm!="" && uzemAnyagAr!=""){
        eredmeny = "Költség: "+((fogyasztas/100)*hosszKm)*uzemAnyagAr + " Ft";
        osztalyNev = "alert-success";
    } else if (isNaN(fogyasztas) || isNaN(gyartasiEv) || isNaN(hosszKm) || isNaN(uzemAnyagAr)){
        eredmeny = "Hibás adat!!!";
        osztalyNev = "alert-danger";
    } else {
        eredmeny = "Hiányzó adat!!!";
        osztalyNev = "alert-danger";
    }
    eredmenyObj.innerHTML = eredmeny;
    eredmenyObj.classList.remove("alert-danger");
    eredmenyObj.classList.remove("alert-success");
    eredmenyObj.classList.add(osztalyNev);

    // var formElemek = document.forms["utikoltsegForm"];
    // console.log(formElemek);
    // console.log(formElemek.elements[0]);
}