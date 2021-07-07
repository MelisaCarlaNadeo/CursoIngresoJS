/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var Sueldo;
	var Aumento;
	var Resultado;

	Sueldo = txtIdSueldo.value;
	
	Sueldo = parseInt(Sueldo);
	

	Aumento = (Sueldo * 0.10);
	
	
	Resultado = Sueldo + Aumento;
	

	document.getElementById("txtIdResultado").value = Resultado;

}




	
