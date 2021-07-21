/* Melisa Carla Nadeo División H
While Ejercicio 3
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("Ingrese la clave:");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Error...Reingrese la clave:");
	}

	alert("Ingreso al sistema");
	
}//FIN DE LA FUNCIÓN
