// Video catching experiments
// Guillermo Montecinos
// for p5.js introductory course

var video;

function setup(){
  createCanvas(640,480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width,height);
  video.hide();
  noCursor();
}

function draw(){
  // background(255,255,255,5);
  background(255,5);

  video.loadPixels();
  loadPixels();
  translate((width-video.width)/2,0);
  for(var y = 0; y < video.height; y++){
    for (var x = 0; x < video.width; x++) {
      var index = (x + y*video.width)*4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var a = video.pixels[index + 3];

      var brillo = (r+g+b)/3;

      // if(random(1) > map(mouseY,0,height,0,1) && frameCount % 3 == 0){
      if(random(1) > map(mouseY,0,height,0,1) && frameCount % 3 == 0 && brillo < map(mouseY,0,height,0,255)){
      // if((brillo < map(mouseY,0,height,0,100) && frameCount % 3 == 0)){
      // if(brillo < map(mouseY,0,height,0,100)){
        pixels[index + 0] = r * map(mouseX,0,width,1,3);
        pixels[index + 1] = g * map(mouseX,0,width,1,3);
        pixels[index + 2] = b * map(mouseX,0,width,1,3);
        pixels[index + 3] = 255;
      }
    }
  }
  updatePixels();
}