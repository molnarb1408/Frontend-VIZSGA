"use strict";
// Abstract class: nem hozunk létre belőle objektum példányt, 
// magasszintű elvonatkoztatás. Belső konkrét mukodése nincsen, a leszármazott
// osztályok implementálják majd azt.
// Ha van egy abstract tagja az osztálynak, akkor kötelező abstract a class szó előtt
class Page {
    constructor(headerText, backgroundImage, font) {
        this.headerText = headerText;
        this.backgroundImage = backgroundImage;
        this.font = font;
    }
    displayHeader() {
        console.log(`Header ${this.headerText}`);
    }
    setBackground() {
        console.log(`Setting background image to ${this.backgroundImage}`);
    }
    setFont() {
        console.log(`Setting font ${this.font}`);
    }
}
class HomePage extends Page {
    constructor(headerText, backgroundImage, font, pageTitle) {
        super(headerText, backgroundImage, font); // super: az ősnek (Page) konstruktorára hivatkozik
        this.pageTitle = pageTitle;
    }
    // Kötelező rész, mert az ősben a Page-ben, vagy ilyen nevu (title) tag
    // Az absztakt osztály kötelező teszi, hogy legyen egy ilyen title, amig nincsen
    //szintaktikai hiba (hasonló, mint az interface-eknél)
    get title() {
        return this.pageTitle;
    }
    display() {
        console.log(`Display Home Page`);
        this.displayHeader();
        this.setBackground();
        this.setFont();
        console.log(`Title: ${this.pageTitle}`);
    }
}
//absztrakt osztályból nem tudunk objektumpéldányt létrehozni
//let pageObj = new Page("headerSzöveg","hatterkep.png","Arial");
let homePageObj = new HomePage("Welcome to my site", "bg-home.png", "Arial", "Home");
homePageObj.display();
