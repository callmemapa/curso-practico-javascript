// Código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área de mi cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del triángulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 + "cm, " 
//     + ladoTriangulo2 + "cm, "
//     + baseTriangulo + "cm"
// )

// console.log("La altura de mi triángulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + lado3;
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro de mi triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área de mi triángulo es: " + areaTriangulo + "cm^2")

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio de mi círculo es: " + radioCirculo + "cm");

// Diamétro

function diametroCirculo(radio) {
    return radio * 2;
}

// const diametroCirculo = radioCirculo*2;
// console.log("El diámetro de mi círculo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
// console.log("PI es: " + PI + "cm");

// Circunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro de mi círculo es: " + perimetroCirculo + "cm");

// Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// const areaCirculo = PI * (radioCirculo * radioCirculo);
// console.log("El área de mi círculo es: " + areaCirculo + "cm^2");

console.groupEnd();

// Aquí interactuamos con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    document.getElementById("perimetroCuadrado").innerHTML = "El perímetro del cuadrado es: " + perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    document.getElementById("areaCuadrado").innerHTML = "El área del cuadrado es: " + area;
}

// Función para calcular la altura de un triángulo isosceles
function calcularAlturaTriangulo() {
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;

    var resultadoTrianguloIsosceles;

    if (lado1 !== lado2) {
        alert("Los dos lados del triángulo deben coincidir para que sea isosceles.");
    } else if (lado1 === base) {
        alert("Los lados de un triángulo isosceles no pueden ser todos iguales, eso lo convertiría en un triángulo equilatero.");
    } else {
        resultadoTrianguloIsosceles = Math.sqrt((lado1 * lado1)-((base * base) / 4));
        document.getElementById("alturaTrianguloIsosceles").innerHTML = "La altura del triángulo es: " + resultadoTrianguloIsosceles;
    }
}