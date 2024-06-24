const { MongoClient, ServerApiVersion } = require('mongodb');

//connection string - kapcsolódáshoz szükséges beállításokat tartalmazó szöveg
const uri = "mongodb+srv://blahutlorant:teszt123@cluster0.4l5lu3d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// MongoClient létrehozása beállításokkal
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const dbName = 'my_db';

async function run() {
  try {
    await client.connect();

    //DB beállítása
    const db = client.db(dbName); //ha nincs my_db néven adatbázis, akkor létrehozza

    //kollekció létrehozása (SQL tábla)
    const collection = db.collection('users'); //ha nincs ilyen nevű kollekció, akkor létrehozza
    // SQL-ben megfelel egy CREATE TABLE users (user_name, email stb.)

    // Új dokumentum beszúrása a kollekcióba - egy elem beszúrása (SQL-ben INSERT)
    const user = {name:'John Doe', email: "johndoe@example.com"};
    await collection.insertOne(user);
    console.log("Dokumentum beszúrása sikeres a users kollekcióba :)");

  } catch (err){
    console.log("Hiba történt: "+err);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
