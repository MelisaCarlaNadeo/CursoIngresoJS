/* Melisa Carla Nadeo División H
While Ejercicio 6
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var suma; 
	var promedio;
	
	contador = 0;
	suma = 0;

	while(contador<5)
	{
		numeroIngresado = prompt("Ingrese un número: ");
		numeroIngresado = parseInt (numeroIngresado);
		suma = suma + numeroIngresado;
		contador ++;
	}

	txtIdSuma.value = suma;
	txtIdPromedio.value = suma / contador;

}
//txtIdSuma   txtIdPromedio