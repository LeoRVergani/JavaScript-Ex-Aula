const numeros = [5, 2, 10, 21, 56, 78, 32];

let soma = numeros.reduce((acumulador, numero)=>{
    return acumulador + numero
}, 10);

let maiorNum = numeros.reduce((maior, num)=>{
    return Math.max(maior, num),0
})
console.log(soma)
console.log(maiorNum)