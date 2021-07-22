/* Melisa Carla Nadeo División H
TP 12
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.  SI
B.	Sexo, “M” para masculino y “F” para femenino SI
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos SI
D.	Sueldo bruto, no menor a 8000. SI
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda. SI
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
    edadIngresada = parseInt(edadIngresada);
    while(isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90)
    {
        edadIngresada = prompt("Error...Reingrese su edad: ");
    }
    
    sexoIngresado = prompt("Ingrese su sexo f ó m: ");
    while(sexoIngresado != "f" && sexoIngresado != "m")
    {
        sexoIngresado = prompt("Error... Reingrese su sexo: ");
    }

    estadocivilIngresado = prompt("Ingrese su estado civil con el número que corresponda: 1-Soltero/a, 2-Casado/a, 3-Divorciado/a, 4-Viudo/a");
    while(isNaN(estadocivilIngresado) || estadocivilIngresado < 1 || estadocivilIngresado > 4)
    {
        estadocivilIngresado = prompt("Error... Reingrese su estado civil: ");
    }
   
    sueldobrutoIngresado = prompt("Ingrese su sueldo bruto: ");
    sueldobrutoIngresado = parseInt(sueldobrutoIngresado);
    while(isNaN(sueldobrutoIngresado) || sueldobrutoIngresado < 8000)
    {
        sueldobrutoIngresado = prompt("Error... Reingrese su sueldo bruto: ");
    }
    
    numerolegajoIngresado = prompt("Ingrese el número de su legajo: ");
    numerolegajoIngresado = parseInt(numerolegajoIngresado);
    while(isNaN(numerolegajoIngresado) || numerolegajoIngresado < 1000 || numerolegajoIngresado > 9999)
    {
        numerolegajoIngresado = prompt("Error... Reingrese el número de su legajo: ");
    }

    nacionalidadIngresada = prompt("Ingrese su nacionalidad con el número que corresponda: 1-argentina, 2-extranjera, 3-nacionalizado/a");
    nacionalidadIngresada = parseInt(nacionalidadIngresada);
    while(isNaN(nacionalidadIngresada) || nacionalidadIngresada < 1 || nacionalidadIngresada >3)
    {
        nacionalidadIngresada = prompt("Error... Reingrese su nacionalidad: ");
    }

    txtIdEdad.value = edadIngresada;
    txtIdSexo.value = sexoIngresado;
    txtIdEstadoCivil.value = estadocivilIngresado;
    txtIdSueldo.value = sueldobrutoIngresado;
    txtIdLegajo.value = numerolegajoIngresado;
    txtIdNacionalidad.value = nacionalidadIngresada;
}
