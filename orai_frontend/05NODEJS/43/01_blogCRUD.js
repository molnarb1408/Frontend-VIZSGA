const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser'); // A html oldal beolvasása/parseolásához kell
// Valamint a postMan működéséhez is szükséges

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let blogPosts = JSON.parse(fs.readFileSync('01_blogPosts.json', 'utf8'));

// Összes blogpost lekérdezése
// HTTP method: GET: az URL, amin keresztül elérjük http://localhost:3000/blog 
app.get('/blog', (req, res) => {
    res.status(200).json(blogPosts);
});

// Új blog bejegyzés létrehozása
// elegendő lenne a req.body is, de PostMan-nel is teszteljük, ezért szükséges a req.query 
app.post('/blog', (req, res) => {
    const { title, content } = req.body || req.query;

    //Új blog bejegyzés objektum létrehozása
    const newPost = { id: Date.now(), title, content };
    blogPosts.push(newPost);
    saveBlogPosts();
    res.status(200).json({ message: 'Blogbejegyzés sikersen létrehozva :)' });
});

// index.html beállítása keződoldalként
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '01_index.html'));
});

// JSON fájlba mentjuk az adatokat
function saveBlogPosts() {
    fs.writeFileSync('01_blogPosts.json',JSON.stringify(blogPosts,null, 2));
}

// Blogbejegyzés szerkesztése
// id: path variable - útvonal változó
app.put('/blog/:id',(req, res) => {
    const postId = req.params.id;
    const {title, content} = req.body || req.query;

    // ID alapján megkeressuk az id alapján a blogpostot
    const post = blogPosts.find(post => post.id === Number(postId));

    if (post){
        post.title = title;
        post.content = content;
        saveBlogPosts(); //Mentés a JSON fájlba
        res.status(200).json({message:'A blogbejegyzés sikeresen frissitve :)'});
    } else {
        res.status(404).json({message:'A megadott id alapján nem taláható blogbejegyezés :('});
    }
});

// Blogbejegyzés törlés id alapján
app.delete('/blog/:id',(req, res) => {
    const postId = req.params.id;
 
    const initialLength = blogPosts.length;

    // ID alapján megkeressuk az id alapján a blogpostot
    blogPosts = blogPosts.filter(post => post.id !== Number(postId));

    if (blogPosts.length !==initialLength){
        saveBlogPosts(); //mentés JSON fájlba
        res.status(200).json({message:'A blogbejegyzés sikeresen törölve :)'});
    } else {
        res.status(404).json({message:'A megadott id alapján nem taláható blogbejegyezés :('});
    }
});


// szerver indítás
app.listen(3000, () => {
    console.log('Fut a szerver ezen a címen: http://localhost:3000');
});