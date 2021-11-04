window.onload = cargarDepartamentos();

function cargarDepartamentos(){
    
    $.ajax({
        url: '../js/departamentos.json',
        method: 'GET'
    }).then(function(departamento) {

        var nombre = document.getElementById('nombreDepartamento');
        var mapa = document.getElementById('imagenMapa');
        var datosGenerales = document.getElementById('datosGenerales');
        var historia = document.getElementById('historia');
        var municipios = document.getElementById('municipios');
        var cultura = document.getElementById('cultura');
        var turismo = document.getElementById('turismo');
        var tradiciones = document.getElementById('tradiciones');

        //Nombre del departamento y mapa
        nombre.innerHTML=departamento[0].nombre;
        mapa.innerHTML='<img src="../img/'+departamento[0].mapa+'">';

        //Datos Generales
        datosGenerales.innerHTML+='<b>Nombre: </b>'+departamento[0].nombre+'<br>';
        datosGenerales.innerHTML+='<b>Capital: </b>'+departamento[0].capital+'<br>';
        datosGenerales.innerHTML+='<b>Superficie: </b>'+departamento[0].superficie+'<br>';
        datosGenerales.innerHTML+='<b>Alcalde: </b>'+departamento[0].alcalde+'<br>';
        datosGenerales.innerHTML+='<b>Poblacion: </b>'+departamento[0].alcalde+'<br>';
        datosGenerales.innerHTML+='<b>N° municipios: </b>'+departamento[0].municipios.numMunicipios+'<br>';


        //Datos historicos e imagen
        historia.innerHTML+='<p>'+departamento[0].historia.infoHistoria+'</p>';
        historia.innerHTML+='<img class="img-fluid" src="../img/'+departamento[0].historia.imagenesHistoria+'"><br>';

        //Datos hitoricos e imagen
        municipios.innerHTML+='<p>'+departamento[0].municipios.infoMunicipios+'</p>';
        municipios.innerHTML+='<ul>';
        for(var i=0; i<departamento[0].municipios.nombreMunicipios.length; i++){
            municipios.innerHTML+='<li>'+departamento[0].municipios.nombreMunicipios[i]+'</li>';
        }
        municipios.innerHTML+='</ul>';


        

    });  
}