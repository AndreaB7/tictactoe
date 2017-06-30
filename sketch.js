
function setup() {
  var canvas = createCanvas(1000,500);
  canvas.parent('animation');
}

function draw() {
  background(242, 243, 244);

  noStroke();

  for (var i=0; i<1000; i+=20){
    var rnd = random(0,100);
    var a = map(rnd, 0, 90, 0, 205);

    fill(188,a);
    ellipse (5+i, height/2, 10, 10);
  }
}

console.log("This is P5.js")
