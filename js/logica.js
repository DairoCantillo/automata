function lexer(){
	var noAceptado=" No aceptado";
	 var aceptado=" aceptado";
	 var validadorDe0_6 = new RegExp("[a-o]|[q-z]|[A-O]|[Q-Z]");//letra-p
	 var validadorDe0_4 = new RegExp("[1-9]");
	 var validadorDe4_4 = new RegExp("[0-9]");
	 var validadorDe4_5 = new RegExp("[A-Z]|[a-z]|[+-/;?=)(/&%$#_.,:*]");
	 var validadorDe6_6 = new RegExp("[A-Z]|[a-z]");
	 var validadorDe6_7 = new RegExp("[0-9]|[+-/;?=)(/&%$#_.,:*]");//tambien -de 8 a 13, 9 a 13, 10 a 13, 11 a 13
	 var validadorDe8_6 = new RegExp("[a-q]|[s-z]|[A-Q]|[S-Z]");//letra-r
	 var validadorDe9_6 = new RegExp("[a-h]|[j-z]|[A-H]|[J-Z]");//letra-i
	 var validadorDe10_6 = new RegExp("[a-m]|[o-z]|[A-M]|O-Z]");//letra-n
	 var validadorDe11_6 = new RegExp("[a-s]|[u-z]|[A-S]|[U-Z]");//letra-t
	 var validarP = new RegExp("p|P"); 
	 var resultado=[null];

	 var contador=0;
	 var i=0;
	 var cadena=document.getElementById("valor").value;;
	 var separador = " "; // un espacio en blanco
	 var palabras = cadena.split(separador);


		function estado_0(){
			var carater = palabras[i];
			if (carater.charAt(contador)==="+" & (contador+1)===palabras[i].length) {return aceptado+" Sumar";}
			if (carater.charAt(contador)==="-" & (contador+1)===palabras[i].length) {return aceptado+" Restar" ;}
			if (carater.charAt(contador)==="=" & (contador+1)===palabras[i].length) {return aceptado+" Asignar";}
			if (validadorDe0_4.test(carater.charAt(contador))) {return estado_4();}
			if (validadorDe0_6.test(carater.charAt(contador))) {return estado_6();}
			if (validarP.test(carater.charAt(contador))) {return estado_8();}
			else{return noAceptado;}

		}

		function estado_4(){
			contador++;
			var carater = palabras[i];
			if (validadorDe4_4.test(carater.charAt(contador))) {return estado_4();}
			if (validadorDe4_5.test(carater.charAt(contador)) & (contador+1)===palabras[i].length) {return aceptado+" Entero";}
			else{return noAceptado;}
		}	
		
		function estado_6(){
			contador++;
			var carater = palabras[i];
			if (validadorDe6_6.test(carater.charAt(contador))) {return estado_6();}
			if (validadorDe6_7.test(carater.charAt(contador)) & (contador+1)===palabras[i].length) {return aceptado+" Letra";}
			else{return noAceptado;}

		}

		function estado_8(){
			contador++;
			var carater = palabras[i];
			if (validadorDe8_6.test(carater.charAt(contador))) {return estado_6();}
			if (carater.charAt(contador)==="r") {return estado_9();}
			if (validadorDe6_7.test(carater.charAt(contador)) & (contador+1)===palabras[i].length) {return aceptado+" Letra";}
			else{return noAceptado;}
		}

		function estado_9(){
			contador++;
			var carater = palabras[i];
			if (validadorDe9_6.test(carater.charAt(contador))) {return estado_6();}
			if (carater.charAt(contador)==="i") {return estado_10();}
			if (validadorDe6_7.test(carater.charAt(contador)) & (contador+1)===palabras[i].length) {return aceptado+" Letra";}
			else{return noAceptado;}
		}

		function estado_10(){
			contador++;
			var carater = palabras[i];
			if (validadorDe10_6.test(carater.charAt(contador))) {return estado_6();}
			if (carater.charAt(contador)==="n") {return estado_11();}
			if (validadorDe6_7.test(carater.charAt(contador)) & (contador+1)===palabras[i].length) {return aceptado+" Letra";}
			else{return noAceptado;}
		}

			function estado_11(){
			contador++;
			var carater = palabras[i];
			if (validadorDe11_6.test(carater.charAt(contador))) {return estado_6();}
			if (carater.charAt(contador)==="t" & (contador+1)===palabras[i].length) {return aceptado+" Imprimir";}
			if (validadorDe6_7.test(carater.charAt(contador)) & (contador+1)===palabras[i].length) {return aceptado+" Letra";}
			else{return noAceptado;}
		}

		function main(){
	      	for ( i = 0; i < palabras.length; i++) {
	      		 resultado.push(palabras[i]+": "+estado_0()+"<br>");
	      			console.log();
	      		contador=0;
	      	}
	      	document.getElementById("imprimir").innerHTML= resultado.slice(0,resultado.length);

	     }

main();

}

