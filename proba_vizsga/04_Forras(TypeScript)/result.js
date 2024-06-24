function PhErtek(vizsgaltErtek) {
    if (vizsgaltErtek < 7) {
        return "savas";
    }
    else if (vizsgaltErtek > 7) {
        return "lugos";
    }
    else {
        return "semleges";
    }
}
function PrimekSzama(vizsgaltTomb) {
    var primekSzama = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (isPrime(vizsgaltTomb[i])) {
            primekSzama++;
        }
    }
    return primekSzama;
}
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function MaganHangzokSzama(vizsgaltSzoveg) {
    var maganHangzokSzama = 0;
    var maganHangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú", "ö", "ő", "ü", "ű"];
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        if (maganHangzok.includes(vizsgaltSzoveg[i])) {
            maganHangzokSzama++;
        }
    }
    return maganHangzokSzama;
}
