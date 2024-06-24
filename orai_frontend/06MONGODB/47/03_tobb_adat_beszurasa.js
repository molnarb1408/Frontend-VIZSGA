const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://blahutlorant:teszt123@cluster0.4l5lu3d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    const db = client.db(dbName); //nem hozza létre, mert van már ilyen nevű DB
    const collection = db.collection('users'); //nem hozza létre, mert van már ilyen collection
    
    // Új dokumentumok beszúrása a kollekcióba - több elem beszúrása (SQL-ben INSERT)
    const users = [
        {name:'Jane Doe', email: "janedoe@example.com"},
        {name:'Jonnie Doe', email: "jonniedoe@example.com"},
        {name:'Janet Doe', email: "janetdoe@example.com"},
    ];

    await collection.insertMany(users);
    console.log("Dokumentumok beszúrása sikeres a users kollekcióba :)");
  } catch (err){
    console.log("Hiba történt: "+err);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
