/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadlamparas;
    var marcalampara;
    var preciototal;
    var preciofinal;
   
    
    cantidadlamparas = txtIdCantidad.value;
    cantidadlamparas = parseInt(cantidadlamparas);
    marcalampara = Marca.value;
    preciototal = cantidadlamparas*35;
        
    if(cantidadlamparas>5) //A
    {
        preciofinal = preciototal - (preciototal*0.50);
        preciofinal = parseFloat(preciofinal);
        preciofinal = preciofinal.toFixed(2);
    }

    if(cantidadlamparas == 5 && marcalampara == "ArgentinaLuz") //B
    {
        preciofinal = preciototal - (preciototal*0.40);
        preciofinal = parseFloat(preciofinal);
        preciofinal = preciofinal.toFixed(2);
    }
    else
    {
        preciofinal = preciototal - (preciototal*0.30);
        preciofinal = parseFloat(preciofinal);
        preciofinal = preciofinal.toFixed(2);
    }

    if(cantidadlamparas == 4 && (marcalampara == "ArgentinaLuz" || marcalampara == "FelipeLamparas")) //C
    {
        preciofinal = preciototal - (preciototal*0.25);
        preciofinal = parseFloat(preciofinal);
        preciofinal = preciofinal.toFixed(2);
    }
    else
    {
        preciofinal = preciototal - (preciototal*0.20);
        preciofinal = parseFloat(preciofinal);
        preciofinal = preciofinal.toFixed(2);  
    }

    txtIdprecioDescuento.value = preciofinal;
}
