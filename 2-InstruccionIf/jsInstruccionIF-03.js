function mostrar()
{
	var edadIngresada;
	edadIngresada = txtIdEdad.value;
	edadIngresada = parseInt (edadIngresada);

	if(edadIngresada > 17)
	{
		alert("La persona es mayor de edad");
	}
	else
	{
		alert("La persona es menor de edad");
	}

}//FIN DE LA FUNCIÓN