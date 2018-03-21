// repaso
//  21 de marzo

var texto = 'Hola';
var fuente;
var caja;

function preload(){
  fuente = loadFont('./assets/courier.otf');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  caja = fuente.textBounds(texto,0,0,100);
  textSize(100);
  textFont(fuente);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);
}

function draw(){
  background(200);
  translate(width/2,height/2);
  fill(0);
  text(texto, 0,0);
  noFill();
  rect(0,0, caja.w, caja.h);
}
