const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://blahutlorant:teszt123@cluster0.4l5lu3d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationError: true,
    }
});

const dbName = 'employee_db';

async function run(){
    try {
        //Kapcsolódás a szerverhez
        await client.connect();

        // DB beállítása
        const db = client.db(dbName); // ha nincs ilyen adatbázis, akkor létrehozza

        //kollekció létrehozása
        const collection = db.collection('employees'); 
       
        // Új dokumentumok beszúrása a kollekcióba
        const employeesData = [
            { id: 1, name: 'John Doe', email: 'john@example.com', birthDate: '1990-01-01', position: 'Manager', status: 0 },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', birthDate: '1992-03-15', position: 'Developer', status: 1 },
            { id: 3, name: 'Alice Johnson', email: 'alice@example.com', birthDate: '1988-07-20', position: 'Designer', status: 1 },
            { id: 4, name: 'Bob Williams', email: 'bob@example.com', birthDate: '1995-05-10', position: 'Developer', status: 1 },
            { id: 5, name: 'Emma Davis', email: 'emma@example.com', birthDate: '1991-09-12', position: 'Manager', status: 0 },
            { id: 6, name: 'Michael Brown', email: 'michael@example.com', birthDate: '1987-04-18', position: 'Developer', status: 1 },
            { id: 7, name: 'Olivia Wilson', email: 'olivia@example.com', birthDate: '1993-02-28', position: 'Designer', status: 1 },
            { id: 8, name: 'William Taylor', email: 'william@example.com', birthDate: '1989-11-07', position: 'Developer', status: 1 },
            { id: 9, name: 'Sophia Anderson', email: 'sophia@example.com', birthDate: '1994-06-25', position: 'Manager', status: 1 },
            { id: 10, name: 'James Thomas', email: 'james@example.com', birthDate: '1990-12-05', position: 'Developer', status: 1 }
        ];
        await collection.insertMany(employeesData);
        console.log("Dokumentumok beszúrása sikeres a employees kollekcióba :)");
    } catch(err) {
        console.log("Hiba történt"+err);
    }
    finally {
        //Mindenképpen lefut, hiba esetén is, ha hibátlan akkor is.
        await client.close();
    }
}

run().catch(console.dir);
