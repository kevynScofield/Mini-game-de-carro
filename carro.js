let yCarros = [40, 96, 150, 210, 270]
let velocidadeCarros = [7, 3 , 4, 5 , 6.]
let xCarros = [420, 420 , 420, 420, 420 ]
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0;i < imagemCarros.length;i++ ){
image(imagemCarros[i], xCarros[i], yCarros[i] ,comprimentoCarro , alturaCarro)
 
  }
}

function movimentaCarro(){
  for (let i = 0;i < imagemCarros.length;i++ )
    xCarros[i] -= velocidadeCarros[i]
    
}

function voltaPosicaoInicialDoCarro(){
    for (let i = 0;i < imagemCarros.length;i++){
      if (passouTodaTela(xCarros[i])){
          xCarros[i] = 600
    }
  }
}

function passouTodaTela (xCarros) {
  
  return xCarros < -50
  
}