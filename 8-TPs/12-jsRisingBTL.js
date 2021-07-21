/* Melisa Carla Nadeo División H
TP 12
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edadIngresada;
 	var sexoIngresado;
 	var estadocivilIngresado;
    var sueldobrutoIngresado;
    var numerolegajoIngresado;
    var nacionalidadIngresada;

    edadIngresada = prompt("Ingrese su edad: ");
    while(isNan(edadIngresada) || edadIngresada<18 || edadIngresada>90) //ver uso de isNan
    {
        edadIngresada = parseInt(edadIngresada);
        edadIngresada = prompt("Error...Reingrese su edad: ");
    }
    txtIdEdad.value = edadIngresada;

    sexoIngresado = prompt("Ingrese su sexo f ó m: ");
    while(sexoIngresado != "f" && sexoIngresado != "m")
    {
        sexoIngresado = prompt("Error... Reingrese su sexo: ");
    }
    txtIdSexo.value = sexoIngresado;

    estadocivilIngresado = prompt("Ingrese su estado civil con el número que corresponda: 1-Soltero, 2-Casado, 3-Divorciado, 4-Viudo");
    while(isNan(estadocivilIngresado) || estadocivilIngresado < 1 || estadocivilIngresado > 4)
    {
        estadocivilIngresado = prompt("Error... Reingrese su estado civil: ");
    }
    txtIdEstadoCivil.value = estadocivilIngresado;

    sueldobrutoIngresado = prompt("Ingrese su sueldo bruto: ");
    sueldobrutoIngresado = parseInt(sueldobrutoIngresado);
    while(isNan(sueldobrutoIngresado) || sueldobrutoIngresado < 8000)
    {
        sueldobrutoIngresado = prompt("Error... Reingrese su sueldo bruto (no menor a $8000): ");
    }
    txtIdSueldo.value = sueldobrutoIngresado;


}

