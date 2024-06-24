function ageCheck(){
    //alert('Ellenőrzés gombra kattintottunk');

    //Milyen lépésekben jutunk el a megoldásig?
    // Feladat: Életkor alapján határozzuk meg, hogy felnőtt -e (18-tól felnőtt)
    // Piros betűszínnel jelenítsük meg ha gyermek, zölddel ha felnőtt!

    // 1. lépés: Adatbegyűjtés (változó létrehozása és értékadása)
    // age input mezőből kell begyűjteni
    
    // 2. lépés: age változó felhasználásával vizsgálat - if
    // 3. lépés: eredmény megjelenítése

    /*************** 1. lépés: Adatbegyűjtés (változó létrehozása és értékadása) *************/
    // let age = document.getElementById("age"); // teljes object, teljes input
    // console.log(age);

    // let age = document.getElementById("age").value;
    // console.log("age változó értéke: " + age + ", tipusa: " + typeof(age)); //string a tipusa

    let age = Number(document.getElementById("age").value);
    //console.log("age változó értéke: " + age + ", tipusa: " + typeof(age)); //number a tipusa

    /*************** 2. lépés: age változó felhasználásával vizsgálat - if *************/

    //1. megoldás : 2 és 3 lépés egyben szerepel eldöntjük és ki is írjuk az eredményt
    // nem CC
    // if (age>=18){
    //     console.log("Felnőtt");
    //     document.getElementById("result").innerHTML = age + " éves, felnőtt.";
    //     document.getElementById("result").style.color = "green";
    // } else {
    //     console.log("Gyermek");
    //     document.getElementById("result").innerHTML = age + " éves, gyermek.";
    //     document.getElementById("result").style.color = "red";
    // }

    // 2. megoldás: 2 és 3 lépést elkülönítjük: jobb megoldás: DOM manipuláció 1X történik
    // Ha módosul a result bekezdés id-ja, akkor itt csak 1 helyen kell módosítani
    let message;
    let fontColor;
    if (age>=18){
        message = age + " éves, felnőtt.";
        fontColor = "green";
    } else {
        message = age + " éves, gyermek.";
        fontColor = "red";
    }
    document.getElementById("result").innerHTML = message; 
    document.getElementById("result").style.color = fontColor;
}

// 1 eljárásból 5 fv/eljárás lett CC szerint
// Bonyolultabbnak tűnik, de szebb megoldás, jobban tesztelhető
function ageCheckCC(){
    let age = getAgeFromForm();
    document.getElementById("result").innerHTML = getMessage(age); 
    document.getElementById("result").style.color = getFontColor(age);
}

function getMessage(age){
    let message;
    if (isAdult(age)){
        message = age + " éves, felnőtt.";
    } else {
        message = age + " éves, gyermek.";
    }
    return message;
}

function getFontColor(age){
    let fontColor = "red";
    if (isAdult(age)){
        fontColor = "green";
    }
    return fontColor;
}

function isAdult(age){
    let isAdult = false;
    if (age>=18){
        isAdult = true;
    }
    return isAdult;
}

function getAgeFromForm(){
    let age = Number(document.getElementById("age").value);
    return age;
}

// Test fv -egység teszt - unit teszt - automata teszt
// Tesztekkel a kód minősége jobb lesz.
// function testIsAdult(){
//     let actual = isAdult(18); //true
//     let expected = true;
//     assert.equal(actual, expected); // success
// }
// Ha eltörik a teszt - fail

// Vizsgafeladat megfogalmazása: Készíts eljárást Ellenoriz() néven, ami megvizsgálja, hogy felnőtt 
// vagy gyermek!
