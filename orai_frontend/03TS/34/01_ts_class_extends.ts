// Abstract class: nem hozunk létre belőle objektum példányt, 
// magasszintű elvonatkoztatás. Belső konkrét mukodése nincsen, a leszármazott
// osztályok implementálják majd azt.
// Ha van egy abstract tagja az osztálynak, akkor kötelező abstract a class szó előtt
abstract class Page {
    protected readonly headerText:string;
    protected readonly backgroundImage:string;
    protected readonly font:string;

    constructor(headerText:string, backgroundImage:string, font:string){
        this.headerText = headerText;
        this.backgroundImage = backgroundImage;
        this.font = font;
    }

    abstract get title():string;

    displayHeader():void{
        console.log(`Header ${this.headerText}`);
    }

    setBackground():void {
        console.log(`Setting background image to ${this.backgroundImage}`);
    }

    setFont():void {
        console.log(`Setting font ${this.font}`);
    }
}

class HomePage extends Page {
    private readonly pageTitle:string;

    constructor(headerText:string, backgroundImage:string, font:string, pageTitle:string){
        super(headerText,backgroundImage,font); // super: az ősnek (Page) konstruktorára hivatkozik
        this.pageTitle = pageTitle;
    }

    // Kötelező rész, mert az ősben a Page-ben, vagy ilyen nevu (title) tag
    // Az absztakt osztály kötelező teszi, hogy legyen egy ilyen title, amig nincsen
    //szintaktikai hiba (hasonló, mint az interface-eknél)
    get title():string{
        return this.pageTitle;
    }

    display():void {
        console.log(`Display Home Page`);
        this.displayHeader();
        this.setBackground();
        this.setFont();
        console.log(`Title: ${this.pageTitle}`);
    }
}

//absztrakt osztályból nem tudunk objektumpéldányt létrehozni
//let pageObj = new Page("headerSzöveg","hatterkep.png","Arial");
let homePageObj = new HomePage("Welcome to my site", "bg-home.png","Arial","Home");
homePageObj.display();
