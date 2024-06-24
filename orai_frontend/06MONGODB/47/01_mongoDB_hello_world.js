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

async function run() {
  try {
    // Kapcsolódás a szerverhez
    await client.connect();

    // Ping üzenet küldése a sikeres kapcsolódás ellenőrzésére
    await client.db("admin").command({ ping: 1 });
    console.log("Pingelés sikeres, sikeres kapcsolódás a mongoDb szerverhez :)");
    console.log("Hello, MongoDb!!!");
  } finally {
    // Mindenképpen lefut ez a blokk, a kapcsolat megszakítása
    await client.close();
  }
}
run().catch(console.dir);
