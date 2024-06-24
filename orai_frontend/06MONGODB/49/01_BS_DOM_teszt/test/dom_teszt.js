//1. Teszt: van -e bootstrap-es táblázat az oldalon?
function testIsTableExist(){
    const table = document.querySelector('.table');
    if (table){
        console.log("1. Teszt: A táblázat ellenőrzése (table osztály): SIKER (SUCCESS)");
    } else {
        console.log("1. Teszt: A táblázat ellenőrzése (table osztály): ELTÖRT (FAIL)");
    }
}

//2. Teszt: Táblázat fejléc sorának ellenőrzése (van -e thead és tr (ez van a body-ban is))
// Angular: Hydration: szigorúan ellenőrzi a html szerkezetének szabályosságát
function testTableHeadRow(){
    const tableHeadRow = document.querySelectorAll('thead tr');
    
    if (tableHeadRow.length === 1){
        console.log("2. Teszt: A táblázat ellenőrzése (van -e fejléc): SIKER (SUCCESS)");
    } else {
        console.log("2. Teszt: A táblázat ellenőrzése (van -e fejléc): ELTÖRT (FAIL)");
    }
}

//3. Teszt: Adatsorok ellenőrzése: van -e legalább 1 sora a táblázatnak?
function testTableBodyRows(){
    const tableBodyRow = document.querySelectorAll('tbody tr');
    
    if (tableBodyRow.length > 0){
        console.log("3. Teszt: A táblázat ellenőrzése (van -e legalább 1 sor): SIKER (SUCCESS)");
    } else {
        console.log("3. Teszt: A táblázat ellenőrzése (van -e legalább 1 sor): ELTÖRT (FAIL)");
    }
}

//4. Teszt: Van -e egyátalán td a táblázatban?
function testAnyTableCellExsist(){
    const tableCells = document.querySelectorAll('td');
    
    if (tableCells.length > 0){
        console.log("4. Teszt: A táblázat ellenőrzése (van -e legalább 1 cellája): SIKER (SUCCESS)");
    } else {
        console.log("4. Teszt: A táblázat ellenőrzése (van -e legalább 1 cellája): ELTÖRT (FAIL)");
    }
}

//Feladatok: 
//5. Teszt: A táblázat fejléce tartalmaz -e 3 oszlopot?
function testTableContainsThreeHeadings() {
    const tableHeadings = document.querySelectorAll('th');

    if (tableHeadings.length === 3) {
        console.log("5. Teszt: A táblázat ellenőrzése (3 fejléc oszlopa van -e): SIKER (SUCCESS)");
    } else {
        console.log("5. Teszt: A táblázat ellenőrzése (3 fejléc oszlopa van -e): ELTÖRIK (FAIL)");
    }
}

//6. Teszt: A táblázat betűmérete 14px-e?
function testTableFontSize() {
    const table = document.querySelector('.table');
    const actual = window.getComputedStyle(table).getPropertyValue('font-size');
    // aktuálsis mérete - actual
    // expected - elvárt mérete
    const expected = '14px';
    if (actual === expected) {
        console.log("6. Teszt: A táblázat ellenőrzése (betűméret 14px-e): SIKER (SUCCESS)");
    } else {
        console.log("6. Teszt: A táblázat ellenőrzése (betűméret 14px-e): ELTÖRIK (FAIL)");
    }
}

//7. Teszt: A táblázat külső margója 10px-e?
function testTableMargin() {
    const table = document.querySelector('.table');
    const actual = window.getComputedStyle(table).getPropertyValue('margin');
    const expected = '10px';
    if (actual === expected) {
        console.log("7. Teszt: A táblázat ellenőrzése (margin 10px -e): SIKER (SUCCESS)");
    } else {
        console.log("7. Teszt: A táblázat ellenőrzése (margin 10px -e): ELTÖRIK (FAIL)");
    }
}

//8. Teszt: A táblázatban lévő szöveg középre van -e igazítva?
function testTableTextIsAlignedCenter() {
    const table = document.querySelector('.table');
    const actual = window.getComputedStyle(table).getPropertyValue('text-align');
    const expected = 'center';
    if (actual === expected) {
        console.log("8. Teszt: A táblázat ellenőrzése (szöveg középre igazítás): SIKER (SUCCESS)");
    } else {
        console.log("8. Teszt: A táblázat ellenőrzése (szöveg középre igazítás): ELTÖRIK (FAIL)");
    }
}

//9. Teszt: Ellenőrizzük le, hogy a CustomHeading osztály alsó-külső margója 20px-e?
function testCustomHeadinMarginBottom() {
    const table = document.querySelector('.custom-heading');
    const actual = window.getComputedStyle(table).getPropertyValue('margin-bottom');
    const expected = '20px';
    if (actual === expected) {
        console.log("9. Teszt: A CustomHeading ellenőrzése (alsó-külső margó 20px): SIKER (SUCCESS)");
    } else {
        console.log("9. Teszt: A CustomHeading ellenőrzése (alsó-külső margó 20px): ELTÖRIK (FAIL)");
    }
}

//10. Teszt: Ellenőrizzük, hogy a container osztállyal rendelkező div 2. eleme bekezdés (az első h1-es)
function testParagraphAfterHeading() {
    const container = document.querySelector('.container');
    //console.log(container.innerHTML);
    const secondChild = container.children[1]; // bekezdésnek kell benne lennie
    //const firstChild = container.children[0]; //h1-esnek kell benne lennie

    if (secondChild.tagName === 'P' && secondChild.previousElementSibling.tagName === 'H1') {
        console.log("10. Teszt: A container-en belüli 2. elem bekezdés: SIKER (SUCCESS)");
    } else {
        console.log("10. Teszt: A container-en belüli 2. elem bekezdés: ELTÖRIK (FAIL)");
    }
}


document.addEventListener('DOMContentLoaded', function() {
    testIsTableExist();
    testTableHeadRow();
    testTableBodyRows();
    testAnyTableCellExsist();
    testTableContainsThreeHeadings();
    testTableFontSize();
    testTableMargin();
    testTableTextIsAlignedCenter();
    testCustomHeadinMarginBottom();
    testParagraphAfterHeading();
});