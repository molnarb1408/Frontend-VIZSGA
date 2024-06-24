var fileOperatations = require('fs');

exports.createTxt = function(){
    // Fájl létrehozása (törléshez)
    fileOperatations.open('torol.txt', 'w',function(err,file){
        if (err) throw err;
        console.log("06. Létrejött/hozzáfűzés történt - torol.txt");
    });
}

exports.deleteTxt = function(){
    //Fájl törlése - unlink()
    fileOperatations.unlink('torol.txt', function(err){
        if (err) throw err;
        console.log("07. Sikeres fájl törlés - torol.txt");
    });
}



