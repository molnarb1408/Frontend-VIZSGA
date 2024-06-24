var fileOperatations = require('fs');

var fileModules = require('./03_file_modules');

// Megjegyzés: JS-ben a fájlkezelés LocalStorage segítségével valósul meg

// Fájlhozzáfűzés - ha nincs ilyen állomány, akkor létrehozza
fileOperatations.appendFile('ujFajl.txt','nodeJS teszt\n', function(err){
    if (err) throw err;
    console.log("01. Létrejött/Hozzáfűzés történt - ujFajl.txt");
});

// Fájl megnyitása - w kapcsoló (write) - A w kapcsoló miatt, ha nincs ilyen fájl létrehozza
fileOperatations.open('uresFajl.txt', 'w',function(err,file){
    if (err) throw err;
    console.log("02. Üres fájl létrehozása uresFajl.txt néven - open() metódussal w flaggel...");
});

//Mégegy hozzáfűzés - üres fájlnak adunk tartalmat
fileOperatations.appendFile('uresFajl.txt','nodeJS is the best\n', function(err){
    if (err) throw err;
    console.log("03. uresFajl.txt-het adunk hozzá tartalmat...");
});

// Fájl tartalmának felülírása (elveszik a benne lévő tartalom)
fileOperatations.writeFile("ujFajl.txt",'Új szöveges tartalom :) \n', function(err){
    if (err) throw err;
    console.log("04. uresFajl.txt szöveges tartalma kicserélve :) ");
});

// Fájl átnevezés - rename(mit, mire, function)
fileOperatations.rename("ujFajl.txt",'atnevezett.txt', function(err){
    if (err) throw err;
    console.log("05. Sikeres átnevezés (uresFajl.txt-ből atnevezett.txt lett)");
});

// Párhuzamos feldolgozás
// Non blocking I/O (fájlműveltek)
// https://dev.to/alemagio/node-parallel-execution-2h8p
// Event loop mukodese:
// https://www.nextgenerationautomation.com/post/understand-node-js-single-thread-event-loop-work-flow
// https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick
// https://www.geeksforgeeks.org/sequential-functionality-in-node-js/

fileModules.createTxt();
fileModules.deleteTxt();
