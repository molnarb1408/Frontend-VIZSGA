const express = require('express');
const mongodb = require('mongodb');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://blahutlorant:teszt123@cluster0.4l5lu3d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "car_db";
const collectionName = "cars";
 
app.get('/cars', (req, res) => {
    MongoClient.connect(uri, {})
        .then((client) => {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            collection.find().toArray()
                .then((cars) => {
                    res.json(cars);
                })
                .catch((err) => {
                    console.error("Hiba az autók lekérdezésekor: " + err);
                    res.status(500).json({ error: 'Hiba a szerver oldalon.' });
                })
                .finally(() => {
                    client.close();
                });
        })
        .catch((err) => {
            console.error("Hiba a MongoDB adatbázishoz való kapcsolódáskor: " + err);
            res.status(500).json({ error: 'Kapcsolódási hiba.' });
        });
});

app.post('/cars', (req, res) => {
    const car = req.body;

    MongoClient.connect(uri, {})
        .then((client) => {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            collection.insertOne(car)
                .then(() => {
                    res.status(201).json({ success: true });
                })
                .catch((err) => {
                    console.error("Hiba az autó hozzáadásakor: " + err);
                    res.status(500).json({ error: 'Hiba a szerver oldalon.' });
                })
                .finally(() => {
                    client.close();
                });
        })
        .catch((err) => {
            console.error("Hiba a MongoDB adatbázishoz való kapcsolódáskor: " + err);
            res.status(500).json({ error: 'Kapcsolódási hiba.' });
        });
});

app.delete('/cars/:id', (req, res) => {
    const carId = req.params.id;

    MongoClient.connect(uri, {})
        .then((client) => {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            collection.deleteOne({ _id: new mongodb.ObjectId(carId) })
                .then((result) => {
                    if (result.deletedCount === 1) {
                        res.status(201).json({ success: true });
                    } else {
                        res.status(404).json({ error: 'Az autó nem található.' });
                    }
                })
                .catch((err) => {
                    console.error("Hiba az autó törlésekor: " + err);
                    res.status(500).json({ error: 'Hiba a szerver oldalon.' });
                })
                .finally(() => {
                    client.close();
                });
        })
        .catch((err) => {
            console.error("Hiba a MongoDB adatbázishoz való kapcsolódáskor: " + err);
            res.status(500).json({ error: 'Kapcsolódási hiba.' });
        });
});

app.put('/cars/:id', (req, res) => {
    const carId = req.params.id;
    const updateCar = req.body;

    MongoClient.connect(uri, {})
        .then((client) => {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            collection.updateOne(
                { _id: new mongodb.ObjectId(carId) },
                { $set: updateCar },
            ).then((result) => {
                if (result.matchedCount === 1) {
                    res.status(200).json({ success: true });
                } else {
                    res.status(404).json({ error: 'Az autó nem található.' });
                }
            })
                .catch((err) => {
                    console.error("Hiba az autó frissítésekor: " + err);
                    res.status(500).json({ error: 'Hiba a szerver oldalon.' });
                })
                .finally(() => {
                    client.close();
                });
        })
        .catch((err) => {
            console.error("Hiba a MongoDB adatbázishoz való kapcsolódáskor: " + err);
            res.status(500).json({ error: 'Kapcsolódási hiba.' });
        });
});

app.listen(port, () => {
    console.log(`A szerver elindult a(z) http://localhost:${port} porton!`);
});
