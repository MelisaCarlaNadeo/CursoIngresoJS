/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
  
  var productoIngresado;
  var cantidaddebolsas;
  var precioporbolsa;
  var seguir;

  seguir = true;

  while(seguir == true)
  {
    productoIngresado = prompt("Ingrese el producto de construcción: ");

    while(productoIngresado != "arena" && productoIngresado != "cal" && productoIngresado != "cemento")
    {
      productoIngresado = prompt("Error... Reingrese el producto de construcción (arena/cal/cemento): ");
    }

    if(productoIngresado == "arena" || productoIngresado == "cal" || productoIngresado == "cemento")
    {
      cantidaddebolsas = prompt("Ingrese la cantidad de bolsas del producto: ");
      cantidaddebolsas = parseInt(cantidaddebolsas);

      while(isNaN(cantidaddebolsas) || cantidaddebolsas < 1)
      {
        cantidaddebolsas = prompt("Error... Reingrese la cantidad de bolsas: ");
        cantidaddebolsas = parseInt(cantidaddebolsas);
      }

      if(cantidaddebolsas > 0)
      {
        precioporbolsa = prompt("Ingrese el precio por bolsa: ");
        precioporbolsa = parseInt (precioporbolsa);

        while(isNaN(precioporbolsa) || precioporbolsa < 1)
        {
          precioporbolsa = prompt("Error... Reingrese el precio por bolsa: ");
          precioporbolsa = parseInt(precioporbolsa);
        }             
      }
    }
  seguir = confirm("Quiere ingresar otro producto?");
  }
}
