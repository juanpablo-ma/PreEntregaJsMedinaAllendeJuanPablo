
function calcularPromedioDeClase(nota1, nota2, nota3, nota4, nota5){
    const total = nota1 + nota2 + nota3 + nota4 + nota5;
    return total / 5
}

let repetir = true;

while (repetir) {

    let nota1 = parseFloat(prompt("Ingrese la nota del alumno 1:"));
    let nota2 = parseFloat(prompt("Ingrese la nota del alumno 2:"));
    let nota3 = parseFloat(prompt("Ingrese la nota del alumno 3:"));
    let nota4 = parseFloat(prompt("Ingrese la nota del alumno 4:"));
    let nota5 = parseFloat(prompt("Ingrese la nota del alumno 5:"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5)) {
        alert("Por favor, ingresar solo numeros como valores para cada nota");
    } 

    else if 
        (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10 || nota5 < 0 || nota5 > 10)
        {
            alert("Esta calculadora solo admite notas en el rango de 0 a 10, incluyendo valores decimales")
        }

    else {
        let promedioGeneral = calcularPromedioDeClase(nota1, nota2, nota3, nota4, nota5);

        alert("El promedio general de esta clase es de :" + " " + promedioGeneral.toFixed(2))
        }

    let respuesta = prompt("Escriba salir para finalizar el programa").toLowerCase();

    if (respuesta == "salir") {repetir = false;}
    
}

alert("Programa finalizado.");