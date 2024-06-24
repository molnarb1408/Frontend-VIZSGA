$(document).ready(function(){
    $("#rejt").click(function(){
        $("img").hide();
    });
    $("#mutat").click(function(){
        $("img").show();
    });
    $("#toogle").click(function(){
        $("p").toggle("slow"); //slow, fast, milisec pld 1000
    });
});