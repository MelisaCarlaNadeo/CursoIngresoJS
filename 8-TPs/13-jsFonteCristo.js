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
 	
 	while(isNaN(numeroIngresado) && numeroIngresado < 0) 
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
     cantidadPares = Math.trunc(cantidadPares);
	}

    }
	
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
    cantidadImpares = 0;
    
    while(isNaN(numeroIngresado) && numeroIngresado < 0) 
    {
        numeroIngresado = prompt("Error... Reingrese un número positivo: ");
        numeroIngresado = parseInt(numeroIngresado);
    }

    while(contador > 0)
    {
        contador = contador - 2;

    if(numeroIngresado > 0 || numeroIngresado %2 != 0)
    {
     cantidadImpares = numeroIngresado / 2;
     cantidadImpares = Math.round(cantidadImpares);
    }

    }
    
    alert("La cantidad de números impares desde el número ingresado hasta el cero es: " + cantidadImpares); 
}
function NumerosDivisibles() 
{
  	var numeroIngresado;
    var contador;
    var numerosDivisibles;

    numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseInt(numeroIngresado);
    contador = numeroIngresado;
    numerosDivisibles = 0;
    
    while(isNaN(numeroIngresado) && numeroIngresado < 0) 
    {
        numeroIngresado = prompt("Error... Reingrese un número positivo: ");
        numeroIngresado = parseInt(numeroIngresado);
    }

    while(contador > 0)
    {
        
        if(numeroIngresado > 0 && numeroIngresado % contador == 0)
        {
         numerosDivisibles++;
        }
        contador--;
    }
    
    alert("La cantidad de números divisbles desde el número ingresado hasta el cero es: " + numerosDivisibles); 
}

function VerificarPrimo()
{
  	var numeroIngresado;
    var contador;
    var numeroPrimo;

    numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseInt(numeroIngresado);
    contador = numeroIngresado;
    numeroPrimo = 0;
    
    while(isNaN(numeroIngresado) && numeroIngresado < 0) 
    {
        numeroIngresado = prompt("Error... Reingrese un número positivo: ");
        numeroIngresado = parseInt(numeroIngresado);
    }

    while(contador > 0)
    {
        contador--
        if(numeroIngresado > 0 && numeroIngresado % contador == 0 && numeroIngresado % )
        {
         numerosDivisibles++;
        }
        ;
    }
    
    alert("La cantidad de números divisbles desde el número ingresado hasta el cero es: " + numerosDivisibles);
}

function NumerosPrimos() 
{
  	
}

 	