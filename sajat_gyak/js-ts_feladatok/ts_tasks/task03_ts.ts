// 3. Feladat: Készítünk függvényt, amely kiszámolja a másodfokú egyenlet megoldását a,b,c együttható alapján!

function solveQuadratic(): void {
    const a = Number(prompt("Adja meg az 'A' értéket!"));
    const b = Number(prompt("Adja meg a 'B' értéket!"));
    const c = Number(prompt("Adja meg a 'C' értéket!"));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Nem megfelelő értékeket adott meg!");
        return;
    }

    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        alert("Nincs olyan megoldás, amelyik valós szám!");
        return;
    }

    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    if (x1 === x2) {
        alert(`Egyetlen megoldás van: ${x1}`);
    } else {
        alert(`Két megoldás van: ${x1} és ${x2}`);
    }
}