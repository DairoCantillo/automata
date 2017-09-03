 var noAceptado=-1;
 var aceptado=0;
 var validadorDe0_6 = new RegExp("[a-o]|[q-z]|[A-O]|[Q-Z]");//letra-p
 var validadorDe0_4 = new RegExp("[1-9]");
 var validadorDe4_4 = new RegExp("\d");
 var validadorDe4_5 = new RegExp("[A-Z]|[a-z]|\W");
 var validadorDe6_6 = new RegExp("[A-Z]|[a-z]");
 var validadorDe6_7 = new RegExp("\d|\W");//tambien de 8 a 13, 9 a 13, 10 a 13, 11 a 13
 var validadorDe8_6 = new RegExp("[a-q]|[s-z]|[A-Q]|[S-Z]");//letra-r
 var validadorDe9_6 = new RegExp("[a-h]|[j-z]|[A-H]|[J-Z]");//letra-i
 var validadorDe10_6 = new RegExp("[a-m]|[o-z]|[A-M]|O-Z]");//letra-n
 var validadorDe11_6 = new RegExp("[a-s]|[u-z]|[A-S]|[U-Z]");//letra-t
	//var estadosDeAceptacion(1,2,3,5,7,12,13)

	function obtenerCaracter(){

	}

	function estado_0(){
		var carater = obtenerCaracter();
		if (carater==="+") {estado_1();}
		if (carater==="-") {estado_2();}
		if (carater==="=") {estado_3();}
		if (validadorDe0_4.test(carater)) {estado_4();}
		if (validadorDe0_6.test(carater)) {estado_6();}
		if (carater==="p") {estado_8();}
		else{return noAceptado;}

	}
	function estado_1(){return aceptado;}
	function estado_2(){return aceptado;}
	function estado_3(){return aceptado;}

	function estado_4(){
		var carater = obtenerCaracter();
		if (validadorDe4_4.test(carater)) {estado_4();}
		if (validadorDe4_5.test(carater)) {estado_5();}
		else{return noAceptado;}
	}	
	function estado_5(){return aceptado;}
	
	function estado_6(){
		var carater = obtenerCaracter();
		if (validadorDe6_6.test(carater)) {estado_6();}
		if (validadorDe6_7.test(carater)) {estado_7();}
		else{return noAceptado;}

	}
	function estado_7(){return aceptado;}

	function estado_8(){
		var carater = obtenerCaracter();
		if (validadorDe8_6.test(carater)) {estado_6();}
		if (carater==="r") {estado_9();}
		if (validadorDe6_7.test(carater)) {estado_13();}
		else{return noAceptado;}
	}

	function estado_9(){
		var carater = obtenerCaracter();
		if (validadorDe9_6.test(carater)) {estado_6();}
		if (carater==="i") {estado_10();}
		if (validadorDe6_7.test(carater)) {estado_13();}
		else{return noAceptado;}
	}

	function estado_10(){
		var carater = obtenerCaracter();
		if (validadorDe10_6.test(carater)) {estado_6();}
		if (carater==="n") {estado_11();}
		if (validadorDe6_7.test(carater)) {estado_13();}
		else{return noAceptado;}
	}

		function estado_11(){
		var carater = obtenerCaracter();
		if (validadorDe11_6.test(carater)) {estado_6();}
		if (carater==="t") {estado_12();}
		if (validadorDe6_7.test(carater)) {estado_13();}
		else{return noAceptado;}
	}
	function estado_12(){return aceptado;}
	function estado_13(){return aceptado;}