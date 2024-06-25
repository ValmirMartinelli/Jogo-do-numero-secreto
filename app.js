let listaDeNumerosSorteados = [];
let quantidadeNumeorsDisponiveis = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2} );
}
function exebirMnesagemFuncional(){
    exibirTextoNaTela("h1", "Jodo do numero secreto");
    exibirTextoNaTela(`p", "Escolha um numero entre 1 e ${quantidadeNumeorsDisponiveis}`);
}
exebirMnesagemFuncional()
function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou");
        let primeiraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você descobriu o numero secreto com ${tentativas} ${primeiraTentativa}`;
        exibirTextoNaTela("p",mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("h1", "Errouuu");
            exibirTextoNaTela("p", "O numero secreto é menor que o escolhido");
        }
        else{
            exibirTextoNaTela("h1", "Errouuu");
            exibirTextoNaTela("p", "O numero secreto é maior que o escolhido");
        }
        tentativas++
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeNumeorsDisponiveis + 1);
    let quantidadeDeElmentosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElmentosNaLista == quantidadeNumeorsDisponiveis){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
    
}
function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exebirMnesagemFuncional()
    document.getElementById("reiniciar").setAttribute("disabled", true);
}