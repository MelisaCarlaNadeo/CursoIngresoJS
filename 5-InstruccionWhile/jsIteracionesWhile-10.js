/* Melisa Carla Nadeo División H
While Ejercicio 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 	si
2-Suma de los positivos. 	si
3-Cantidad de positivos. 	si
4-Cantidad de negativos. 	si
5-Cantidad de ceros.		si
6-Cantidad de números pares.si	
7-Promedio de positivos. 											(afuera) si
8-Promedios de negativos. 											(afuera) si
9-Diferencia entre positivos y negativos, (positvos-negativos). 	(afuera) si			

*/
function mostrar()
{
	var numeroIngresado;
	var seguir;
	var sumaNegativos;
	var	sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	seguir = true;
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;

	while(seguir == true)
	{
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);

	if(numeroIngresado < 0)
	{
		sumaNegativos = sumaNegativos + numeroIngresado;
		cantidadNegativos ++;
	}
	else
	{
		if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos ++;
		}
		else
		{
			cantidadCeros ++;
		}
	}

	if(numeroIngresado %2 == 0)
	{
		cantidadPares ++;
	}

		seguir = confirm("Quiere ingresar otro número?");
	}

	promedioPositivos = sumaPositivos / cantidadPositivos;
	promedioNegativos = sumaNegativos / cantidadNegativos;
	diferencia = sumaPositivos - sumaNegativos;

	document.write("La suma de los números negativos es: " + sumaNegativos + "<br>");
	document.write("La suma de los números positivos es: " + sumaPositivos + "<br>");
	document.write("La cantidad de números positivos es: " + cantidadPositivos + "<br>");
	document.write("La cantidad de números negativos es: " + cantidadNegativos + "<br>");
	document.write("La cantidad de ceros es: " + cantidadCeros + "<br>");
	document.write("La cantidad de números pares es: " + cantidadPares + "<br>");
	document.write("El promedio de los números positivos es: " + promedioPositivos + "<br>");
	document.write("El promedio de los números negativos es: " + promedioNegativos + "<br>");
	document.write("La diferencia entre la suma de los números positivos y los negativos es: " + diferencia + "<br>");

}//FIN DE LA FUNCIÓN

/*Melisa Carla Nadeo División H
While Ejercicio 10 bis
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 	si
2-Suma de los positivos. 	si
3-Cantidad de positivos. 	si
4-Cantidad de negativos. 	si
5-Cantidad de ceros.		si
6-Cantidad de números pares.si	
7-Promedio de positivos. 											(afuera) si
8-Promedios de negativos. 											(afuera) si
9-Diferencia entre positivos y negativos, (positvos-negativos). 	(afuera) si			
bis: máximo de los valores ingresados si
	 mínimo de los valores positivos
	
	var numeroIngresado;
	var seguir;
	var sumaNegativos;
	var	sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var primernumeroIngresado;
	var maximoIngresado;
	var primernumeropositivoIngresado;
	var minimopositivoIngresado;

	seguir = true;
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;
	primernumeroIngresado = false;
	primernumeropositivoIngresado = false;

	while(seguir == true)
	{
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);

	if(numeroIngresado < 0)
	{
		sumaNegativos = sumaNegativos + numeroIngresado;
		cantidadNegativos ++;
	}
	else
	{
		if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos ++;
			if(numeroIngresado < minimopositivoIngresado || primernumeropositivoIngresado == false)
			{
				minimopositivoIngresado = numeroIngresado;
				primernumeropositivoIngresado = true;
			}
		}
		else
		{
			cantidadCeros ++;
		}
	}

	if(numeroIngresado %2 == 0)
	{
		cantidadPares ++;
	}
	
	if(numeroIngresado > maximoIngresado || primernumeroIngresado == false)
	{
		maximoIngresado = numeroIngresado;
		primernumeroIngresado = true;
	}

		seguir = confirm("Quiere ingresar otro número?");
	}

	promedioPositivos = sumaPositivos / cantidadPositivos;
	promedioNegativos = sumaNegativos / cantidadNegativos;
	diferencia = sumaPositivos - sumaNegativos;

	document.write("La suma de los números negativos es: " + sumaNegativos + "<br>");
	document.write("La suma de los números positivos es: " + sumaPositivos + "<br>");
	document.write("La cantidad de números positivos es: " + cantidadPositivos + "<br>");
	document.write("La cantidad de números negativos es: " + cantidadNegativos + "<br>");
	document.write("La cantidad de ceros es: " + cantidadCeros + "<br>");
	document.write("La cantidad de números pares es: " + cantidadPares + "<br>");
	document.write("El promedio de los números positivos es: " + promedioPositivos + "<br>");
	document.write("El promedio de los números negativos es: " + promedioNegativos + "<br>");
	document.write("La diferencia entre la suma de los números positivos y los negativos es: " + diferencia + "<br>");
	document.write("El máximo número ingresado es: " + maximoIngresado + "<br>");
	document.write("El minimo número positivo ingresado es: " + minimopositivoIngresado + "<br>");
*/