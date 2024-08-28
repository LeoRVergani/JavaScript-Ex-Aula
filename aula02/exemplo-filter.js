const pessoas = [
    {nome: "Ana", idade: 24},
    {nome: "Bento", idade: 17},
    {nome: "Leonardo", idade: 22},
    {nome: "Maria", idade: 19},
]

const pessoasFiltradas =  pessoas.filter(pessoa => {
    return pessoa.idade >= 18 && pessoa.idade <=  22
})

console.log(pessoasFiltradas)

const pessoasFiltradasAo = pessoas.filter(pessoa => {
    return pessoa.nome.includes("a") && pessoa.nome.includes("o")
})

console.log(pessoasFiltradasAo)