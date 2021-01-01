'use strict'

//se reemplaza la palabra function por una flecha

function suma(parametro1,parametro2,sumarYmostrar,mostrarX2){
	var sumar = parametro1 + parametro2;
	sumarYmostrar(sumar);
	mostrarX2(sumar);
}

suma(3,5,
	dato =>{
		console.log(dato);
	},
	dato =>{
		console.log(dato*2);
	});



//otro ejemplo
var arreglo = ["hola",1,true,"FIN"];

/*
En el forEach el primer paramero es cada uno de los elementos que recorre del arreglo
y el segundo parametro es en el indece que se encuentra
funcion anonimo 
funcion flacha
*/
arreglo.forEach((elemento,indice)=>{
	document.write("<li>"+indice+" - "+elemento+"</li>")
});
