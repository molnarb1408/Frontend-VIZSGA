// Beágyazásának lehetőségei: js fájl letölt, CDN, vagy csomagkezelő 
// slim, minified, uncompressed
// jelenlegi stabil verziója: 3.7.1 / (August 28, 2023)
// első kiadása: 2006. aug. --> első stabil verzió, Mozilla alapítvány jelentette meg
// népszerű JS könyvár, ingyenes MIT licensz, leegyszerűsíti a JS-t
// light-weight, write-less, do-more
// előnye: ajax támogatás és CSS manupuláció széles köre
// továbbá effektek és animációk valamint eseménykezelés egyszerűbb
// MS, Google, IBM, Netflix használják a jQuery-t (idővel áttérnek vagy áttértek modernebb keretrendszerekre)
// Helyette népszerűbb az Angular, React, Vue (ezek már nem light-weight)
// üres Angular projekt kb 100-200 MB, jquery 30kByte

/*************************** alapszintaktikája ********************/
/*  $(selector).action()
    $(this).hide() - aktuális elem eltávolítása.
    $("p").hide() - minden bekezdés eltávolítása.
    $(".test").hide() - minden olyan elem, aminek a class a test eltuntet
    $("#test").hide() - test id-jű elem eltűntetése. 
    JS-ben ugyanez:
    document.getElementById("test") 
    vs.
    $("#test")

    $('#my_id .my_class') - my_id- n belüli my_class-osztály elérése

    //teljesítmény miatt jQuery reference ezt ajánlja
    $('#my_id').find('.my_class'); 

    $("*") ->minden elem kiválasztása
    $("p:first") -> első bekezdés kiválasztása
    $("[href]") -> minden olyan elem aminek van hivatkozása
*/

    /****************** Események ********************/
/*
    //oldalbetöltődés eseménye
    $(document).ready(function(){

        // jQuery kód ide..

    });

    //egérkezelés: click, dbclick, mouseenter, mouseleave
    //billenytyűzet: keypress, keydown, keyup
    //űrlap események: submit, change, focus, blur (elveszti a focust)
    //oldal: load, resize, scroll, unload
*/

// A teljes DOM betöltését követően kezdem csak el manupulálni
$(document).ready(function(){
   
    $("p").click(function () { 
       // e.preventDefault(); alapértelmezett műkődés végrehajtását megelőzi
       $(this).hide(); //this - az aktuális bekezdés, amire kattintottunk
    });

    $("h2").dblclick(function () { 
        alert("Dupla kattintás, H2"); 
    });
});