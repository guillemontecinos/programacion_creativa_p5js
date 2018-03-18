// Programación Creativa usando p5.js
// Clase 3
// Ejemplo 3
// por Guillermo Montecinos y Coded Escuela

var fuente;
var texto = 'CODED';
var tamano = 350;
var box;
var puntos;
var a = 7; //parámetro a de lissajou
var b = 5; //parámetro b de lissajou
var diamCircle = 9;
var rad = 10;

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
    sampleFactor: .25,
    simplifyThreshold: 0
  });
}

function draw(){
  randomSeed(0);
  background(200);
  // dibujamos el texto
  translate(width/2-box.w/2,height/2-box.y/2); //centramos el texto
  push();
    // noFill();
    // rect(box.x,box.y,box.w,box.h); //podemos dibujar las cajas para ver sus bordes
    fill(0); //pintamos de negro el texto
    for (var i = 0; i < puntos.length; i++) {
      push();
        translate(puntos[i].x + random(1,rad) * cos(random(1,a) * millis()/800),puntos[i].y + random(1,rad) * sin(random(1,b) * millis()/800)); //trasladamos cada elipse a la posición definida por la trayectoria de una curva lissajou
        ellipse(0, 0, diamCircle, diamCircle); //dibujamos un círculo en cada punto, cuyo diámetro variamos sinusoidalmente
      pop();
    }
  pop();
}
