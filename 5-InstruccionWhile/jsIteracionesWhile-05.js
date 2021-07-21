/* Melisa Carla Nadeo División H
While Ejercicio 5
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("Ingrese su sexo: f ó m");

	while(sexoIngresado!= "f" && sexoIngresado!= "m")
	{
		sexoIngresado = prompt("Error... Reingrese su sexo:")
	}

	txtIdSexo.value=sexoIngresado;
	
}//FIN DE LA FUNCIÓN