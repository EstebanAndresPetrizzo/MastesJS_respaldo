'use strict'

window.addEventListener('load', () =>{
		//raton

	var boton = document.getElementById("boton");

	function cambiarColor() {
		if(boton.style.background == "green"){
			boton.style.background ="red";
		}else{
			boton.style.background = "green";
		}
		return true;
	}

	boton.addEventListener('click', function(){
		cambiarColor();
	});

	//mouse over
	boton.addEventListener('mouseover',function(){
		boton.style.background = "yellow";
	});

	//mouse out
	boton.addEventListener('mouseout',function(){
		boton.style.background = "#ccc";
	});

	var input = document.querySelector("#campo_nombre");
	//focus
	input.addEventListener('focus',function(){
		console.log("dentro del input");
	});

	//blur
	input.addEventListener('blur',function(){
		console.log("fuera del input");
	});

	//keydown
	input.addEventListener('keydown',function(event){
		console.log("tecla pulsada ahora",
			/*
				String. (combierte a string)
				fromCharCode (extrael valor del teclado)
				(event.keyCode) evento que contiene el valor de la tecla
			*/
			String.fromCharCode(event.keyCode));
	});

	//keypress
	input.addEventListener('keypress',function(event){
		console.log("tecla pulsada antes",
			/*
				String. (combierte a string)
				fromCharCode (extrael valor del teclado)
				(event.keyCode) evento que contiene el valor de la tecla
			*/
			String.fromCharCode(event.keyCode));
	});

	//keyup
	input.addEventListener('keyup',function(){
			console.log("tecla pulsada soltada",
			/*
				String. (combierte a string)
				fromCharCode (extrael valor del teclado)
				(event.keyCode) evento que contiene el valor de la tecla
			*/
			String.fromCharCode(event.keyCode));
	});

});

