let imagens = [
    "imagens/game1/personagem-blender.png",
    "imagens/game1/esqueleto-blender.png",
    "imagens/game1/cenario-geometry-nodes.png",
    "imagens/game1/bau-animation-poster.jpg",
    "imagens/game1/slime-blender.png",
    "imagens/game1/modelo.png",
];

let imagemDoSite = document.getElementById("imagemDoSite");
let indiceAtual = 0;
let botaoProximo = document.getElementById("botaoProximo");
let botaoAnterior = document.getElementById("botaoAnterior");

if (imagemDoSite && botaoProximo && botaoAnterior) {

    botaoProximo.addEventListener("click", function () {
        indiceAtual++;

        if (indiceAtual >= imagens.length) {
            indiceAtual = 0;
        }

        atualizarImagem();
    });

    botaoAnterior.addEventListener("click", function () {
        indiceAtual--;

        if (indiceAtual < 0) {
            indiceAtual = imagens.length - 1;
        }

        atualizarImagem();
    });

    function atualizarImagem() {
        imagemDoSite.src = imagens[indiceAtual];
    }
}
const botaoMenu = document.querySelector(".botao-menu");
const menuTutorial = document.querySelector("aside");

if (botaoMenu && menuTutorial) {
    botaoMenu.addEventListener("click", function () {
        menuTutorial.classList.toggle("menu-aberto");
    });
}