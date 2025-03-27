console.log("Gustavo")
console.log("17")
console.warn("atenção")
console.error("um erro") 

let nome = "Gustavo"
let idade = 38
let telefone = null
console.log(nome,idade)
nome = "Gustavo Ribeiro"
console.log(nome)

let nomeCompleto = ""
nomeCompleto = prompt("informe seu nome completo")
console.log("nomeCompleto")
//alert("seja bem vindo(a)" + nomeCompleto)
//document.write("seja bem vindo(a)" +  nomeCompleto)
let cor = prompt("informe uma cor: \n 1 azul \n 2 vermelho \n 3 preto \n 4 verde \n 5 rosa \n 6 roxo")
let corDeFundo = null

if(cor == "1"){
    corDeFundo = "blue"
}else if(cor == "2"){
    corDeFundo = "red"
}else if(cor == "3"){
    corDeFundo = "black"
}else if(cor == "4"){
    corDeFundo = "green"
}else if(cor == "5"){
    corDeFundo = "pink"
}else if(cor == "6"){
    corDeFundo = "Purple"
}





document.body.style.backgroundColor = corDeFundo

