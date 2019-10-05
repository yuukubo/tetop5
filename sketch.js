// teto

let [canvasx, canvasy] = [700, 680];
let [canvasFromx, canvasFromy] = [0, 0];
let gameage = 0;
let blockwh = 20;
let blockspdy = 1;
let blockspdx = blockwh;
let blockx = 0;
let blocky = 0;
let blockcolor = 0;
let keyInterval = 0;
let linexfr = 0;
let lineyfr = 0;
let linexto = canvasx;
let lineyto = canvasy;
let linexinterval = 20;
let lineyinterval = 20;
let linexnum = 0;
let lineynum = 0;

function setup() {
  createCanvas(canvasx, canvasy);
  blocky = 0;
  linexnum = canvasx / linexinterval;
  lineynum = canvasy / lineyinterval;
  blockx = floor(linexnum / 2) * blockwh;
  blockcolor = 255;
}

function draw() {
  background(0);

  push();
  stroke(255, 100);
  for (let i = 0; i < lineynum; i++) {
    line(linexfr, lineyfr + i * lineyinterval, linexto, lineyfr + i * lineyinterval);  
  }
  for (let i = 0; i < linexnum; i++) {
    line(linexfr + i * linexinterval, lineyfr, linexfr + i * linexinterval, lineyto);  
  }
  pop();

  push();
  strokeWeight(2);
  stroke(100);
  fill(blockcolor);
  rect(blockx, blocky - blockwh * 3, blockwh, blockwh);
  rect(blockx, blocky - blockwh * 2, blockwh, blockwh);
  rect(blockx, blocky - blockwh, blockwh, blockwh);
  rect(blockx, blocky, blockwh, blockwh);
  blocky += blockspdy;
  pop();

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
  if (canvasy <= blocky + blockwh) { 
    blocky = canvasy - blockwh;
    blockcolor = 150;
  }
  if (blocky < canvasFromy) { blocky = canvasFromy }
}
