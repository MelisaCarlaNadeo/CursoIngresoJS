/*Melisa Carla Nadeo División H
Switch Ejercicio 4
al seleccionar un mes informar.
si tiene 28 días. --febrero
si tiene 30 días. --abril, junio, septiembre, noviembre
si tiene 31 días.*/

function mostrar()
{
	var mesDelAño;
	var mensaje;

	mesDelAño =txtIdMes.value;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 días.";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "noviembre":
			mensaje = "Este mes tiene 30 días.";
		break;
		default:
			mensaje = "Este mes tiene 31 días.";
		break;
	}
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN