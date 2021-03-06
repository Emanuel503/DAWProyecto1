window.onload = cargarDepartamentos();

//Funciones de boostrap para las tootip del mapa
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Variable que guarda del localstorage el id del departamento al que se le dio click
var id=localStorage.getItem("id");

function cargarDepartamentos(){

    //Lister que se ejecuta al dar clic en cualquier enlace del deparamento; al dar clic guarda el id en el localstorage
    $( "#santa-ana, #santa-ana-2" ).on( "click", function() {
        localStorage.setItem("id", "0");
    });

    $( "#ahuachapan, #ahuachapan-2" ).on( "click", function() {
        localStorage.setItem("id", "1");
    });

    $( "#sonsonate, #sonsonate-2" ).on( "click", function() {
        localStorage.setItem("id", "2");
    });

    $( "#chalatenango, #chalatenango-2" ).on( "click", function() {
        localStorage.setItem("id", "3");
    });

    $( "#la-libertad, #la-libertad-2" ).on( "click", function() {
        localStorage.setItem("id", "4");
    });

    $( "#san-salvador, #san-salvador-2" ).on( "click", function() {
        localStorage.setItem("id", "5");
    });

    $( "#cuscatlan, #cuscatlan-2" ).on( "click", function() {
        localStorage.setItem("id", "6");
    });

    $( "#la-paz, #la-paz-2" ).on( "click", function() {
        localStorage.setItem("id", "7");
    });

    $( "#cabanas, #cabanas-2" ).on( "click", function() {
        localStorage.setItem("id", "8");
    });

    $( "#san-vicente, #san-vicente-2" ).on( "click", function() {
        localStorage.setItem("id", "9");
    });

    $( "#usulutan, #usulutan-2" ).on( "click", function() {
        localStorage.setItem("id", "10");
    });

    $( "#san-miguel, #san-miguel-2" ).on( "click", function() {
        localStorage.setItem("id", "11");
    });

    $( "#morazan, #morazan-2" ).on( "click", function() {
        localStorage.setItem("id", "12");
    });

    $( "#la-union, #la-union-2" ).on( "click", function() {
        localStorage.setItem("id", "13");
    });
}