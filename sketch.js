// teto

let [canvasx, canvasy] = [720, 690];
let [canvasFromx, canvasFromy] = [0, 0];
let gameage = 0;
let blockwh = 20;
let blockspdy = 1;
let blockspdx = 3;
let blockx = 0;
let blocky = 0;

function setup() {
  createCanvas(canvasx, canvasy);
  blockx = (canvasx - blockwh) / 2;
  blocky = 0;
}

function draw() {
  background(0);
  strokeWeight(2);
  stroke(100);
  rect(blockx, blocky, blockwh, blockwh);
  blocky += blockspdy;

  if (keyIsDown(LEFT_ARROW)) {
    if (canvasFromx < blockx) {
      blockx -= blockspdx;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (blockx < canvasx) {
      blockx += blockspdx;
    }
  }
  // if (keyIsDown(UP_ARROW)) {
  //   if (canvasFromy < blocky) {
  //     blocky -= blockspdy;
  //   }
  // }
  if (keyIsDown(DOWN_ARROW)) {
    if (blocky < canvasy) {
      blocky += blockspdy;
    }
  }

  if (canvasx <= blockx + blockwh) { blockx = canvasx - blockwh }
  if (blockx <= canvasFromx) { blockx = canvasFromx  }
  if (canvasy <= blocky + blockwh) { blocky = canvasy - blockwh }
  if (blocky < canvasFromy) { blocky = canvasFromy }
}
