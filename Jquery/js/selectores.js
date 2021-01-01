$(document).ready(function () {
    //Selector de id

    $("#verde").css("background", "green")
        .css("color", "yellow");

    $("#azul").css("background", "blue")
        .css("color", "red");

    //Selector de clase
    $(".clase").css("border", "5px dashed black");
    $(".otra_clase").click(function () {
        $(this).css("border", "5px dashed black");
    });
    $("#rojo").click(function () {
        $(this).addClass('otra_clase_mas');
    });

    //Selector por etiqueta
    //me traigo todos los parrafos
    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function () {
        $(this).removeClass('clase_para_quitarla');
    });

    //Selectores de atributo
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Youtube"]').css('background', 'blue');

    //Otros
    $('p, a').addClass('margen_superior');
});