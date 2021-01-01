'use strict';

//Fetch (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data => {
        listadoUsuarios(data);
        return getInfo();
    })
    .then (data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

function listadoUsuarios(usuarios) {
    usuarios.map((users, i) => {
        let nombre = document.createElement('h2');
        nombre.innerHTML = i + 1 + ") " + users.name;
        div_usuarios.appendChild(nombre);
    });
    document.querySelector(".loading").style.display = "none";
}

//promesa desde cero
function getInfo1(){
    var profesor = {
        nombre: 'Andres',
        apellido: 'Petrizzo'
    };

    return new Promise((resolve, reject) =>{
        var profesor_string = "";

        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);
            if(typeof profesor_string != 'string' || profesor_string == '') return reject('error');
    
            return resolve(profesor_string);
        }, 3000);

    });

}