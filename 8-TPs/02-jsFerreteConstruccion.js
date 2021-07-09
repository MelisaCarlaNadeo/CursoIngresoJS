/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var perimetroRectangulo;
	var rectanguloAlambre;

	largoTerreno = txtIdLargo.value;
	largoTerreno = parseFloat (largoTerreno);
	anchoTerreno = txtIdAncho.value;
	anchoTerreno = parseFloat (anchoTerreno);

	perimetroRectangulo = (largoTerreno * 2) + (anchoTerreno * 2);
	perimetroRectagulo = parseFloat (perimetroRectangulo);

	rectanguloAlambre = perimetroRectangulo * 3;
	rectanguloAlambre = parseFloat (rectanguloAlambre);
	alert("La cantidad de alambre a comprar es: " + rectanguloAlambre);

}
function Circulo () 
{
	var radioTerreno;
	var perimetroCircular;
	var circuloAlambre;

	radioTerreno = txtIdRadio.value;
	radioTerreno = parseFloat (radioTerreno);

	perimetroCircular = 2 * Math.PI * radioTerreno;
	perimetroCircular = parseFloat (perimetroCircular);

	circuloAlambre = perimetroCircular * 3;
	circuloAlambre = parseFloat (circuloAlambre);

	alert("La cantidad de alambre a comprar es: " + circuloAlambre);

}
function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var areaRectangulo;

}

/* txtIdLargo
txtIdAncho
txtIdRadio*/