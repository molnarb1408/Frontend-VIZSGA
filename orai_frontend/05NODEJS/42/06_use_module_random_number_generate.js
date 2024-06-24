var fileOperatations = require('fs');

var randomNumberGenerateModule = require('./06_random_number_generate_module');

fileOperatations.writeFile('vel_szamok.txt', randomNumberGenerateModule.genarateRandomNumbers() + "", function(err){
    if (err) throw err;
    console.log('vel_szamok.txt létrejött random számokkal :)');
});