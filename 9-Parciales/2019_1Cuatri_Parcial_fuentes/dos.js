function mostrar()
{
	var Nombre1;
 	var Nombre2;
 	var Peso1;
 	var Peso2;
 	var SumaPeso;
 	var Promedio;

 	Nombre1 = prompt ("Su nombre es:");
 	Nombre2 = prompt ("El nombre de su pareja es:");
 	Peso1 = prompt ("Su peso es:");
 	Peso2 = prompt ("El peso de su pareja es:");

 	Peso1 = parseFloat (Peso1);
 	Peso2 = parseFloat (Peso2);

 	SumaPeso = Peso1 + Peso2;
 	SumaPeso = parseFloat (SumaPeso);

 	Promedio = SumaPeso / 2;
 	Promedio = parseFloat (Promedio);

 	alert("Ustedes se llaman " + Nombre1 + " y " + Nombre2 + " pesan " + Peso1 + " y " + Peso2 + " kilos, que sumados son " + SumaPeso + " kilos y el promedio de peso " + Promedio + "."); 
}
