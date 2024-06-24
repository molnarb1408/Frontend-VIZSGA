function PhErtek(vizsgaltErtek: number): string {
    if (vizsgaltErtek < 7) {
        return "savas";
    } else if (vizsgaltErtek > 7) {
        return "lugos";
    } else {
        return "semleges";
    }
}

function PrimekSzama(vizsgaltTomb: number[]): number {
    let primekSzama = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (isPrime(vizsgaltTomb[i])) {
            primekSzama++;
        }
    }
    return primekSzama;
}

function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function MaganHangzokSzama(vizsgaltSzoveg: string): number {
    let maganHangzokSzama = 0;
    const maganHangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú", "ö", "ő", "ü", "ű"];
    for (let i = 0; i < vizsgaltSzoveg.length; i++) {
        if (maganHangzok.includes(vizsgaltSzoveg[i])) {
            maganHangzokSzama++;
        }
    }
    return maganHangzokSzama;
}