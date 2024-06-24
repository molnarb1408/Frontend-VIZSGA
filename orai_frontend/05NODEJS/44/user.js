const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let users = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

//User felvitel
app.post('/userAdd', (req,res) => {
    const { userName, email, birthDate, status } = req.body || req.query;

    const newUser = {id: Date.now(), userName, email, birthDate, status};
    users.push(newUser);
    saveUsers();
    res.status(200).json({message:'Felhasználó sikeresen létrehozva.'});
});

// user fájlba mentése
function saveUsers() {
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
}

// user módosítás
app.put('/userEdit/:id',(req,res) => {
    const userId = req.params.id;
    const { userName, email, birthDate, status} = req.body || req.query;
    const user = users.find(user=>user.id === (Number)(userId));

    if (user) {
        user.userName = userName;
        user.email = email;
        user.birthDate = birthDate;
        user.status = status;
        saveUsers();
        res.status(200).json({message: 'Felhasználó sikeresen frissítve.'});
    } else {
        res.status(404).json({message: 'Nem található ilyen id-val felhasználó :('});
    }
});

// user törlése
app.delete('/userDelete/:id',(req,res) => {
    const userId = req.params.id;

    const initialLength = users.length;
    users = users.filter(user=>user.id !== Number(userId));
    if (users.length !== initialLength){
        saveUsers();
        res.status(200).json({message:'A felhasználó sikeresen törölve :)'});
    } else {
        res.status(404).json({message:'Nem található ilyen id-val felhasználó :('});
    }
});


//userek lekérdezése
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('A szerver fut a http://localhost:3000 címen');
});