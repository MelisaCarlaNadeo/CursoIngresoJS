/* Melisa Carla Nadeo División H
While Ejercicio 8
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var seguir;
	var sumaPositivos;
	var multiplicacionNegativos;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	seguir = true;

	while (seguir == true) 
	{
		numeroIngresado = prompt("Ingrese un número: ");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado < 0)
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		else
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}

		seguir = confirm("Quiere ingresar otro número?");
	}

	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos;


}//FIN DE LA FUNCIÓN txtIdSuma  txtIdProducto