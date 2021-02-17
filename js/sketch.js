var fireworks = [];
var gravity;
var textInput = "Fonkey Monkey Friday";

let input = localStorage.getItem("greeting") || "fonkey monkey friday";


let numFireworks = localStorage.getItem("numFireworks") || 5;



let realNum = parseInt(numFireworks)/100;

console.log(realNum);


function setup() {
  createCanvas(innerWidth, innerHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
}


function draw() {
  colorMode(RGB);
  background(0, 0, 0, 40);
  textSize(128);
  text(input , (innerWidth /2) - input.length*(64/2) , innerHeight/2);
  fill(255);
  noStroke();

  if (random(1) < realNum) {
    fireworks.push(new Firework());
  }

  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
    
  }
}
