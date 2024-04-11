
// aqui estou criando uma função que recebe o parâmetro string, que seria o nome ou frase que vai ser informado
function inverterString(string) {
    // aqui estou declarando uma variável "stringInvertida" com o valor vazio, pois ela vai receber o nome ou frase informada invertida
    let stringInvertida = "";

    // aqui estou utilizando o for para percorrer de trás para frente a string (nome ou frase informado) - 1, e coloquei - 1 pois como sabemos sempre começa pelo 0 e colocando string.length -1, ele vai começar da última posição da string,
    for (let i = string.length - 1; i >= 0; i--) {
        // aqui estou concatenando cada caractere na posição que o loop for está passando, exemplo: como meu nome Leonardo tem 8 caracteres, ele vai pegar a posição do caractere da string (como se fosse um array), começando pelo pela posição 7
        // que seria o último caractere e vai concatenando, conforme for passando de trás para frente.
        stringInvertida += string[i];
    }

    // aqui ele vai retornar a variável que está contendo toda string invertida para se usada fora da função
    return stringInvertida;
}

// aqui estou usando as constantes para fazer as visualizações, da nome normal, e ele invertido
const stringOriginal = "Leonardo";
const stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);