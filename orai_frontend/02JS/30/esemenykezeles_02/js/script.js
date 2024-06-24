
// best-practice - javasolt szintakszis
// a myDiv html elemhez adunk hozzá egy wheel esemény figyelőt (görgetés)
// Amikor megtörténik az esemény, akkor a setFontSize() eljárást hívja meg
document.getElementById("myDiv").addEventListener("wheel",setFontSize);
function setFontSize(){
    this.style.fontSize = "35px";
}

function dblClickShowHelloWorld(){
    document.getElementById("doubleClick").textContent = "Hello World!!!";
}