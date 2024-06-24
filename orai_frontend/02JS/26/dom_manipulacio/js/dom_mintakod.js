function titleChange(){
    document.title = "DOM alapok";
}

function kepCsere(){
    var img = document.getElementById("image"); //1 db objektum
    img.src = "kepek/kutya.jpg";
    img.width = 120;
}

function doltBeallit(){
    var felkoverTomb = document.getElementsByClassName("felkover");// adatszerkezet objektumokkal
    for (var i=0; i< felkoverTomb.length; i++){
        felkoverTomb[i].classList.add("dolt");
    }
    console.log(felkoverTomb);
}

function divHozzaAd(){
    //3 lépés: 
    //1. létrehozzuk a div elemet
    //2. feltöltjük tartalommal
    //3. beillesztjük a dom fára

    var ujDiv = document.createElement("div");
    var ujTartalom = document.createTextNode("Új div létrehozva!");
    //tartalom belehelyezése a div-be
    ujDiv.appendChild(ujTartalom);

    // a létrehozott és már szöveges tartalmat kapott div-et hozzáadjuk a dom-hoz
    var aktualisDiv = document.getElementById("demo");
    document.body.insertBefore(ujDiv, aktualisDiv);
}

function formElemKiir(){
    var formElemek = document.forms["tesztForm"];
    var text = "";
    for (let i = 0;i< formElemek.length; i++){
        text +=formElemek.elements[i].name + " ";
        //text +=formElemek.elements[i].placeholder + " ";
    }
    document.getElementById("formElemei").innerHTML = text;
    console.log(formElemek);
}

function h3KekreAllit(){
    var h3Elemek = document.getElementsByTagName("h3");
    for (let i = 0;i < h3Elemek.length;i++){
        h3Elemek[i].style.color = "blue";
    }
    console.log(h3Elemek);    
}