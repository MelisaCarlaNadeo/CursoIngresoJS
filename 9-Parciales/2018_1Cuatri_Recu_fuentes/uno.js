
function mostrar()
{
 	var anchoRectangulo;
 	var largoRectangulo;
 	var perimetroRectangulo;

 	anchoRectangulo = prompt ("Ingrese el ancho del rectángulo");
 	largoRectangulo = prompt ("Ingrese el largo del rectángulo");
 	anchoRectangulo = parseFloat (anchoRectangulo);
 	largoRectangulo = parseFloat (largoRectangulo);

	perimetroRectangulo = (anchoRectangulo * 2) + (largoRectangulo * 2);
	perimetroRectangulo = parseFloat (perimetroRectangulo);

	alert ("El perímetro del rectángulo es: " + perimetroRectangulo); 
}
