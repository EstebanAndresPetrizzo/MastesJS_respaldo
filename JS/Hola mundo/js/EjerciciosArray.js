'use strict'

var numeroUsuario = [];
var numero;
var numeroABuscar;
var resultadoBusqueda;

//pedir datos
for (var i = 0; i < 6; i++) {
	numero = prompt("Introduce un numero",0);
	numeroUsuario.push(numero);
};

function mostrarArray(array, mensaje = ""){
	document.write("<h1>"+mensaje+"</h1>");
	numeroUsuario.forEach((elemento)=>{
		document.write("<li>"+elemento+"</li>");
	});
};

//mostrar array
mostrarArray(numeroUsuario, "Lo que Ingresaste: ");
console.log("array: "+numeroUsuario);

//ordenado
numeroUsuario.sort(function(a, b){return (a-b)});
mostrarArray(numeroUsuario, "Lo que Ingresaste ordenado: ");
console.log("array ordenado: "+numeroUsuario);

//invertido
numeroUsuario.reverse();
mostrarArray(numeroUsuario, "Lo que Ingresaste ordenado e invertido: ");
console.log("array ordenado e invertido: "+numeroUsuario);

//extencion del arra
console.log("Cantidad de elementos en el array:"+numeroUsuario.length);
document.write("<h5>Cantidad de elementos en el array: "+numeroUsuario.length+"</h5>");

numeroABuscar = prompt("Introduce un numero para buscar en el array",0);

resultadoBusqueda = numeroUsuario.findIndex(num => num == numeroABuscar);

if (resultadoBusqueda > -1) {
	document.write("<h5>Su numero se encuentra en la posicion: "+(resultadoBusqueda+1)+"</h5>");
} else {
	document.write("<h5>Su numero no se encuetra en el array</h5>");
}