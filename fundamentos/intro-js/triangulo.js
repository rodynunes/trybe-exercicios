const anguloA = 20;
const anguloB = 70;
const anguloC = 90;

let triangulo = anguloA + anguloB + anguloC;

let positivo = anguloA > 0 && anguloB > 0 && anguloC > 0;

If (positivo) {
    if (triangulo === 180) {
        console.log (true);
    } else {
        console.log (false);
    };
} else {
    console.log ('Erro: não é um triangulo');
} 
