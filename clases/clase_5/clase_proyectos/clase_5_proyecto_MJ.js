var nPuntos = 3;
var nCirculos = 3;
var rCirculo = 100;
var alfa;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  nPuntos = int(map(mouseX, 0, width, 3, 100));
  nCirculos = int(map(mouseY, 0, height, 3, 8));
  alfa = TWO_PI/nPuntos;
  push();
  translate(width/2,height/2);
  for (var i = 0; i < nPuntos; i++) {
    for (var j = 1; j < nCirculos; j++) {
        line(j*rCirculo*cos(i*alfa), j*rCirculo*sin(i*alfa),j*rCirculo*cos((i+1)*alfa), j*rCirculo*sin((i+1)*alfa));
    }

  }
  pop();
}
