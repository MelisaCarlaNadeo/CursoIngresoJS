function mostrar()
{
	var edadIngresada;
	edadIngresada = txtIdEdad.value;
	edadIngresada = parseInt (edadIngresada);

	if(edadIngresada >17)
	{
		alert("La persona es mayor de edad");
	}
	else
	{
		if(edadIngresada >12)
		{
			alert("La persona es adolescente");
		}
		else
		{
			alert("Es un niño");
		}
	}
}

//FIN DE LA FUNCIÓN