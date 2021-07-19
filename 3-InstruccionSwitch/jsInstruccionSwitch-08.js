/*Melisa Carla Nadeo División H
Switch 	Ejercicio 8
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
function mostrar()
{
	var destinoIngresado; 
	var mensaje;
	destinoIngresado = txtIdDestino.value;

	switch (destinoIngresado)
	{
		case "Bariloche":
			mensaje = "frío";
		break;
		case "Cataratas":
			mensaje = "calor";
		break;
		case "Mar del plata":
			mensaje = "calor";
		break;
		default:
			mensaje = "frío";
		break;
	}
	alert("En este destino hace " + mensaje);

}//FIN DE LA FUNCIÓN