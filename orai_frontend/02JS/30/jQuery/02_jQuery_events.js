
// Ez a szelektor csak azokat a bekezdéseket jelőli ki, ami ezzel az osztállyal rendelkezik: dbClickDisapear
$("p.dbClickDisapear").dblclick(function(){
    $(this).hide();
});

$(".mouseEnterDisapear").mouseenter(function(){
    $(this).hide();
});

$("#mouseHover").hover(function(){
    alert("Szép tájkép!!!!");
});