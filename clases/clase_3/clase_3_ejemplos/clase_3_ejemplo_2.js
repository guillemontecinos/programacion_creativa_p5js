// Programación Creativa usando p5.js
// Clase 3
// Ejemplo 2
// por Guillermo Montecinos y Coded Escuela

var fuente;
var texto = 'CODED';
var tamano = 350;
var box;
var puntos;

function preload(){ //función preload para cargar objetos previo a ejecutar setup (función asíncrona)
  fuente = loadFont('./assets/courier.otf'); //loadFont a¡carga un objeto font en la variable fuente.
}

function setup(){
  createCanvas(windowWidth,windowHeight); //usamos windowWidth y windowHeight para que el canvas sea del tamaño de la ventana del navegador
  // seteamos el texto
  textSize(tamano);
  textFont(fuente);
  // objeto caja
  box = fuente.textBounds(texto,0,0,tamano);
  // arreglo de puntos: función textToPoints devuelve un arreglo de puntos
  puntos = fuente.textToPoints(texto, 0, 0, tamano, {
    sampleFactor: .1,
    simplifyThreshold: 0
  });
}

function draw(){
  background(200);
  // dibujamos el texto
  translate(width/2-box.w/2,height/2-box.y/2); //centramos el texto
  push();
    // noFill();
    // rect(box.x,box.y,box.w,box.h); //podemos dibujar las cajas para ver sus bordes
    fill(0); //pintamos de negro el texto
    for (var i = 0; i < puntos.length; i++) {
      var diam = map(sin(millis()/500 + i*PI/10),-1,1,3,15);
      ellipse(puntos[i].x, puntos[i].y, diam, diam); //dibujamos un círculo en cada punto, cuyo diámetro variamos sinusoidalmente
    }
  pop();
}
