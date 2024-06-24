// 3. Feladat: Kérjünk be két dátumot egy űrlap segítségével, majd írjuk ki a két dátum közötti időkülönbséget év-hónap-nap formátumban!



function checkTheDifferenceBetweenTheTwoInputDates() {
    let date1 = new Date(document.getElementById("dateOne").value);
    let date2 = new Date(document.getElementById("dateTwo").value);
    let difference = Math.abs(date1 - date2);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));


    alert(`Napok különbsége: ${days}`);
}