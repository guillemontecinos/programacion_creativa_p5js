// Programación Creativa usando p5.js
// Clase 3
// Ejemplo 1
// por Guillermo Montecinos y Coded Escuela

var fuente;
var texto = 'CODED';
var tamano = 100;
var box;
var cantidad = 4;
var alpha;

function preload(){ //función preload para cargar objetos previo a ejecutar setup (función asíncrona)
  fuente = loadFont('./assets/courier.otf'); //loadFont a¡carga un objeto font en la variable fuente.
}

function setup(){
  createCanvas(windowWidth,windowHeight); //usamos windowWidth y windowHeight para que el canvas sea del tamaño de la ventana del navegador
  // seteamos el texto
  textSize(tamano);
  textFont(fuente);
  // objeto caja
  box = fuente.textBounds(texto,0,0,tamano); //crea un objeto 'caja' que contiene las dimensiones de la caja que rodea el texto entregado, con la fuente y tamaño utilizados

}

function draw(){
  background(200);
  cantidad = map(mouseX,0,height,0,30); //cantidad es, en este caso, un valor decimal porque depende del mapeo de mouseX
  // angulo
  alpha = TWO_PI/cantidad; //el ángulo de separación entre los textos depende de cuántos elementos hay en pantalla
  // dibujamos el texto
  translate(width/2,height/2); //centramos el texto
    for (var i = 0; i < cantidad; i++) {
      push();
        rotate(alpha*i); //rotamos cada palabra según el alpha calculado
        // noFill();
        // rect(box.x,box.y+box.h/2,box.w,box.h); //podemos dibujar las cajas para ver sus bordes
        fill(0); //pintamos de negro el texto
        text(texto,0,box.h/2); //dibujamos texto
      pop();
    }

}
