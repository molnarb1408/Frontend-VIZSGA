# Frontend-VIZSGA
# Telepítés
1. **VSC**
2. **GitHub desktop**
3. **NodeJS**
   - weboldal segít
   - `npm –v` //verzió ellenőrzés
4. **TypeScript**
   - `npm install –g typescript`
   - `tsc –v` //verzió ellenőrzés

## Addon’s VSC
1. Angular 17 Snippets - TypeScript, Html, Angular
2. Angular Language Service
3. Bootstrap 5 Quick Snippets
4. Bootstrap Class Autocomplete
5. Codiumate - Code, test and review with confidence - by CodiumAI
6. Git Graph
7. Git History
8. HTML CSS Support
9. JavaScript (ES6) code snippets
10. Live Server
11. Llama Coder
12. MongoDB for VS Code
13. node-snippets
14. Pretty TypeScript Errors
15. Tabnine: AI Autocomplete & Chat for Javascript, Python, Typescript, PHP, Go, Java & more
16. vscode-pdf

# TypeScript

## TSC
1. **Telepítés** (előtte node.js/npm telepítés):
   - `npm install –g typescript`
2. **Verziószám**:
   - `tsc –v`
   - `tsc --version`
3. **Fordítás** (compiler):
   - `tsc fajlNev.ts`
4. **PowerShell beállítás** (így VSC-ben is működik a parancssor):
   - `Set-ExecutionPolicy –ExecutionPolicy RemoteSigned`
5. **Fordító kezdeti beállítása**, `tsconfig.json` létrehozása:
   - `tsc --init`
6. **Bemeneti fájl figyelése**:
   - `tsc –watch`
   - `tsc -w`
7. **Teljes projekt futatása a megadott elérési úton**:
   - `tsc -p ./path/to/tsconfig.json`
8. **Hibakiírások színezése**, könnyebb debuggolás:
   - `tsc --pretty`
9. **További parancsok**:
   - `tsc –help`

# Angular

1. **Telepítés** (előtte node.js/npm telepítés):
   - `npm install -g @angular/cli`
2. **Verziószám**:
   - `ng version`
3. **Angular projekt létrehozása**:
   - `ng new projektNev`
4. **Projekt futtatása** (4200-as porton elérhető ezt követően):
   - `ng serve`
5. **Komponens létrehozása**:
   - `ng g c komponensNev`
6. **Angular projekt metrikáinak, statisztikáinak összegyűjtése**:
   - `ng analytics`
7. **Külső könyvtár hozzáadása a projekthez**:
   - `ng add konyvtarNev`
8. **Bootstrap telepítés**:
   - `npm install bootstrap@5.2.3`
9. **angular.json fájlban** (ne a test részhez rakjuk):
   - `"node_modules/bootstrap/dist/css/bootstrap.min.css"`
   - `"node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"`
10. **Amennyiben fut a szerver és szeretnénk elérni a Terminal-t**, akkor:
    - `ctrl+c`
11. **További parancsok**:
    - `ng --help`

# NodeJS

```js
const http = require('http');

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end("Vizsga szerver");
});

server.listen(port, hostname, () => {
    console.log(`A szerver működik a http://${hostname}:${port}/ címen`);
});
