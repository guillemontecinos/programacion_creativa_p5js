// Programación Creativa usando p5.js
// Clase 4
// Ejemplo 4
// por Guillermo Montecinos y Coded Escuela

var foto; //variable que contiene la imagen
var vScale = 8; //variable que define la proporción en que se pixela la imagen

function preload(){
  foto = loadImage('./assets/iturbide_1.jpg'); //cargamos la imagen utilizando la función loadImage() dentro de preload()
}

function setup(){
  createCanvas(637,800);
  foto.resize(width/vScale, height/vScale); //hacemos un truco (copiado de Shiffman): escalamos la imagen en la proporción vScale
  //luego al dibujar la imagen, recorremos cada pixel, y lo reemplazamos por cuadrados de alto y ancho de vScale.
  //en resumen, vScale indica cuandos pixeles de la imagen caben en un pixel de la imagen escalada
  noStroke();
  rectMode(CENTER);
}

function draw(){
  background(0);
  foto.loadPixels(); //cargamos los pixeles de la imagen en un arreglo de pixeles

  for (var y = 0; y < foto.height; y++) {
    for (var x = 0; x < foto.width; x++) {
      var index = (x + y * foto.width) * 4;
      var r = foto.pixels[index + 0];
      var g = foto.pixels[index + 1];
      var b = foto.pixels[index + 2];
      var a = foto.pixels[index + 3];

      var brillo = (r + g + b)/3; //calculamos el brillo, que corresponde al promedio de los 3 párametros RGB -> convertimos cada pixel a escala de grises

      var diam = map(brillo, 0, 255, vScale * .1, vScale * .9); //diam es el ancho y alto del rectángulo. tamaño de c/rect depende del brillo
      push();
        translate(vScale/2, vScale/2); //corremos cada pixel la mitad de su ancho y alto para que queden centrados
        rect(x * vScale, y * vScale, diam, diam); //cada pixel es un cuadrado de ancho y alto vScale
      pop();
    }
  }
  updatePixels();
  // image(foto,0,0);
}
