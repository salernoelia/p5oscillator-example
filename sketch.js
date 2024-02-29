let pg;
let osc;

function setup() {
  createCanvas(windowWidth, windowHeight)
  pg = createGraphics(windowWidth, windowHeight);
  pg.background(255);
  osc = new p5.Oscillator();
  osc.setType('triangle'); // changed oscillator type to triangle
  osc.amp(0); 
  osc.start();
  
  let submitButton = createButton('Submit');
  submitButton.position(pg.width/2, pg.height-30);
  submitButton.mousePressed(() =>{
    pg.save("pg.png"); 
    pg.background(255);
  })
}

function draw() {
  image(pg, 0, 0, width, height);
  
  if (mouseIsPressed) {
    pen();
  }
}

function pen(){
  pg.stroke(0, 0, 0, 255);
  pg.strokeWeight(1);
  pg.line(mouseX, mouseY, pmouseX, pmouseY);
  
  // Map mouse position to frequency
  let freq = map(mouseY, 0, height, 100, 1000);
  osc.freq(freq);
  
  // Map mouse position to amplitude (volume)
  let amp = map(mouseX, 0, width, 0.2, 1.0);
  osc.amp(amp);
}

function mouseReleased() {
  // When mouse is released, stop the sound
  osc.amp(0);
}

function windowResized() {
  createCanvas(windowWidth, windowHeight)
  pg = createGraphics(windowWidth, windowHeight);
}
