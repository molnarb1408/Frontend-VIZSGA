const express = require('express');
const mongodb = require('mongodb');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Érdemes elkülöníteni a publikus adatokat a kód több részétől
// publikus adatok: html, css, kliens oldali js, képek
app.use(express.static('public'));

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://blahutlorant:teszt123@cluster0.4l5lu3d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const dbName = "employee_db";
const collectionName = "employees";

// Dolgozók listázása 
app.get('/employees', (req, res) => {
    MongoClient.connect(uri, { useNewUrlParser: true })
        .then((client) => {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            collection.find().toArray()
                .then((employees) => {
                    res.json(employees);
                })
                .catch((err) => {
                    console.error("Hiba a dolgozók lekérdezésekor: " + err);
                    res.status(500).json({ error: 'Hiba a szerver oldalon :(' });
                })
                .finally(() => {
                    client.close();
                })
        })
        .catch((err) => {
            console.error("Hiba a MongoDB adatbázishoz való kapcsolódáskor :( " + err);
            res.status(500).json({ error: 'Kapcsolódási hiba :(' });
        });
});

// Új dolgozó felvitel - POST
app.post('/employees', (req, res) => {
    const employee = req.body;

    MongoClient.connect(uri, { useNewUrlParser: true })
        .then((client) => {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            collection.insertOne(employee)
                .then(() => {
                    res.status(201).json({ success: true });
                })
                .catch((err) => {
                    console.error("Hiba a dolgozó hozzáadásakor :(" + err);
                    res.status(500).json({ error: 'Hiba a szerver oldalon :(' });
                })
                .finally(() => {
                    client.close();
                })
        })
        .catch((err) => {
            console.error("Hiba a MongoDB adatbázishoz való kapcsolódáskor :( " + err);
            res.status(500).json({ error: 'Kapcsolódási hiba :(' });
        });
});

// Dolgozó törlése- delete
app.delete('/employees/:id', (req, res) => {
    const employeeId = req.params.id;

    MongoClient.connect(uri, { useNewUrlParser: true })
        .then((client) => {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            collection.deleteOne({ _id: new mongodb.ObjectId(employeeId) })
                .then((result) => {
                    if (result.deletedCount === 1) {
                        res.status(201).json({ success: true });
                    } else {
                        res.status(404).json({ error: 'A dolgozó nem található :(' });
                    }
                })
                .catch((err) => {
                    console.error("Hiba a dolgozó törlésekor :(" + err);
                    res.status(500).json({ error: 'Hiba a szerver oldalon :(' });
                })
                .finally(() => {
                    client.close();
                })
        })
        .catch((err) => {
            console.error("Hiba a MongoDB adatbázishoz való kapcsolódáskor :( " + err);
            res.status(500).json({ error: 'Kapcsolódási hiba :(' });
        });
});

// Dolgozó módosítása - put
app.put('/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    const updateEmployee = req.body;

    MongoClient.connect(uri, { useNewUrlParser: true })
        .then((client) => {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            collection.updateOne(
                { _id: new mongodb.ObjectId(employeeId) },
                { $set: updateEmployee },
            ) .then((result) => {
                    if (result.matchedCount === 1) {
                        res.status(200).json({ success: true });
                    } else {
                        res.status(404).json({ error: 'A dolgozó nem található :(' });
                    }
                })
                .catch((err) => {
                    console.error("Hiba a dolgozó frissítésekor :(" + err);
                    res.status(500).json({ error: 'Hiba a szerver oldalon :(' });
                })
                .finally(() => {
                    client.close();
                })
        })
        .catch((err) => {
            console.error("Hiba a MongoDB adatbázishoz való kapcsolódáskor :( " + err);
            res.status(500).json({ error: 'Kapcsolódási hiba :(' });
        });
});

app.listen(port, () => {
    console.log(`Fut a szerver a http://localhost:${port} címen...`)
});