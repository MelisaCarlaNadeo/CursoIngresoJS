/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadocivilIngresado;
	var temperaturaIngresada;
	var maximaTemperatura;
	var primertemperaturaIngresada;
	var nombremayortemperatura;
	var contadorViudos;
	var contadorhombresSolyViu;
	var contadorterceraEdad;
	var sumaedadSolteros;
	var cantidadedadSolteros;
	var promedioedadSolteros;

	seguir = true;
	primertemperaturaIngresada = true;
	contadorViudos = 0;
	contadorhombresSolyViu = 0;
	contadorterceraEdad = 0;
	sumaedadSolteros = 0;
	cantidadedadSolteros = 0;

	while(seguir == true)
	{
		nombreIngresado = prompt("Ingrese el nombre del pasajero/a: ");
		edadIngresada = prompt("Ingrese la edad del pasajero/a: ");
		edadIngresada = parseInt(edadIngresada);

		while(isNaN(edadIngresada) || edadIngresada < 0)
		{
			edadIngresada = prompt("Error... Reingrese la edad del pasajero/a: ");
			edadIngresada = parseInt(edadIngresada);
		}

		sexoIngresado = prompt("Ingrese el sexo de su pasajero/a: f ó m ");

		while(sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt ("Error... Reingrese el sexo de su pasajero/a: f ó m ");
		}

		estadocivilIngresado = prompt("Ingrese el estado civil del pasajero/a: ");

		while(estadocivilIngresado != "soltero" && estadocivilIngresado != "casado" && estadocivilIngresado != "viudo")
		{
			estadocivilIngresado = prompt("Error... Reingrese el estado civil del pasajero/a: soltero/casado/viudo ");
		}
				
		temperaturaIngresada = prompt("Ingrese la temperatura corporal del pasajero/a: ");
		temperaturaIngresada = parseFloat(temperaturaIngresada);

		while(isNaN(temperaturaIngresada) || temperaturaIngresada < 35 || temperaturaIngresada > 40)
		{
			temperaturaIngresada = prompt("Error... Reingrese la temperatura corporal del pasajero/a: ");
			temperaturaIngresada = parseFloat(temperaturaIngresada);
		}

		seguir = confirm("Quiere ingresar otro pasajero?");
		
		if(temperaturaIngresada > maximaTemperatura || primertemperaturaIngresada == true) // a- pasajero con temperatura máxima
		{
			maximaTemperatura = temperaturaIngresada;
			nombremayortemperatura = nombreIngresado;
			primertemperaturaIngresada = false;
		}

		if(edadIngresada > 17 && estadocivilIngresado == "viudo")
		{
			contadorViudos ++;
		}

		if(sexoIngresado == "m" && (estadocivilIngresado == "soltero" || estadocivilIngresado == "viudo"))
		{
			contadorhombresSolyViu++;
		}

		if(edadIngresada > 60 && temperaturaIngresada > 37)
		{
			contadorterceraEdad++;
		}

		if(sexoIngresado == "m" && estadocivilIngresado == "soltero")
		{
			sumaedadSolteros = sumaedadSolteros + edadIngresada;
			cantidadedadSolteros++;
		}
	}

	promedioedadSolteros = sumaedadSolteros/cantidadedadSolteros;

	document.write("La persona con mayor temperatura es " + nombremayortemperatura + " con " + maximaTemperatura + "°. " + "<br>");
	document.write("Hay " + contadorViudos + " persona/s mayor/es de edad y viuda/s." + "<br>");
	document.write("Hay " + contadorhombresSolyViu + " hombres solteros o viudos." + "<br>");
	document.write("Hay " + contadorterceraEdad + " persona/s de la tercera edad que tienen más de 38°." + "<br>");
	document.write("El promedio de edad entre los hombres solteros es " + promedioedadSolteros + "<br>");
}
