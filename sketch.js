// teto

let [canvasx, canvasy] = [720, 690];
let gameage = 0;
let blockwh = 20;
let blockspd = 1;
let blockx = 0;
let blocky = 0;

function setup() {
  createCanvas(canvasx, canvasy);
  blockx = canvasx - blockwh;
  blocky = 0;
}

function draw() {
  background(0);
  strokeWeight(2);
  stroke(100);
  rect((blockx) / 2, blocky, blockwh, blockwh);
  blocky += blockspd;

  if (canvasx <= blockx + blockwh) { blockx = canvasx - blockwh }
  if (blockx <= 0) { blockx = 0  }
  if (canvasy <= blocky + blockwh) { blocky = canvasy - blockwh }
  if (blocky < 0) { blocky = 0 }
}
