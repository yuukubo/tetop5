// teto

let [canvasx, canvasy] = [720, 690];
let [canvasFromx, canvasFromy] = [0, 0];
let gameage = 0;
let blockwh = 20;
let blockspdy = 1;
let blockspdx = blockwh;
let blockx = 0;
let blocky = 0;
let keyInterval = 0;

function setup() {
  createCanvas(canvasx, canvasy);
  blockx = canvasx / 2;
  blocky = 0;
}

function draw() {
  background(0);
  strokeWeight(2);
  stroke(100);
  rect(blockx, blocky, blockwh, blockwh);
  blocky += blockspdy;

  if (0 < keyInterval) {
    keyInterval--;
  }

  if (keyIsDown(LEFT_ARROW)) {
    if ((canvasFromx < blockx) && (keyInterval === 0)) {
      blockx -= blockspdx;
      keyInterval = 10;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if ((blockx < canvasx) && (keyInterval === 0)) {
      blockx += blockspdx;
      keyInterval = 10;
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
