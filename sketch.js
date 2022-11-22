let mic;

let started = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  background(0);

  let EllipseX = width / 34;
  let EllipseY = height / 23;
  let EllipseSize = vol;

  //vertical
  drawEllipse(EllipseX, EllipseY * 21, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 16, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 22, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 18, EllipseSize);
  drawEllipse(EllipseX * 13, EllipseY * 15, EllipseSize);
  drawEllipse(EllipseX * 13, EllipseY * 21, EllipseSize);
  drawEllipse(EllipseX * 16, EllipseY * 19, EllipseSize);
  drawEllipse(EllipseX * 17, EllipseY * 12, EllipseSize);
  drawEllipse(EllipseX * 20, EllipseY * 18, EllipseSize);
  drawEllipse(EllipseX * 22, EllipseY * 21, EllipseSize);
  drawEllipse(EllipseX * 24, EllipseY * 17, EllipseSize);
  drawEllipse(EllipseX * 25, EllipseY * 20, EllipseSize);
  drawEllipse(EllipseX * 28, EllipseY * 16, EllipseSize);
  drawEllipse(EllipseX * 30, EllipseY * 19, EllipseSize);
  drawEllipse(EllipseX * 33, EllipseY * 22, EllipseSize);

  function drawEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 4, vol * 50);
    console.log(vol);
    //look up lerp for smoothness
  }

  function drawOtherEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(200);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 10, vol * 10);
    console.log(vol);
  }
  //Horizontal
  drawHorizontalEllipse(EllipseX, EllipseY * 21, EllipseSize);
  drawHorizontalEllipse(EllipseX * 4, EllipseY * 16, EllipseSize);
  drawHorizontalEllipse(EllipseX * 7, EllipseY * 22, EllipseSize);
  drawHorizontalEllipse(EllipseX * 9, EllipseY * 18, EllipseSize);
  drawHorizontalEllipse(EllipseX * 13, EllipseY * 15, EllipseSize);
  drawHorizontalEllipse(EllipseX * 13, EllipseY * 21, EllipseSize);
  drawHorizontalEllipse(EllipseX * 16, EllipseY * 19, EllipseSize);
  drawHorizontalEllipse(EllipseX * 17, EllipseY * 12, EllipseSize);
  drawHorizontalEllipse(EllipseX * 20, EllipseY * 18, EllipseSize);
  drawHorizontalEllipse(EllipseX * 22, EllipseY * 21, EllipseSize);
  drawHorizontalEllipse(EllipseX * 24, EllipseY * 17, EllipseSize);
  drawHorizontalEllipse(EllipseX * 25, EllipseY * 20, EllipseSize);
  drawHorizontalEllipse(EllipseX * 28, EllipseY * 16, EllipseSize);
  drawHorizontalEllipse(EllipseX * 30, EllipseY * 19, EllipseSize);
  drawHorizontalEllipse(EllipseX * 33, EllipseY * 22, EllipseSize);


  function drawHorizontalEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 50, vol * 4);
    console.log(vol);
    //look up lerp for smoothness
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  started = true;
  userStartAudio();
}
