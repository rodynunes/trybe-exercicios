let impostoInss;
let impostoIr;

let salarioBruto = 3500;

if (salarioBruto <= 1556.94){
    impostoInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92){
    impostoInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82){
    impostoInss = salarioBruto * 0.11;
} else {
    impostoInss = 570.88;
};

let salasioBase = salarioBruto - impostoInss;

if (salasioBase<= 1903.98){
    impostoIr = 0;
} else if (salasioBase<= 2826.65){
    impostoIr = (salasioBase * 0.075) - 142.80;
} else if (salasioBase<= 3751.05){
    impostoIr = (salasioBase * 0.15) - 354.80;
} else if (salasioBase<= 4664.68){
    impostoIr = (salasioBase * 0.225) - 636.13;
} else {
    impostoIr = (salasioBase * 0.275) - 869.36;
};

console.log('O salário líquido e: ' + (salasioBase - impostoIr));