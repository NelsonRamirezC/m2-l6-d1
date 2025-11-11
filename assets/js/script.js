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
        $(this).parent().toggleClass("seleccionado underline");
    });


    $("#segunda-seccion ul li:even").addClass("even"); //pares
    $("#segunda-seccion ul li:odd").addClass("odd"); //impares



    //EJEMPLO TERCERA SECCIÓN - PRIMER PARRÁFO
    $("#tercera-seccion p:first").click(function(){
        let texto = $(this).text(); //GETTER DEL CONTENIDO DE TEXTO DE UN ELEMENTO
        alert(texto);

        $(this).text("Texto modificado.") //SETTER DEL CONTENIDO DE TEXTO DE UN ELEMENTO
    });

    //EJEMPLO TERCERA SECCIÓN - SEGUNDO PARRÁFO
    $("#tercera-seccion p:last").click(function(){
        let texto = $(this).text();
        let textoModificado = `<strong>${texto}</strong>`;

        $(this).html(textoModificado);
    });


    //REGISTRO DE EMPLEADOS EN LISTA A PARTIR DE UN FORMULARIO

    $("#form-empleados").submit(function(event){
        event.preventDefault();

        let nombreEmpleado = $("#fnombre").val();

        let elementoLista = `<li>${nombreEmpleado}</li>`;

        $("#lista-empleados").prepend(elementoLista);

        $("#fnombre").val("");

    });


});