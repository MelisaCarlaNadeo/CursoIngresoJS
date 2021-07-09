/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var fahrenheitCentigrados;

	temperatura = txtIdTemperatura.value;
	temperatura = parseFloat (temperatura);

	fahrenheitCentigrados = (temperatura - 32) * 5/9;
	fahrenheitCentigrados = parseFloat (fahrenheitCentigrados);
	fahrenheitCentigrados = fahrenheitCentigrados.toFixed(2);

	alert(temperatura + " Fahrenheit son " + fahrenheitCentigrados + " centígrados.");
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var centigradosFahrenheit;

	temperatura = txtIdTemperatura.value;
	temperatura = parseFloat (temperatura);

	centigradosFahrenheit = (temperatura *9/5) + 32;
	centigradosFahrenheit = parseFloat (centigradosFahrenheit);
	centigradosFahrenheit = centigradosFahrenheit.toFixed(2);

	alert(temperatura + " centígrados son " + centigradosFahrenheit + " Fahrenheit.");
}

//txtIdTemperatura