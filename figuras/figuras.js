/* Codigo del cuadrado */
console.groupCollapsed("Cuadrado");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
function PC(lado){
    return lado * 4;
} 
console.log(`El perimetro del cadrado es: ${PC(ladoCuadrado)} cm`);

function AC(lado){
    return lado * lado;
}
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`El área del cadrado es: ${AC(ladoCuadrado)} cm^2`);
console.groupEnd("Cuadrado");

/* Código del triangulo */
console.groupCollapsed("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
function PT(lado1, lado2, base){
    return lado1 + lado2 + base;
}
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

function AT(base, altura){
    return (base * altura)/2;
}
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(`Los lados del triangulo miden: Lado 1: ${ladoTriangulo1} cm, Lado 2: ${ladoTriangulo2} cm, Base: ${baseTriangulo} cm`);
console.log(`La altura del triangulo es de: ${alturaTriangulo} cm`);
console.log(`El perimetro del triangulo es: ${PT(ladoTriangulo1, ladoTriangulo2, baseTriangulo)} cm`);
console.log(`El área del triangulo es: ${AT(baseTriangulo, alturaTriangulo)} cm`);

console.groupEnd("Triangulo");

/* Código del circulo */
console.group("Circulo");
const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;
const PI = Math.PI;

function PCir(diametro){
    return diametro * Math.PI;
}
const perimetroCirculo = diametroCirculo * PI;

function ACir(radio) {
    return Math.PI * (Math.pow(radio, 2));
}
const areaCirculo = PI * (Math.pow(radioCirculo, 2));
console.log(`El radio del circulo es: ${radioCirculo}`);
console.log(`EL diametro del circulo es: ${diametroCirculo}`);
console.log(`PI vale: ${PI}`);
console.log(`El perimetro del circulo (su circunferencia) vale: ${PCir(diametroCirculo)}`);
console.log(`El área del circulo vale: ${ACir(radioCirculo)}`);

console.groupEnd("Circulo");