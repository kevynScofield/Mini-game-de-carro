//imagens do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;

//sons

let somTrilha;
let somPontos;
let somColidiu;

function preload() {
  
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage ("imagens/ator-1.png");
  imagemDoCarro = loadImage ("imagens/carro-1.png")
  imagemDoCarro2 = loadImage ("imagens/carro-2.png")
  imagemDoCarro3 = loadImage ("imagens/carro-3.png")
      imagemCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2 ];

  somTrilha = loadSound ("sons/trilha.mp3")
  somPontos = loadSound ("sons/pontos.wav")
  somColidiu = loadSound ("sons/colidiu.mp3")
}