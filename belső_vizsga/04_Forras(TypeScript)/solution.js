function EkezetesBetukSzama(vizsgaltSzoveg) {
    var ekezetesBetukSzama = 0;
    var ekezetesBetuk = ["á", "é", "í", "ó", "ö", "ő", "ú", "ü", "ű", "Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű"];
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        for (var j = 0; j < ekezetesBetuk.length; j++) {
            if (vizsgaltSzoveg[i] == ekezetesBetuk[j]) {
                ekezetesBetukSzama++;
            }
        }
    }
    return ekezetesBetukSzama;
}
function ElsoNszamSzorzat(mennyiseg) {
    var szorzat = 1;
    for (var i = 1; i <= mennyiseg; i++) {
        szorzat *= i;
    }
    return szorzat;
}
function ParosakOsszege(vizsgaltTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 == 0) {
            osszeg += vizsgaltTomb[i];
        }
    }
    return osszeg;
}
