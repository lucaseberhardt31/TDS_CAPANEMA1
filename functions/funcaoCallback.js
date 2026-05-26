function executarOperacao(a, b, operacao){
    return operacao(a, b);
}
function multiplicar(a, b){
    return a * b;
}

function somar(a, b){
    return a + b;
}

let resultado = executarOperacao(4, 5, multiplicar);
let resultadosoma = executarOperacao(4, 5, somar);

console.log("O resultado final é: ", resultado);
console.log("O resultado final é: ", resultadosoma);