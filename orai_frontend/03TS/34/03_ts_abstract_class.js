"use strict";
class Vehicle {
}
class Car extends Vehicle {
    constructor(name) {
        super(); //ős konstruktorára utal(ha nincs definiálva konstruktor, akkor egy alapértelmezett lesz) 
        this.name = name;
        this.maxSpeed = 300;
    }
    start() {
        console.log(`${this.name} autó elindul`);
    }
    stop() {
        console.log(`${this.name} autó leáll`);
    }
}
class Bicyle extends Vehicle {
    constructor(name) {
        super();
        this.name = name;
        this.maxSpeed = 100;
    }
    start() {
        console.log(`${this.name} kerékpár elindul`);
    }
    stop() {
        console.log(`${this.name} kerékpár leáll`);
    }
}
class Truck extends Vehicle {
    constructor(name) {
        super();
        this.name = name;
        this.maxSpeed = 120;
    }
    start() {
        console.log(`${this.name} tehergépjármű elindul`);
    }
    stop() {
        console.log(`${this.name} tehergépjármű leáll`);
    }
}
let vehicles = [
    new Car("Személyautó - Honda Civic"),
    new Bicyle("Kerékpár - KTM"),
    new Truck("Tehergépjármű - MAN"),
];
for (let vehicle of vehicles) {
    vehicle.start();
    vehicle.stop();
}
//let vehicleObj01 = new Vehicle(); // nem lehet abstract osztályból példányosítani
//let carObj1 = new Car("tesztAuto", 250); //csak 1 paramétere lehet, a neve, seb. 300
//console.log(carObj1);
