/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares() 
{
  	var numeroIngresado;
  	var contador;
  	var cantidadPares;

 	numeroIngresado = txtIdNumero.value;
 	numeroIngresado = parseInt(numeroIngresado);
 	contador = numeroIngresado;
 	cantidadPares = 0;
 	
 	while(isNaN(numeroIngresado) || numeroIngresado < 0)
 	{
 		numeroIngresado = prompt("Error... Reingrese un número positivo: ");
 		numeroIngresado = parseInt(numeroIngresado);
 	}
 	
 	while(contador > 0)
 	{
 		contador = contador - 2;

 	if(numeroIngresado > 0 || numeroIngresado %2 == 0)
	{
	 cantidadPares = numeroIngresado / 2;
	}
	} //que pasa con los numeros impares... me da con coma
	
	alert("La cantidad de números pares desde el número ingresado hasta el cero es: " + cantidadPares);
}

function NumerosImpares() 
{
  	var numeroIngresado;
  	var contador;
  	var cantidadImpares;

 	numeroIngresado = txtIdNumero.value;
 	numeroIngresado = parseInt(numeroIngresado);
 	contador = numeroIngresado;
 	cantidadImpares = 1;
 	
 	while(isNaN(numeroIngresado) || numeroIngresado < 0)
 	{
 		numeroIngresado = prompt("Error... Reingrese un número positivo: ");
 		numeroIngresado = parseInt(numeroIngresado);
 	}
 	
 	while(contador > 0)
 	{
 		contador = contador - 1;

 	if(numeroIngresado > 0 || numeroIngresado %2 != 0)
	{
	 	cantidadImpares = (numeroIngresado /2) + 0.5;
	}
 	}
	
	alert("La cantidad de números impares desde el número ingresado hasta el cero es: " + cantidadImpares);
}

function NumerosDivisibles() 
{
  	
}

function VerificarPrimo()
{
  	
}

function NumerosPrimos() 
{
  	
}

 	