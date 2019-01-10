//GLOBAL VARIABLES
var wid;
var hei;
var characters = [];
var dt;

var Character = {
  init
}

//GET CANVASES
function init(){
  //Background canvas
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  canvas.width = wid;
  canvas.hei = hei;

  //Character canvas
  canvas2 = document.getElementById('canvasRed');
  ctx2 = canvas.getContext('2d');
  canvas2.width = wid;
  canvas2.hei = hei;

  dt = this.calculateDeltaTime();

  draw();
}


function createImage(src, x, y){
  var img = new Image();
  img.src = src;

  ctx.drawImage(img, x, y);
}

function moveImage(){
  ctx.translate(direction, 0);
  ctx.drawImage();
  xPos += incr;
  if(xPos <= 0 || dest <= xPos) {
    incr *= -1;
  }
}

function moveChars(){
  for(var i=0; i<characters.length; i++){
    characters[i].moveImage();
  }
}

function draw(){
  clearRect(0,0,wid,hei)

  requestAnimationFrame(draw);
}
