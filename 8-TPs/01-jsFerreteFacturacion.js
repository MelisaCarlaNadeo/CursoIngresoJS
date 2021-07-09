/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var sumaPrecios;

	precio1 = txtIdPrecioUno.value;
	precio1 = parseFloat (precio1);
	precio2 = txtIdPrecioDos.value;
	precio2 = parseFloat (precio2);
	precio3 = txtIdPrecioTres.value;
	precio3 = parseFloat (precio3);

	sumaPrecios = precio1 + precio2 + precio3;
	sumaPrecios = parseFloat (sumaPrecios);

	alert("La suma de los precios de los productos es $" + sumaPrecios);

}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var promedioPrecios;

	precio1 = txtIdPrecioUno.value;
	precio1 = parseFloat (precio1);
	precio2 = txtIdPrecioDos.value;
	precio2 = parseFloat (precio2);
	precio3 = txtIdPrecioTres.value;
	precio3 = parseFloat (precio3);

	promedioPrecios = (precio1 + precio2 + precio3) / 3;
	promedioPrecios = parseFloat (promedioPrecios);
	promedioPrecios = promedioPrecios.toFixed(2);

	alert("El promedio de los precios de los productos es $"  + promedioPrecios);
}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var sumaPrecios;
	var precioIva;

	precio1 = txtIdPrecioUno.value;
	precio1 = parseFloat (precio1);
	precio2 = txtIdPrecioDos.value;
	precio2 = parseFloat (precio2);
	precio3 = txtIdPrecioTres.value;
	precio3 = parseFloat (precio3);

	sumaPrecios = precio1 + precio2 + precio3;
	sumaPrecios = parseFloat (sumaPrecios);

	precioIva = sumaPrecios + (sumaPrecios * 0.21);
	precioIva = parseFloat (precioIva);
	precioIva = precioIva.toFixed(2);

	alert("El precio final de los productos es $" + precioIva);

}

/*txtIdPrecioUno
txtIdPrecioDos
txtIdPrecioTres*/