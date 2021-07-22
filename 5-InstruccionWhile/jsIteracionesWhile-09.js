/* Melisa Carla Nadeo División H
While Ejercicio 9
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numeroIngresado;
	var seguir;
	var primernumeroIngresado;
	var maximo;
	var minimo;

	seguir = true;
	primernumeroIngresado = false;

	while(seguir == true)
	{
		numeroIngresado = prompt("Ingrese un número: ");
		numeroIngresado = parseInt(numeroIngresado);

	if(numeroIngresado > maximo || primernumeroIngresado == false)
	{
		maximo = numeroIngresado;
	}

	if(numeroIngresado < minimo || primernumeroIngresado == false)
	{
		minimo = numeroIngresado;
		primernumeroIngresado = true;
	}

		seguir = confirm("Quiere ingresar otro número? ");
	}

	txtIdMaximo.value = maximo;
	txtIdMinimo.value = minimo;

}//FIN DE LA FUNCIÓN 