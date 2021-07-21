/*Melisa Carla Nadeo División H
While Ejercicio 4
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("Ingrese un número:");

	while(numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado = prompt("Error... Reingrese un número:");
	}

	txtIdNumero.value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN 