'use strict'

//rest
function listado(parametro1,parametro2, ...parametroRestantes){//los tres puntos son para indicar los parametros rest
	console.log(parametro1);
	console.log(parametro2);
	console.log(parametroRestantes)//estos los muestra dentro de un arreglo
}

listado("hola",342,"Coca",true,342);

//SPREAD
var valores = [1,2,3,4,5];

listado(...valores,"Hola");// si delante del parametro coloco los tres puntos
//tomara cada uno de los elementos del array como parametros individuales para la funcion

//otro ejemplo
listado("fuera del array",...valores,"fin");