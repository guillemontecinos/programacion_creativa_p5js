// Programación Creativa usando p5.js
// Clase 4
// Ejemplo 7
// Video
// por Guillermo Montecinos y Coded Escuela

var video;
var vScale = 6;

function setup(){
  createCanvas(640,480);
  pixelDensity(1);
  video = createCapture(VIDEO);

  video.size(width/vScale, height/vScale);
  // video.hide();
}

function draw(){
  background(0);
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (x + y * video.width) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var a = video.pixels[index + 3];
      var brillo = (r + g + b)/3;
      var colorPix = color(brillo);
      // set(x, y, colorPix);
      fill(colorPix);
      rect(x * vScale, y * vScale, vScale, vScale);
    }
  }
  // updatePixels();
}
