//Feladat: Hozzunk létre 10 db véletlen számot 1-100 között, majd írjuk ki egy fájlba!
// 1. Megoldás - modul használat nélkül

var fileOperatations = require('fs');

function genarateRandomNumbers(){
    let numbers = [];
    let randomNumber;
    for (let i = 0; i < 1000; i++) {
        randomNumber = Math.floor((Math.random() *100)+1);
        numbers.push(randomNumber);
    }
    return numbers;
}

fileOperatations.writeFile('vel_szamok.txt', genarateRandomNumbers() + "", function(err){
    if (err) throw err;
    console.log('vel_szamok.txt létrejött random számokkal :)');
});