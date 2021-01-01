'use strict'

var nombre = prompt("nombre");
var apellido = prompt("apellido");

var texto = /*AltGr + `*/ `
	<h1>Hola</h1>
	<h5>mi apellido: ${apellido}</h5>
	<h5>mi nombre: ${nombre}</h5>
`

document.write(texto);