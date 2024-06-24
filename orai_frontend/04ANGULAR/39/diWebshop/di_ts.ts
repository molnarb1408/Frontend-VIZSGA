namespace diWebShop {
    class ProductService {
        getProducts():void {
            console.log("Az adatok betöltése az adatbázisból (minden termék lekérdezése) ... ");
        }
        addProduct():void {
            console.log("Hozzáadunk egy terméket...");
        }
    }

    class LoggerService { 
        log(message:string):void {
            console.log(`Log: ${message}`);
        }
    }

    class ProductController {
        private productService:ProductService;
        private logger:LoggerService;

        // dependency injection - függőség befecskendezés
        // ProductController dependál (függ) két szolgáltatástól a ProductService-től és LoggerService-től
        // Nélkülük nem tud működni. Nagyon szoros kapcsolat alakul ki az osztályok (objektumok között).
        constructor(productService:ProductService, logger:LoggerService){
            this.productService = productService;
            this.logger = logger;
        }

        fetchProducts():void {
            this.productService.getProducts();
            this.logger.log('Napló: Termékek betöltése...');
            // Miért jobb ebben példában a DI, mint a lenti kód?
            // ProductService productServiceObj = new ProductService();
            // productServiceObj.getProducts();
            // LoggerService loggerObj = new LoggerService();
            // loggerObj.log('Napló: Termékek betöltése...');
        }

        addNewProduct():void {
            this.productService.addProduct();
            this.logger.log("Napló: Új termék létrehozása...");
            // ProductService productServiceObj = new ProductService();
            // productServiceObj.getProducts();
            // LoggerService loggerObj = new LoggerService();
            // loggerObj.log('Napló: Termékek betöltése...');
        }
    }

    const productServiceObj = new ProductService();
    const loggerServiceObj = new LoggerService();
    const productControllerObj = new ProductController(productServiceObj,loggerServiceObj);

    productControllerObj.fetchProducts();
    productControllerObj.addNewProduct();
}