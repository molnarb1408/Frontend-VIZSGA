function printAlertWhenPageOnLoaded(){
    alert("Az oldal betöltve!!!");
}

function textAdd(){
    document.getElementById("demo").textContent = "Teszt szöveg";
}

function mouseOverAddAlert(){
    alert("MouseOver esemény...");
}
var counter = 0;
function scrollCounterAdd(){
    document.getElementById("scrollCountNumber").textContent = counter += 1;
}
