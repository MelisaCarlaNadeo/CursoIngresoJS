/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var Numero1;
	var Numero2;
	var Suma;

	Numero1 = txtIdNumeroUno.value;
	Numero2 = txtIdNumeroDos.value;

	Numero1 = parseInt (Numero1);
	Numero2 = parseInt (Numero2);

	Suma = Numero1 + Numero2;

	alert ("La suma de los números es " + Suma);

}

function restar()
{
	var Numero1;
	var Numero2;
	var Resta;

	Numero1 = txtIdNumeroUno.value;
	Numero2 = txtIdNumeroDos.value;

	Numero1 = parseInt (Numero1);
	Numero2 = parseInt (Numero2);

	Resta = Numero1 - Numero2;

	alert ("La resta de los números es " + Resta);

}

function multiplicar()
{ 
	var Numero1;
	var Numero2;
	var ResultadoM;

	Numero1 = txtIdNumeroUno.value;
	Numero2 = txtIdNumeroDos.value;
	
	Numero1 = parseInt (Numero1);
	Numero2 = parseInt (Numero2);

	ResultadoM = Numero1 * Numero2;

	alert ("La multiplicación de los números es " + ResultadoM);
}

function dividir()
{
	var Numero1;
	var Numero2;
	var ResultadoD;

	Numero1 = txtIdNumeroUno.value;
	Numero2 = txtIdNumeroDos.value;

	Numero1 = parseInt (Numero1);
	Numero2 = parseInt (Numero2);

	ResultadoD = Numero1 / Numero2;

	alert ("La división de los números es " + ResultadoD);
}

