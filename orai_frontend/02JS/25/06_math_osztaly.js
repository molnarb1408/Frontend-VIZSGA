console.log(Math.PI); //3.141592653589793
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); //  4
console.log(Math.pow(8, 2)); // 64
console.log(Math.sqrt(64)); //8
console.log(Math.abs(-4.7));// 4.7
console.log(Math.ceil(4.4)); // 5 -> felfelé kerekít(egészre)
console.log(Math.floor(4.7));// 4 -> lefelé kerekít(egészre)
console.log(Math.sin(90 * Math.PI / 180));  //1
console.log(Math.cos(0 * Math.PI / 180)); //1
console.log(Math.min(0, 150, 30, 20, -8, -200));  // -200
console.log(Math.max(0, 150, 30, 20, -8, -200));  // 150
console.log("Math.random(): "+Math.random()); //véletlen szám
console.log(Math.floor(Math.random() * 10)); //véletlen szám:  0-9 között
console.log(Math.floor(Math.random() * 100)); //véletlen szám:  0-99 között
console.log(Math.floor(Math.random() * 100) + 1); // véletlen szám: 1-100 között
//általános képlet véletlen szám generálásra
//Math.random() * (max - min) + min;

var min = 0;
var max = 10;
console.log(Math.floor(Math.random() * (max - min) + min));

var array = [14, 254, 3];
console.log(Math.max.apply(null, array));

//let mathObj = new Math(); //nincs ilyen szinaktszis //static