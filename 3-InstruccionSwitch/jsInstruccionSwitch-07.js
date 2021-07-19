/*Melisa Carla Nadeo
Switch Ejercicio 7
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, 
Sur, Este u Oeste*/

function mostrar()
{
	var destinoIngresado;
	var mensaje;
	destinoIngresado = txtIdDestino.value;

	switch (destinoIngresado)
	{
		case "Bariloche":
			mensaje = "oeste";
		break;
		case "Cataratas":
			mensaje = "norte";
		break;
		case "Mar del plata":
			mensaje = "este";
		break;
		default:
			mensaje = "sur";
		break;
	}
	alert("El punto cardinal de nuestro país en donde se encuentra es: " + mensaje);

}//FIN DE LA FUNCIÓN