let segments = [];

function addAll(arr, list) {
  for (let s of arr) {
    list.push(s);
  }
}

function setup() {
  createCanvas(600, 750);
  let a = createVector(0, 100);
  let b = createVector(600, 100);
  let s1 = new Segment(a, b);

  let len = p5.Vector.dist(a, b);
  let h = len * sqrt(3) / 2;
  let c = createVector(300, 100+h);
  
  let s2 = new Segment(b, c);
  let s3 = new Segment(c, a);
  segments.push(s1);
  segments.push(s2);
  segments.push(s3);

  //println(children);
}

var mouseClicked = function() {
  console.log("something")
  let nextGeneration = [];

  for (let s of segments) {
    let children = s.generate();
    addAll(children, nextGeneration);
  }
  segments = nextGeneration;
}


function draw() {
  background(0);
  translate(0, 100);

  stroke(255);
  for (let s of segments) {
    s.show();
  }
}