function mostrar()
{
	var precioIngresado;
	var descuentoIngresado;
	var precioFinal;

	precioIngresado = prompt ("Ingrese el precio");
	precioIngresado = parseFloat (precioIngresado);
	descuentoIngresado = prompt ("Ingrese el porcentaje de descuento");
	descuentoIngresado = parseFloat (descuentoIngresado);

	precioFinal = precioIngresado - (precioIngresado * descuentoIngresado / 100);
	preciofinal = parseFloat (precioFinal);
	precioFinal = precioFinal.toFixed(2);

	document.getElementById ("elPrecioFinal").value = precioFinal;

}
//elPrecioFinal