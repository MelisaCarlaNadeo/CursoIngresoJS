
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
	
	contador = 0;
	seguir = true;
	primerprecioIngresado = false;

	while (contador < 5)
	{
		productoIngresado = prompt("Ingrese un producto de prevención de contagio: barbijo, jabón o alcohol");
		
		while(productoIngresado != "barbijo" && productoIngresado != "jabón" && productoIngresado != "alcohol")
		{
			productoIngresado = prompt("Error... Reingrese un producto de prevención de contagio: ");
		}

		if(productoIngresado == "barbijo" || productoIngresado == "jabón" || productoIngresado == "alcohol")
		{
			precioIngresado = prompt("Ingrese el precio del producto: ");
			precioIngresado = parseInt(precioIngresado);
		
			while(isNaN(precioIngresado) || precioIngresado < 100 || precioIngresado > 300)
				{
					precioIngresado = prompt("Error... Reingrese el precio (entre $100 y $300):");
					precioIngresado = parseInt(precioIngresado);
				}

			if(precioIngresado > 99 && precioIngresado < 301)
			{
				cantidadIngresada = prompt("Ingrese la cantidad de unidades del producto:");
				cantidadIngresada = parseInt(cantidadIngresada);

				while(isNaN(cantidadIngresada) || cantidadIngresada < 1 || cantidadIngresada > 1000)
				{
					cantidadIngresada = prompt("Error... Reingrese la cantidad de unidades del producto (entre 1 y 1000): ");
					cantidadIngresada = parseInt(cantidadIngresada);
				}

				if(cantidadIngresada > 0 && cantidadIngresada < 1001)
				{
					marcaIngresada = prompt("Ingrese la marca del producto:");
					fabricanteIngresado = prompt("Ingrese el fabricante del producto")
				}
			}
		}

		contador++
	}

	while(seguir == true)
	{
		if(productoIngresado == "alcohol" && precioIngresado < minimoPrecio || primerprecioIngresado == false)
		{
			minimoPrecio = precioIngresado;
			marcaalcoholbarato = minimoPrecio;
			primerprecioIngresado = true;
		}
	}

	document.write("Del más barato de los alcoholes, la cantidad de unidades es: " +  + " y el fabricante es: " +  + ". " + "<br>");

		
}
