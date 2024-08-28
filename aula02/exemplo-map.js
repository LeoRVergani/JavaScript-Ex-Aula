// const numeros = [5, 2, 10, 21, 13, 48]

/**
 * quando usar?
 * 
 * Sempre que for necessário iterar (passar) por cada um dos
 * itens sem modificar o array original
 * 
 * 1º parâmetro - item atual
 * 2º parâmetro - index do item atual
 * 3º parâmetro - array inteiro com todos os itens
 */
// numeros.map((numeroAtual, index, arrayInteiro) => {
//     console.log(`${index} - ${numeroAtual} - ${arrayInteiro}`)
// })

// // criando um array com o dobro
// const dobro = numeros.map(numeroAtual => numeroAtual * 2)

// console.log(dobro)
// console.log(numeros)

/* exercício:
Dado o array de numeros:

const numeros = [5, 2, 10, 21, 13, 48]

Crie um novo array usando o método map com
somente os número pares.
*/

const numeros = [5, 2, 10, 21, 13, 48]

const numerosPares = []

numeros.map(numeroAtual => {
    if(numeroAtual % 2 == 0){
        numerosPares.push(numeroAtual)
    }
})

console.log(numerosPares)