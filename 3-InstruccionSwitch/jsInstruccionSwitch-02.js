/*Melisa Carla Nadeo División H
Switch Ejercicio 2
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
Julio - Agosto -- "Abrigate que hace frio."
Septiembre - Octubre - Noviembre - Diciembre - Enero - Febrero -- "Ya pasamos el frio, ahora calor!!!."
Marzo - Abril - Mayo - Junio -- "Falta para el invierno." */

function mostrar()
{
	var mesDelAño;
	var mensaje;
	mesDelAño =txtIdMes.value;

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
		break;
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno.";
		break;
		default:
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN