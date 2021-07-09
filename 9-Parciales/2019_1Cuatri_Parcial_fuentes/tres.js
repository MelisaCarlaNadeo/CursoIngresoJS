function mostrar()
{

	var precioIngresado;
	var descuentoIngresado;
	var precioFinal;

	precioIngresado = prompt ("¿Cuál es su precio?");
	descuentoIngresado = prompt ("¿Cuál es el porcentaje de descuento?");

	precioIngresado = parseFloat (precioIngresado);
	descuentoIngresado = parseFloat (descuentoIngresado);

	precioFinal = precioIngresado - (precioIngresado * descuentoIngresado / 100);
	precioFinal =parseFloat (precioFinal);

	document.getElementById ("elPrecioFinal").value = precioFinal;

}
