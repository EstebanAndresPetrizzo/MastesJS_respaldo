'use strict'

window.addEventListener('load', () =>{

	function intervalo() {
		//Timers
		var tiempo = setInterval(function(){
			console.log("se esta corriendo el Interval");
			var texto = document.querySelector("#titulo");

			if (texto.style.fontSize == "50px") {
				texto.style.fontSize = "30px";
				
			} else {
				texto.style.fontSize = "50px";
			}
		},1000);
		return tiempo;
	}

	var tiempo = intervalo();
	var stop = document.querySelector("#stop");
	stop.addEventListener("click", function(){
		clearInterval(tiempo);
		console.log("se detiene el Interval");
	});

	var start = document.querySelector("#start");
	start.addEventListener("click",function () {
		console.log("inicio del interval");
		tiempo = intervalo();
	});



	/* el setTimeout solo se ejecuta una vez en comparcion con el stInterval
	var tiempo = setTimeout(function(){
		console.log("Ejecutado");
		document.querySelector("h1").style.fontSize = "100px";
	},500);*/

	//para frebar el interval se una el clearinterval


});