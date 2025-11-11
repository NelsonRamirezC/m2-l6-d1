$(function() {

    // SELECTOR POR ID
    $("#titulo-header").click(function(){
        $(this).hide();
    });

    // SELECTOR POR CLASE
    // $(".subtitulos").click(function(){
    //     // MANIPULACIÓN DEL CSS
    //     $(this).css("color", "red");
    // });

    $(".subtitulos > span").click(function(){
        // AGREGAR CLASES A UN ELEMENTO
        // $(this).addClass("seleccionado");

        //AGREGAR/REMOVER CLASES A UN ELEMENTO
        $(this).toggleClass("seleccionado underline");
    });

});