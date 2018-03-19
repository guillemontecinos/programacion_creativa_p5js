// Programación Creativa usando p5.js
// Clase 4
// Ejemplo 1
// por Guillermo Montecinos y Coded Escuela

var img;

function preload(){
  img = loadImage('./assets/iturbide_1.jpg');
}

function setup(){
  createCanvas(637,800);
  colorMode(HSB,1);
}

function draw(){
  background(0);
  // tint(map(mouseY,0,height,0,1),map(mouseX,0,width,0,1), 1);

  image(img,0,0);
  // filter(INVERT);
}
