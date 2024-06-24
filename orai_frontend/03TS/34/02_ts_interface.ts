// Interface: nagyon hasonló, mint az Abstract osztály
// Nem példányosítható (nincs konstruktora), leírja az adott tipus jellemzőit. 
// Interface: protokoll, szabályrendszer, előírás, amit kötelezően követni
// kell annak az osztálynak, ami implementálja az adott interface-t.
// best practise - interface-ek használata javasolt (osztályok helyett)
// Különbség Abstract osztály és Interface között TS-ben?
// Öröklődési hierarchiának része az Abstract osztály, az interface teljesen kivül áll.
// Ez egy rugalmasságot ad, ami miatt elterjed az iparban. 
// Osztályos öröklődésnél, kell hogy legyen valamilyen kohézió: pld. jármű - szgj
// szgj - sportkocsi, szgj - családi egyterű
// interface-nél nincs ilyen kötöttségs

interface IAnimal {
    name: string;
    age: number;
    sound: string;
    // metódus, nincs bemenő paramétere és nincs nincs visszatérése, NEM LEHET belső működése
    makeSound:() => void;
    displayDetails():void;
}

interface IPet {
    address?:string;
}

interface IContact {
    phoneNumber?:string;
}

// többszörös öröklödést szimulálja (multiple inheritence)
class Dog implements IAnimal, IPet, IContact {
    name: string;
    age: number;
    sound: string;
    address?: string;
    phoneNumber?: string;

    constructor(name: string, age: number, address?: string, phoneNumber?: string){
        this.name = name;
        this.age = age;
        this.sound = "ugatás"; //alapérték beállítás
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    makeSound():void{
        console.log(`Hangkiadás: ${this.sound}`);
    }

    displayDetails(): void {
        let result = `Név: ${this.name}, kor: ${this.age}, hangkiadás ${this.sound}`;
        if (this.address != undefined){
            result += `, lakhely: ${this.address}`;
        }
        if (this.phoneNumber != undefined){
            result += `, telefonszám: ${this.phoneNumber}`;
        }
        console.log(result);
    }
}

let dogObj1 = new Dog("Rex",3);
dogObj1.displayDetails();
console.log(dogObj1.address); //undefined

// polimorfizmus - többalakúság
// az objektumok különféleképpen jöhetnek létre
let dogObj2 = new Dog("Morzsi", 4, "1111 Budapest Fő u.1");
dogObj2.displayDetails();

let dogObj3= new Dog("Bodri", 2, undefined, "555-5555");
dogObj3.displayDetails();
