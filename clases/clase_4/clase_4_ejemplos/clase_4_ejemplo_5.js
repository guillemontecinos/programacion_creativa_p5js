// Programación Creativa usando p5.js
// Clase 4
// Ejemplo 5
// Video
// por Guillermo Montecinos y Coded Escuela

var video;

function setup(){
  createCanvas(640,480);
  video = createCapture(VIDEO);
  // video.hide();
}

function draw(){
  image(video,0,0);
  filter(INVERT);
}
