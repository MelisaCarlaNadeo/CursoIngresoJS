
function mostrar()
{
	var Lado;
	var Perímetro;

	Lado = prompt ("Ingrese los lados de su triángulo equilátero");
	Lado = parseInt (Lado);

	Perímetro = Lado + Lado + Lado;
	alert("El perímetro de su triángulo equilátero es: " + Perímetro);
}
