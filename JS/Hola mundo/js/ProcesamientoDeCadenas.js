'use strict'

//transformacion

var numero = 444;
var texto1 = "h o la la";
var texto2 = " FIN";

var dato = [numero.toString(),
			texto1.toUpperCase(),
			texto2.toLowerCase()];

console.log(dato);

console.log(texto1.replace("la", "ta"));//reemplaza la primera coincidencia por el segundo parametro

console.log(texto1.slice(1));

console.log(texto1.slice(1,3));

console.log(texto1.split(" "));//mete todo en un array, cada indice apartir del caracter pasado por parametro

console.log(texto1.trim());//quita los espacios por delante y por detras



//calcular longitud

var dato2 = [numero.length,
			texto1.length];
console.log(dato2);



//concatenar

var textoFinal = texto1.concat(texto2);
console.log(textoFinal);



// busqueda

var busqueda = texto1.indexOf("la");//primer coincidencia
console.log(busqueda);

console.log(texto1.lastIndexOf("la"));//ultima coincidencia

console.log(texto1.search("la"));//lo mismo que el indexOf

console.log(texto1.match("la"));//devuelve un array con la promer coincidencia

console.log(texto1.match(/la/));//devuelve un array con todas la coincidencias integrando la expresion regular

console.log(texto1.substr(0,2));//parte de una cadena

console.log(texto1.charAt(1));//indico el indice

console.log(texto1.startsWith("la"));//busca al inicio de la cadena, devuelve true o false

console.log(texto1.endsWith("la"));//busca al final de la cadena, devuelve true o false

console.log(texto1.includes("lala"));//devuelve true o false si el dato se encuentra en la cadena

