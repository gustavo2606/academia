function fnsaudacao(){
    let nomeCompleto = ("")
nomeCompleto = prompt("informe seu nome completo:")
alert("Seja bem vindo(a) " + nomeCompleto + " ao meu site! ")
}

 
function fnTrocarDeCorFundo() {
    let cor = prompt("Informe uma cor: \n 1-azul \n 2-Vermelho \n 3-preto \n 4-Verde \n 5-Rosa \n 6-Laranja")
    let corDeFundo = null
 
    if (cor == "1") {
        corDeFundo = "blue"
    }
    else if (cor == "2") {
        corDeFundo = "red"
    }
    else if (cor == "3") {
        corDeFundo = "black"
    }
    else if (cor == "4") {
        corDeFundo = "green"
    }
    else if (cor == "5") {
        corDeFundo = "pink"
    }
    else if (cor == "6") {
        corDeFundo = "orange"
    }
    else {
        corDeFundo = "yellow"
    }
    document.body.style.backgroundColor = corDeFundo
}

function fnMostrarHoraAtual(){
    const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, '0');
        const minutos = String(agora.getMinutes()).padStart(2, '0');
        const segundos = String(agora.getSeconds()).padStart(2, '0');
        
        alert(`Hora atual: ${horas}:${minutos}:${segundos}`);
    

    // Chama a função a cada 5 segundos (para não encher de alerts rapidamente)
    setInterval(mostrarHora, 5000);
} 

function fnTrocarTitulo(){
    document.getElementById("titulo").innerText = prompt ("")

}

function fnIdiomaPortugues(){
    document.getElementById("menu1").innerText = "INICIAL"
    document.getElementById("menu2").innerText = "SERVIÇOS"
    document.getElementById("menu3").innerText = "CONTATO"
}

function fnIdiomaIngles(){
    document.getElementById("menu1").innerText = "HOME"
    document.getElementById("menu2").innerText = "SERVICES"
    document.getElementById("menu3").innerText = "CONTACT"
}

function fnIdiomaJapones(){
    document.getElementById("menu1").innerText = "家"
    document.getElementById("menu2").innerText = "サービス"
    document.getElementById("menu3").innerText = "接触"
}

function fnBanner1(){
    document.getElementById("banner").src= "imagens/imagem1.jpg"
}

function fnBanner2(){
    document.getElementById("banner").src= "imagens/banner2.jpg"
}

function fnBanner3(){
    document.getElementById("banner").src= "imagens/banner3.jpg"
}

function fnRegistrarContato(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagem").value
    let informacoesCompleta = nome + " - " + email + "<br>" + mensagem
    document.getElementById("informacoes").innerHTML = informacoesCompleta
}