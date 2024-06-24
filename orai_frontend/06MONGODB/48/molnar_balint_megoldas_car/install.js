const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://blahutlorant:teszt123@cluster0.4l5lu3d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const dbName = 'car_db';

async function run() {
    try {
        await client.connect();
        const db = client.db(dbName);

        const collection = db.collection('cars');

        const carsData = [
            { manufacturer: 'Toyota', model: 'Corolla', year: 2020, price: 20000 },
            { manufacturer: 'Honda', model: 'Civic', year: 2019, price: 18000 },
            { manufacturer: 'Ford', model: 'Focus', year: 2018, price: 17000 },
            { manufacturer: 'BMW', model: '3 Series', year: 2021, price: 35000 },
            { manufacturer: 'Mercedes', model: 'C Class', year: 2021, price: 40000 },
            { manufacturer: 'Audi', model: 'A4', year: 2019, price: 30000 },
            { manufacturer: 'Volkswagen', model: 'Golf', year: 2020, price: 25000 },
            { manufacturer: 'Hyundai', model: 'Elantra', year: 2018, price: 15000 },
            { manufacturer: 'Chevrolet', model: 'Malibu', year: 2017, price: 16000 },
            { manufacturer: 'Nissan', model: 'Altima', year: 2021, price: 23000 }
        ];

        await collection.insertMany(carsData);
        console.log("Dokumentumok sikeresen beszúrva a cars kollekcióba.");
    } catch (err) {
        console.log("Hiba történt: " + err);
    } finally {
        await client.close();
    }
}
 
run().catch(console.dir);
