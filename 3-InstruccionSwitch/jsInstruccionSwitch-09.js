/* Melisa Carla Nadeo División H
Switch Ejericio 9
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/
function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var porcentaje;
	var precioporDia;

	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 20;
				break;
				case "Mar del plata":
					porcentaje = -20;
				break;
				default:
					porcentaje = -10;
				break;
			}
		break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = -20;
				break;
				case "Mar del plata":
					porcentaje = 20;
				break;
				default:
					porcentaje = 10;
				break;
			}
		break;
		default:
			switch(destinoIngresado)
			{
				case "Cordoba":
					porcentaje = 0;
				break;
				default:
					porcentaje = 10;
				break;
			}	
		break;	
	}
	precioporDia = 15000 + (15000 * (porcentaje/100));
	precioporDia = parseInt (precioporDia);
	alert ("El precio final por día es $" + precioporDia + ".");
	
}//FIN DE LA FUNCIÓN