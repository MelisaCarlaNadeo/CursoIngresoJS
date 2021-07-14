/*Melisa Carla Nadeo Div H
If Ejericio 7
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/
function mostrar()
{
	var edadIngresada;
	var estadoIngresado;

	edadIngresada = txtIdEdad.value;
	edadIngresada = parseInt(edadIngresada);
	estadoIngresado = estadoCivil.value;

	if(edadIngresada<18 && estadoIngresado != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

}
//FIN DE LA FUNCIÓN txtIdEdad
