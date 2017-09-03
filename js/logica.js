 var noAceptado=-1;
 var aceptado=0;
 var validador = new RegExp("ab");
	//var estadosDeAceptacion(1,2,3,5,7,12,13)

	function obtenerCaracter(){

	}

	function estado_0(){
		var carater = obtenerCaracter();
		switch(carater){
			case"+":estado_1();break;
			case"-":estado_2();break;
			case"=":estado_3();break;
			case[1-9]:estado_4();break;
			case[a-o]|[q-z]|[A-O]|[Q-Z]:estado_6();break;
			case"p":estado_8();break;
			default: return noAceptado;
		}
	}
	function estado_1(){return aceptado;}
	function estado_2(){return aceptado;}
	function estado_3(){return aceptado;}

	function estado_4(){
		var carater = obtenerCaracter();
		switch(carater){
			case [0-9] :estado_4();break;
			case [a-z]|[A-Z]|"*"|"+"|"-"|"="|"/":estado_5();break;
			default: return noAceptado;
		}
	}	
	function estado_5(){return aceptado;}
	
	function estado_6(){
		var carater = obtenerCaracter();
		switch(carater){
			case [a-z]|[A-Z]:estado_6();break;
			case [0-9]|"*"|"+"|"-"|"="|"/":estado_7();break;
			default: return noAceptado;
		}
	}
	function estado_7(){return aceptado;}


		switch(carro){

		}