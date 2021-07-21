/* Melisa Carla Nadeo División H
While Ejercicio 7
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var seguir;
	var suma;
	var promedio;
	
	contador = 0;
	suma = 0;
	seguir = true;

	while(seguir == true)
	{
		numeroIngresado = prompt("Ingrese un número: ");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado) || (numeroIngresado < 0 || numeroIngresado >100))
		{
			numeroIngresado = prompt("Error... Reingrese un número entre el 0 y el 100.");
			numeroIngresado = parseInt(numeroIngresado);
		}

		suma = suma + numeroIngresado;
		contador ++;

		seguir = confirm("Quiere ingresar otro número? ");
	}

	txtIdSuma.value = suma;
	txtIdPromedio.value = suma / contador;

}//FIN DE LA FUNCIÓN