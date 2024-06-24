//2. Feladat: Készítsünk alkalmazást, amely űrlap segítségével egy leltárszámról eldönti jó –e a formátuma! 
// A leltárszám első 4 karaktere tetszőleges angol nagybetű, utána kötőjel, majd 6 darab egész szám következik, 
// végül az aktuális dátum egyben!
// Helyes formátum → ABCD-123456-20230523

function isValidBarcodeFormat() {
    const barcode = document.getElementById('barcode').value;
    const regex = /^[A-Z]{4}-[0-9]{6}-[0-9]{8}$/;

    if (regex.test(barcode)) {
        alert('Megfelelő formátum!');
    } else {
        alert('NEM Megfelelő formátum!');
    }
}