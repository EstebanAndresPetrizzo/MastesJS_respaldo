'use strict'

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var textoHora = `
    El año es: ${year}
    El año es: ${mes+1}
`//+1 porque cuenta desde 0
console.log(fecha);
console.log(textoHora);