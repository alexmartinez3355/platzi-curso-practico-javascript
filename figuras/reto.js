function calcularAltura(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;
    if(lado1 == lado2 && lado1 > base){
        const catetoOpuesto = base/2;
        const hipotenusa = lado2;
        const altura = Math.sqrt((Math.pow(hipotenusa, 2) - Math.pow(catetoOpuesto, 2)));
        alert("La altura del triangulo es: "+altura)
    }
    else {
        alert("Ese no es un triángulo isóceles");
    }
}