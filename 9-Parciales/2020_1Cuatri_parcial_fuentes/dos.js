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
  var bolsasArena;
  var precioArena;
  var bolsasCal;
  var precioCal;
  var bolsasCemento;
  var precioCemento;
  var bolsasTotal;
  var precioTotal;
  var descuento;
  var precioDescuento;
  var mayorcantidadbolsas;
  var productomayorcantidadbolsas;
  var preciomascaro;
  var productomascaro;

  seguir = true;
  bolsasArena = 0;
  precioArena = 0;
  bolsasCal = 0;
  precioCal = 0;
  bolsasCemento = 0;
  precioCemento = 0;
  mayorcantidadbolsas = 0;
  preciomascaro = 0;
      
  while(seguir == true)
  {
    productoIngresado = prompt("Ingrese el producto de construcción: ");

    while(productoIngresado != "arena" && productoIngresado != "cal" && productoIngresado != "cemento")
    {
      productoIngresado = prompt("Error... Reingrese el producto de construcción (arena/cal/cemento): ");
    }

    cantidaddebolsas = prompt("Ingrese la cantidad de bolsas del producto: ");
    cantidaddebolsas = parseInt(cantidaddebolsas);

    while(isNaN(cantidaddebolsas) || cantidaddebolsas < 1)
    {
     cantidaddebolsas = prompt("Error... Reingrese la cantidad de bolsas: ");
     cantidaddebolsas = parseInt(cantidaddebolsas);
    }

    precioporbolsa = prompt("Ingrese el precio por bolsa: ");
    precioporbolsa = parseFloat (precioporbolsa);

    while(isNaN(precioporbolsa) || precioporbolsa < 1)
    {
      precioporbolsa = prompt("Error... Reingrese el precio por bolsa: ");
      precioporbolsa = parseFloat(precioporbolsa);
    }   
   
    seguir = confirm("Quiere ingresar otro producto?");

    switch(productoIngresado)
    {
      case "arena":
      bolsasArena = bolsasArena + cantidaddebolsas;
      precioArena = precioporbolsa * bolsasArena; 

      if(mayorcantidadbolsas < bolsasArena)
      {
        mayorcantidadbolsas = bolsasArena;
        productomayorcantidadbolsas = productoIngresado;
      }

      if (preciomascaro < precioArena)
      {
        preciomascaro = precioArena;
        productomascaro = productoIngresado;
      }
      break;

      case "cal":
      bolsasCal = bolsasCal + cantidaddebolsas;
      precioCal = precioporbolsa * bolsasCal;

      if(mayorcantidadbolsas < bolsasCal)
      {
        mayorcantidadbolsas = bolsasCal;
        productomayorcantidadbolsas = productoIngresado;
      }

      if (preciomascaro < precioCal)
      {
        preciomascaro = precioCal;
        productomascaro = productoIngresado;
      }
      break;

      default:
      bolsasCemento = bolsasCemento + cantidaddebolsas;
      precioCemento = precioporbolsa * bolsasCemento;

      if(mayorcantidadbolsas < bolsasCemento)
      {
        mayorcantidadbolsas = bolsasCemento;
        productomayorcantidadbolsas = productoIngresado;
      }
      if (preciomascaro < precioArena)
      {
        preciomascaro = precioCemento;
        productomascaro = productoIngresado;
      }
      break;
      
    }
    
    bolsasTotal = bolsasArena + bolsasCal + bolsasCemento;
    precioTotal = precioArena + precioCal + precioCemento; 

    if(bolsasTotal > 9)
    {
      descuento = 0;
    }
    if(bolsasTotal > 29)
    {
      descuento = 25;
    }
    else 
    {
      descuento = 15;
    } 
   
  }

  precioDescuento = precioTotal - (precioTotal * descuento/100); 

  document.write("El importe total a pagar sin descuento es $ " + precioTotal + "<br>");
  document.write("El importe total a pagar con descuento es $ " + precioDescuento + "<br>");
  document.write("El producto con más cantidad es " + productomayorcantidadbolsas + " con " + mayorcantidadbolsas + " bolsas. " + "<br>");
  document.write("El producto más caro es " + productomascaro + ". ");
}

/*a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

