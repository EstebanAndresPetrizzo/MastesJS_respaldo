'use strict'

var arreglo = [5,3,7,9,10];

arreglo.sort();//ordena alfaveticamente o de menor a mayor.

arreglo.reverse();//order inverso

console.log(arreglo);

// busqueda

var busqueda = arreglo.find(numero => numero == 5);//devuelve el elemento si lo encuentra sino, undefined
console.log(busqueda);

var busqueda = arreglo.findIndex(numero => numero == 8);//devuelve el indice sino -1
console.log(busqueda);

var busqueda = arreglo.some(numero => numero <= 5);//devuelve true o false dependiendo del resltado de la comparacion
console.log(busqueda);