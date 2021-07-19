/* Melisa Carla Nadeo División H
TP4 SWITCH
4.	Para el departamento de iluminación:
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
    var descuento;
    var preciototal;
    var preciofinal;
    var impuestoIIBB;
    var precioIIBB;   
    
    cantidadlamparas = txtIdCantidad.value;
    cantidadlamparas = parseInt(cantidadlamparas);
    marcalampara = Marca.value;
    preciototal = cantidadlamparas*35;
        
    switch(cantidadlamparas)
    {
        case 1:
        case 2:
            descuento = 0;
        break;
        case 3:
            switch(marcalampara)
            {
                case "ArgentinaLuz":
                    descuento = 15;
                break;
                case "FelipeLamparas":
                    descuento = 10;
                break;
                default:
                    descuento = 5;
                break;
            }
        break;
        case 4:
            switch (marcalampara)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                break;
                default:
                    descuento = 20;
                break;
            }
        break;
        case 5:
            switch (marcalampara)
            {
                case "ArgentinaLuz":
                    descuento = 40;
                break;
                default:
                    descuento = 30;
                break;
            }
        break;
        default:
            descuento = 50;
        break;
    }
    
    preciofinal = preciototal - (preciototal * descuento/100);
    
    if(preciofinal > 120)
    {
        impuestoIIBB = preciofinal *0.10;
        precioIIBB = preciofinal + impuestoIIBB;
        txtIdprecioDescuento.value = precioIIBB;
        alert("IIBB Usted pago " + impuestoIIBB);
    } 
    else
    {
        txtIdprecioDescuento.value = preciofinal;
    }
}
 
/*{
    var cantidadlamparas;
    var marcalampara;
    var preciototal;
    var preciofinal;
    var impuestoIIBB
    var precioIIBB;   
    
    cantidadlamparas = txtIdCantidad.value;
    cantidadlamparas = parseInt(cantidadlamparas);
    marcalampara = Marca.value;
    preciototal = cantidadlamparas*35;
        
    if(cantidadlamparas >= 6) //A
    {
        preciofinal = preciototal - (preciototal*0.50);
    }
    else 
    {
        if(cantidadlamparas == 5) //B
        {
            if(marcalampara == "ArgentinaLuz")
            {
                preciofinal = preciototal - (preciototal*0.40);
            }
            else 
            {
                preciofinal = preciototal - (preciototal*0.30);
            }
        }
        if(cantidadlamparas == 4) //C
        {
            if(marcalampara == "ArgentinaLuz" || marcalampara == "FelipeLamparas")
            {
                preciofinal = preciototal - (preciototal*0.25);
            }
            else
            {
                preciofinal = preciototal - (preciototal*0.20);
            }
        }
        if(cantidadlamparas == 3) //D
        {
            if(marcalampara == "ArgentinaLuz")
            {
                preciofinal = preciototal - (preciototal*0.15);
            }
            else if(marcalampara == "FelipeLamparas")
            {
                preciofinal = preciototal - (preciototal*0.10);
            }
            else
            {
                preciofinal = preciototal - (preciototal*0.05);
            }
        }
        if(cantidadlamparas == 2 || cantidadlamparas == 1);
        {
            preciofinal = preciototal;
        }
    }
    preciofinal = parseFloat(preciofinal);
    preciofinal = preciofinal.toFixed(2);
    txtIdprecioDescuento.value = preciofinal; 
    impuestoIIBB = preciofinal *0.10;
    impuestoIIBB = parseFloat(impuestoIIBB);
    impuestoIIBB = impuestoIIBB.toFixed(2);

    if(preciofinal > 120)
    {
        precioIIBB = preciofinal + impuestoIIBB;
        precioIIBB = parseFloat(precioIIBB);
        precioIIBB = precioIIBB.toFixed(2);
        txtIdprecioDescuento.value = precioIIBB;
        alert("IIBB Usted pago " + impuestoIIBB);
    } 
}*/

/*{
    var cantidadlamparas;
    var marcalampara;
    var descuento;
    var preciototal;
    var preciofinal;
    var impuestoIIBB;
    var precioIIBB;   
    
    cantidadlamparas = txtIdCantidad.value;
    cantidadlamparas = parseInt(cantidadlamparas);
    marcalampara = Marca.value;
    preciototal = cantidadlamparas*35;
        
    switch(cantidadlamparas)
    {
        case 1:
        case 2:
            descuento = 0;
        break;
        case 3:
            if(marcalampara == "ArgentinaLuz")
            {
                descuento = 15;
            }
            else if(marcalampara == "FelipeLamparas")
            {
                descuento = 10;
            }
            else
            {
                descuento = 5;
            }
        break;
        case 4:
            if(marcalampara == "ArgentinaLuz" || marcalampara == "FelipeLamparas")
            {
                descuento = 25;
            }
            else
            {
                descuento = 20;
            }
        break;
        case 5:
            if(marcalampara == "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
        break;
        default:
            descuento = 50;
        break;
    }
    
    preciofinal = preciototal - (preciototal * descuento/100);
    
    if(preciofinal > 120)
    {
        impuestoIIBB = preciofinal *0.10;
        precioIIBB = preciofinal + impuestoIIBB;
        txtIdprecioDescuento.value = precioIIBB;
        alert("IIBB Usted pago " + impuestoIIBB);
    } 
    else
    {
        txtIdprecioDescuento.value = preciofinal;
    }
}*/