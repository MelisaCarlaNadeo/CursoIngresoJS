function mostrar()
{
	var edadIngresada;
	edadIngresada = txtIdEdad.value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada<13 || edadIngresada>17)
	{
		alert("La persona NO es adolescente");
	}

}//FIN DE LA FUNCIÓN