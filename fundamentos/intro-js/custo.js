const custo = 5;
const venda = 15;

if (custo >= 0 && venda >= 0){
    const totalDoCusto = custo * 1.2;
    const totallucro = (venda - totalDoCusto) * 1000;
    console.log(totallucro);
} else {
    console.log("Os valores não podem ser negativos, teremos prejuizo!")
}