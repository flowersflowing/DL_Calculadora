var operandoa;
var operandob;
var operacion;

function init(){
	//variables
	var resultado = document.getElementById('resultado');
	var reset = document.getElementById('reset');
	var suma = document.getElementById('logaritmo');
	var resta = document.getElementById('raiz');
	var multiplicacion = document.getElementById('exponente');
	var division = document.getElementById('potencia');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
	var cero = document.getElementById('cero');

	//eventos de click
	uno.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "1";
	}
	dos.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "2";
	}
	tres.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "3";
	}
	cuatro.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "4";
	}
	cinco.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "5";
	}
	seis.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "6";
	}
	siete.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "7";
	}
	ocho.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "8";
	}
	nueve.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "9";
	}
	cero.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "0";
	}
	reset.onclick = function(e){
  		resetear();
	}
	logaritmo.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "log";
  		limpiar();
	}
	raiz.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "√";
  		limpiar();
	}
	exponente.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "exp";
  		limpiar();
	}
	potencia.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "^10";
  		limpiar();
	}
	igual.onclick = function(e){
  		operandob = resultado.textContent;
  		resolver();
	}
}


function limpiar(){
	resultado.textContent = "";
}

function resetear(){
	resultado.textContent = "";
	operandoa = 0;
	operandob = 0;
	operacion = "";
}

function resolver(){
	var res = 0;
	switch(operacion){
		case "log":
			res = Math.log(parseFloat(operandoa));
			break;

		case "√":
		    res = Math.sqrt(parseFloat(operandoa));
		    break;

		case "exp":
			res = Math.exp(parseFloat(operandoa));
			break;

		case "^10":
			res = Math.pow(parseFloat(operandoa), 10);
			break;
	}
	resetear();
	resultado.textContent = res;
}
