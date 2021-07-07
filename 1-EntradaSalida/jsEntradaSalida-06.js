/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var Numero1;
	var Numero2;
	var suma;

	Numero1 = txtIdNumeroUno.value;
	Numero2 = txtIdNumeroDos.value;

	Numero1 = parseInt (Numero1);
	Numero2 = parseInt (Numero2);

	suma = Numero1 + Numero2;

	alert ("La suma de los números es " + suma);


}

