

// aqui estou criando uma função para saber se o número informado pertence ao Fibonacci ou não, como parâmetro, estou c
function pertenceFibonacci(numero) {

    let antes = 0;
    let atual = 1;

    while (atual < numero) {
        let proximo = antes + atual;
        antes = atual;
        atual = proximo;
    }

    if (atual === numero) {
        return true
    } else {
        return false
    }

}


// aqui, inicieei a constante com o numero inicial com o valor de 14, dai que conseguiremos saber se ele pertence ou não
const numeroInicial = 14;

// aqui, criei uma constante que utiliza a função para descobrir se o numero informado pertence ou não pertence ao Fibonacci
const descobrir = pertenceFibonacci(numeroInicial);

// agora estou fazendo uma validação, para saber se o numero que foi informado pertence ou não
if (descobrir) {
    // pode perceber que estou utilizando `${}` isso é outra forma de escrever (numeroInicial + ": Pertence ao Fibonacci")
    console.log(`${numeroInicial}: Pertence ao Fibonacci`);
} else {
    console.log(`${numeroInicial}: Não pertence ao Fibonacci`);
}

// conclusão, como coloquei a validação da variável atual === numero, caso seja true, ele vai informar ue partence, caso seja false, vai informar ue não pertence
