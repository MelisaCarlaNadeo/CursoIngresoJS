
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	var productoIngresado;
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado;
	var contador;
	var seguir;
	var minimoPrecio;
	var primerprecioIngresado;
	var cantidadalcoholbarato;
	var fabricantealcoholbarato;
	var cantidadtotalalcohol;
	var cantidadtotaljabon;
	var cantidadtotalbarbijo;
	var acumuladoralcohol;
	var acumuladorjabon;
	var acumuladorbarbijo;
	var mayorcantidadunidades;
	var productomasunidades;
	var acumuladorproductomasunidades;
	var promedioporcompra;
	
	contador = 0;
	seguir = true;
	primerprecioIngresado = false;
	cantidadtotalalcohol = 0;
	cantidadtotaljabon = 0;
	cantidadtotalbarbijo = 0;
	acumuladoralcohol = 0;
	acumuladorjabon = 0;
	acumuladorbarbijo = 0;
	mayorcantidadunidades = 0;
	productomasunidades = 0;
	acumuladorproductomasunidades = 0;

	while (contador < 5)
	{
		productoIngresado = prompt("Ingrese un producto de prevención de contagio: barbijo, jabón o alcohol");
		
		while(productoIngresado != "barbijo" && productoIngresado != "jabón" && productoIngresado != "alcohol")
		{
			productoIngresado = prompt("Error... Reingrese un producto de prevención de contagio: ");
		}

		precioIngresado = prompt("Ingrese el precio del producto: ");
		precioIngresado = parseInt(precioIngresado);
		
		while(isNaN(precioIngresado) || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("Error... Reingrese el precio (entre $100 y $300):");
			precioIngresado = parseInt(precioIngresado);
		}	
				
		cantidadIngresada = prompt("Ingrese la cantidad de unidades del producto:");
		cantidadIngresada = parseInt(cantidadIngresada);

		while(isNaN(cantidadIngresada) || cantidadIngresada < 1 || cantidadIngresada > 1000)
		{
			cantidadIngresada = prompt("Error... Reingrese la cantidad de unidades del producto (entre 1 y 1000): ");
			cantidadIngresada = parseInt(cantidadIngresada);
		}

		marcaIngresada = prompt("Ingrese la marca del producto:");
		fabricanteIngresado = prompt("Ingrese el fabricante del producto")


		switch(productoIngresado)
		{
			case "alcohol":
			cantidadtotalalcohol = cantidadtotalalcohol + cantidadIngresada;
			acumuladoralcohol ++;

			if(productoIngresado == "alcohol" && precioIngresado < minimoPrecio || primerprecioIngresado == false)
			{
				minimoPrecio = precioIngresado;
				cantidadalcoholbarato = cantidadIngresada;
				fabricantealcoholbarato = fabricanteIngresado;
				primerprecioIngresado = true;
			}
			
			if(mayorcantidadunidades < cantidadtotalalcohol)
			{
				mayorcantidadunidades = cantidadtotalalcohol;
				productomasunidades = productoIngresado;
				acumuladorproductomasunidades = acumuladoralcohol;
			}
			break;

			case "jabón":
			cantidadtotaljabon = cantidadtotaljabon + cantidadIngresada;
			acumuladorjabon ++;

			if(mayorcantidadunidades < cantidadtotaljabon)
			{
				mayorcantidadunidades = cantidadtotaljabon;
				productomasunidades = productoIngresado;
				acumuladorproductomasunidades = acumuladorjabon;
			}
			break;

			default:
			cantidadtotalbarbijo = cantidadtotalbarbijo + cantidadIngresada;
			acumuladorbarbijo ++;

			if(mayorcantidadunidades < cantidadtotalbarbijo)
			{
				mayorcantidadunidades = cantidadtotalbarbijo;
				productomasunidades = productoIngresado;
				acumuladorproductomasunidades = acumuladorbarbijo;
			}
			break;
		}

		if(cantidadtotalalcohol == 0)
			{
				cantidadalcoholbarato = 0;
				fabricantealcoholbarato = "no hay";
			}

		contador++;
	}

	promedioporcompra = mayorcantidadunidades / acumuladorproductomasunidades;

	document.write("Del más barato de los alcoholes, la cantidad de unidades es: " + cantidadalcoholbarato + " y el fabricante es: " + fabricantealcoholbarato + ". " + "<br>");
	document.write("El producto ingresado con más unidades es " + productomasunidades + " y el promedio por compra es: " + promedioporcompra + ". " + "<br>");
	document.write("La cantidad total de jabones ingresados es " + cantidadtotaljabon);
}
