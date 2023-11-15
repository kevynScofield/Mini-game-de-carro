//ator
let yAtor = 368;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;
function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 28, 28);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
    
  }
  if (keyIsDown(DOWN_ARROW)){
    
    if (podeSeMover()){
        yAtor += 3;
    }
  }
}

function verificaColisão() {
  
  for (let i = 0; i < imagemCarros.length;i++ ){
    
      colisao = collideRectCircle(xCarros[i], yCarros[i],       comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
     if (colisao){
       voltaAtorParaPosicaoInicial();
        somColidiu.play();
      
       if (pontosMaiorQueZero()){
       meusPontos -= 1
       }
     }
   } 
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos() {
    textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 30);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somPontos.play()
    voltaAtorParaPosicaoInicial();
  }

}

function pontosMaiorQueZero(){
    return meusPontos > 0;
}    
function podeSeMover () {
  return yAtor < 368
  
}