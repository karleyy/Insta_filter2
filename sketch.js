var text2;
function setup () {
  createCanvas(400,400)
  capture = createCapture (VIDEO);
  text2 = createGraphics(400,300);
  capture.size(400,300);
}

function draw() {
  background(220,200, 34);
  capture.loadPixels();
  text2.fill(120, 140, 255);
  text2.textSize(40);
  text2.text("perfect dayy",150,150);
  var stepSize = 9;
  for (var x = 0; x < capture.width; x += stepSize){
   for (var y =0; y < capture.height; y+= stepSize){
     var index = ((y*capture.width )+x)*4;
     var redVal = capture.pixels [index];
     var greenVal = capture.pixels [index +1];
     var blueVal = capture.pixels [index +2];
     fill(redVal, greenVal, blueVal);
     ellipse(x,y,stepSize);
    }


  }
     image(text2, 0,0);
}